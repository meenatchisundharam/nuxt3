<template>
	<div>
     <button @click="moveToabout">take me to about page</button>
    heloo index</div>
</template>

<script setup>
	function moveToabout() {
		// body...
		navigateTo('about');
	}
</script>