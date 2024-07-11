// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxtjs/tailwindcss"],

  css: ["@/assets/main.scss"],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: "2024-07-11"
})