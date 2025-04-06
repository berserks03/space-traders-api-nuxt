import { API_URL } from "./constants/constants";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', 'nuxt-open-fetch'],
    openFetch: {
        clients: {
            spacetraders: {
                baseURL: API_URL,
                schema: './openapi/spacetraders/spacetraders.json'
            },
        },
    },
    typescript: {
        typeCheck: true,
    },
});
