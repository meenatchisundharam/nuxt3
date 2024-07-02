<template>
    <div>this is a sundar webpage 
        {{ route.params.blog }}
    </div>
    </template>

    <script setup lang="ts">
    const route = useRoute()
    </script>