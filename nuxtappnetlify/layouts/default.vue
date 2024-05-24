<template>
	<nav class="bg-purple-700 text-white shadow-lg text-lg flex justify-between">
		<NuxtLink to = "/">Home</NuxtLink>
        <NuxtLink to = "/about">About</NuxtLink>
        <NuxtLink to = "/iphone">Iphones</NuxtLink>
        <NuxtLink to = "/profile">profile</NuxtLink>
	</nav>

	<slot></slot>
</template>