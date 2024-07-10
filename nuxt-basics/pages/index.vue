<script lang="ts">
useHead({
  title: 'my nuxt app',
  meta: [
    { name: 'description', content: 'my nuxt site' },
    { name: 'keywords', 
    content: 'nuxt, vue, javascript, seo' },
    { property: 'og:title', content: 'My Nuxt App' },
    { property: 'og:description', content: 'Description of my Nuxt site' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.my-nuxt-site.com' },
    { property: 'og:image', content: 'https://www.my-nuxt-site.com/og-image.jpg' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [
    {
      children: 'console.log(\'Hello world\')'
    }
  ]
})
</script>

<template>
  <div>hello seo</div>
</template>
