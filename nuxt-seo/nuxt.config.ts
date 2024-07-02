// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-simple-robots", "@nuxtjs/sitemap"],
  sitemap: {sources: ['/api/urls'] }
})