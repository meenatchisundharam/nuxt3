<template>
	<div>
		<div class="grid grid-cols-2">
			<div>
				<img :src="`/images/iph${route.params.name}.webp`" />
			</div>
			<div class="text-center">
				<h1 class="text-3xl">iphone {{ name }}</h1>
				<button @click="addToCart" class="p-3 bg-indigo-800 text-white rounded-md mt-5 w-48">
					<span v-if="isInCart()"> remove from cart </span>
					<span v-else> Buy Now </span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
const route = useRoute();
const name = computed(() => {
  return route.params.name.replaceAll("-", " ");
});

const fullname = computed(() => {
  return `iphone-${route.params.name}`;
});


const cart = useCart();

function isInCart(){
  return !!cart.value.find( ct => ct.name === fullname.value);
}


function addToCart() {
if (!isInCart()) {
	cart.value.push({name: fullname});
}else{
	cart.value = cart.value.filter((ct) => ct.name !== fullname.value);
}	
}
useHead({
  title: `Nuxt-3 - iphone ${name.value}`, // Use name.value for computed property 
}); 
</script>
