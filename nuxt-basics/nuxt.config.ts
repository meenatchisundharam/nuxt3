import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      title: "Nuxt course on youtube",
      meta:[
        {
          name:"description",
          content:"this is a repo for nuxt3 youtube"
        }
      ]
    },
  },
  devtools: { enabled: true },

  alias: {
   assets:"<rootDir></rootDir>"
  },

  css:["~/assets/main.scss"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@pinia/nuxt", "@nuxt/image"],
});