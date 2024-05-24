<template>
	<nav class="bg-purple-900 text-white shadow-lg text-lg flex justify-between">
		<NuxtLink to = "/">Home</NuxtLink>
        <NuxtLink to = "/about">About</NuxtLink>
        <NuxtLink to = "/iphone">Iphones</NuxtLink>
        <NuxtLink to = "/profile">profile</NuxtLink>
        <p>cart({{ cart.length }})</p>
	</nav>
</template>

<script setup>
	const cart = useCart();
</script>