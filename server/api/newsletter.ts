// server/api/newsletter.ts
import { defineEventHandler, readBody, getMethod, sendError, createError } from 'h3'

export default defineEventHandler(async (event) => {
    try {
        if (getMethod(event) !== 'POST')
            return sendError(event, createError({ statusCode: 405, statusMessage: 'Method Not Allowed' }))

        const { environmentId, apiHost, newsletterFormId } = useRuntimeConfig().public.formbricks
        if (!environmentId || !apiHost || !newsletterFormId)
            throw new Error('Formbricks-Config unvollständig')

        // 1) User-Input einlesen
        const { name, email, consent } = await readBody<{ name?:string; email:string; consent:boolean }>(event)

        // 2) Daten als Strings mappen
        const dataMap: Record<string,string> = {
            // Frage-IDs aus deinem Screenshot:
            'e9pmxj5pusvuiptjrijfgqr': String(name || ''),      // Name
            'ys2l6j81p0c9h57q10768vqx': String(email),          // E-Mail
            'h0njxgi7ad86jbkptet5xs3x': String(consent)         // Consent
        }

        // 3) Payload bauen
        const payload = {
            surveyId: newsletterFormId,
            finished: true,
            data: dataMap
        }

        // 4) POST an Public Client API
        const url = `${apiHost}/api/v1/client/${environmentId}/responses`
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })

        const text = await response.text()
        if (!response.ok) {
            return sendError(event, createError({ statusCode: response.status, statusMessage: text }))
        }

        return { statusCode: response.status, data: JSON.parse(text) }
    } catch (err:any) {
        return sendError(event, createError({ statusCode: err.statusCode||500, statusMessage: err.message }))
    }
})
