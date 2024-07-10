<script lang="ts">
const title = ref("this is my dynamic title");
</script>

<template>
  <div>
    <Head>
      <Title>this is my nuxt title</Title>
      <Meta name="description" :content="title" />
      <Style type="text/css" children="body { background-color: green; }" />
    </Head>
  </div>
</template>
