<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <Nuxt-link to ="/iphone/iphone-12" class="shadow-lg border rounded-lg text-center">
      <h1>iPhone 12</h1>
      <div class="flex justify-center">
      	<img width="200px" src="/images/iph-12.webp" alt="iPhone 12" />
      </div>
    </Nuxt-link>
    <Nuxt-link to ="/iphone/iphone-12-pro" class="shadow-lg border rounded-lg text-center">
      <h1>iPhone 12 Pro</h1>
      <div class="flex justify-center">
      	<img width="200px" src="/images/iph-12-pro.webp" alt="iPhone 12 pro" />
      </div>
    </Nuxt-link>
  </div>
</template>
<script setup>
	useHead({
		title: "Nuxt3 - Iphone",
	});
</script>
