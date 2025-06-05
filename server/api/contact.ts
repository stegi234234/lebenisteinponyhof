// server/api/contact.ts
import { defineEventHandler, readBody, getMethod, sendError, createError } from 'h3'

export default defineEventHandler(async (event) => {
    try {
        // 1) Nur POST
        if (getMethod(event) !== 'POST') {
            return sendError(event, createError({ statusCode: 405, statusMessage: 'Method Not Allowed' }))
        }

        // 2) Config prüfen
        const { environmentId, apiHost, contactFormId } = useRuntimeConfig().public.formbricks
        if (!environmentId || !apiHost || !contactFormId) {
            throw new Error('Formbricks-Config unvollständig')
        }

// … vorheriger Code …

// 3) Body auslesen
        const { answers } = await readBody<{ answers: Array<{ questionId: string; answer: any }> }>(event)
        console.log('[contact API] Received answers:', answers)

// 4) Aus answers-Array echte Datenmap bauen (jetzt immer Strings)
        const dataMap: Record<string, string> = {}
        for (const { questionId, answer } of answers) {
            dataMap[questionId] = String(answer)
        }

// 5) Payload bauen
        const payload = {
            surveyId: contactFormId,
            finished: true,
            data: dataMap
        }
        console.log('[contact API] Final payload for Formbricks (strings):', JSON.stringify(payload, null, 2))

// … Rest wie gehabt …


        // 6) Ziel-URL
        const url = `${apiHost}/api/v1/client/${environmentId}/responses`
        console.log('[contact API] Proxying POST to:', url)

        // 7) Mit global fetch senden
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })

        // 8) Status und Body immer auslesen
        const text = await response.text()
        console.log('[contact API] Formbricks status:', response.status)
        console.log('[contact API] Formbricks response body:', text)

        // 9) Versuche JSON-Parse
        let responseBody: any
        try {
            responseBody = JSON.parse(text)
        } catch {
            responseBody = { raw: text }
        }

        // 10) Wenn nicht ok, 400+ direkt weitergeben
        if (!response.ok) {
            return sendError(event, createError({
                statusCode: response.status,
                statusMessage: typeof responseBody === 'object' ? JSON.stringify(responseBody) : text
            }))
        }

        // 11) Erfolg
        return {
            statusCode: response.status,
            data: responseBody
        }
    } catch (err: any) {
        console.error('[contact API] ERROR', err)
        return sendError(event, createError({
            statusCode: err.statusCode || 500,
            statusMessage: err.message || 'Unbekannter Serverfehler'
        }))
    }
})
