import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
   assets:"<rootDir></rootDir>"
  },

  css:["~/assets/main.scss"],
  modules: ["@nuxtjs/tailwindcss"]
})