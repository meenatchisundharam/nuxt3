<template>
   <button @click="increment">increment</button>
    <p>{{ count }}</p>
    <button @click="decrement">decrement</button>
</template>

<script setup>
  const count = ref(0);
  function increment() {
    // body...
    count.value++;
  }
  function decrement() {
    count.value--;
  }
</script>

