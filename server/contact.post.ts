// server/api/contact.post.ts
import { readBody, sendError } from 'h3'

export default defineEventHandler(async (event) => {
    try {
        const { environmentId, apiHost, contactFormId } = useRuntimeConfig().public.formbricks;
        const body = await readBody<{ answers: Array<{questionId:string;answer:any}> }>(event);

        const url = `${apiHost}/api/public/${environmentId}/forms/${contactFormId}/responses`;

        // Proxy-Request mit $fetch (Nitro-Built-in)
        const response = await $fetch.raw(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        return {
            statusCode: response.status,
            data: await response.json()
        };
    } catch (err: any) {
        return sendError(event, createError({
            statusCode: err.statusCode || 500,
            statusMessage: err.message
        }));
    }
});
