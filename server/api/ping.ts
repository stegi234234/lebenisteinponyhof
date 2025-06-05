import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
    try {
        // Ein simpler Fetch auf Google zur Kontrolle
        const res = await $fetch.raw('https://www.google.com')
        return { ok: true, status: res.status }
    } catch (err: any) {
        return { ok: false, error: err.message }
    }
})
