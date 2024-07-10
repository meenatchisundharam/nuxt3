import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  hooks: {
    ready:(ctx) => console.log(ctx),
  },
  devtools: { enabled: true },

  alias: {
   assets:"<rootDir></rootDir>"
  },

  css:["~/assets/main.scss"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@pinia/nuxt", "@nuxt/image"],
});