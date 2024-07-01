<script setup>
const loading = ref(false)
const name = ref("Sundar")
const description =ref("Web developer")
</script>

<template>
<div class="p-2 m-2 border rounded flex items-center justify-center gap-2 cursor-pointer hover:bg-neutral-200 transition">
    <div class="rounded-full w-10 h-10 bg-green-500 flex items-center justify-center font-bold text-white ">
        {{ name[0]  }}
    </div>
    <div>
    <p class="mb-0 text-sm text-black font-bold leading-1">{{ name }}</p>
    <p class="m-0 text-xs">{{ description }}</p>
</div>
</div>
</template>