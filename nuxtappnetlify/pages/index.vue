<template>
	<div>
	<NuxtLink to = "/">Home</NuxtLink>
    <NuxtLink to = "/about">About</NuxtLink>

     <button @click="moveToabout">take me to about page</button>
    heloo index</div>
</template>

<script setup>
	function moveToabout() {
		// body...
		navigateTo('about');
	}
</script>