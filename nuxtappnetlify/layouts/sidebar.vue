<template>
	<main class="user-layout">
	<article class="sidebar">
		<p class="font-bold text-5xl">Dashboard</p>
		<p>settings</p>
		<p>summa</p>
	</article>
	<section>
		<slot></slot>
	</section>
	</main>
</template>
<style>
	.sidebar{
		display: flex;
		flex-direction: column;
	}
	.user-layout{
		display: flex;
	}
</style>