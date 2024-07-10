<script setup lang="ts">
const { data: products } = await useFetch('/api/products', {
  transform: (_products) => _products.data,
});
</script>

<template>
  <div>
    <p>{{products}}</p>>
  </div>
</template>
