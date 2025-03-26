// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', 'nuxt-open-fetch'],
    openFetch: {
        clients: {
            spacetraders: {
                baseURL: 'https://api.spacetraders.io/v2/',
                schema: './openapi/spacetraders/spacetraders.json'
            },
        },
    },
    typescript: {
        typeCheck: true,
    },
});
