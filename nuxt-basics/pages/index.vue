<script setup lang="ts">
const response = await $fetch('/api/hello')
console.log(response);
</script>

<template>
  <div>
    hello
  </div>
</template>
