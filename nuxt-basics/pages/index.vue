<script setup lang="ts">
import { useCounterStore } from "~/stores/myStore";
const store = useCounterStore();
console.log(store);
</script>

<template>
  <div>
    hello
  </div>
</template>
