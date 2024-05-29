<template>
  <div>
    <p>these page i using custom</p>
    <slot />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
</script>