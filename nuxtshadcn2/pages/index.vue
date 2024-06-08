<template>
	<div class="grid w-full gap-4">
	 <header class="flex items-start justify-between">
	 	<div class="grow">
	 		<p>Hi , Welcome back Sundhar</p>
	 	<h1>Dashboard</h1>
	 	</div>
	 	<div class="w-[120px] h-12 bg-neutral-200"></div>
	 </header>
	 <main class="grid gap-2">
	 	 <Tabs default-value="today" class="w-[400px]">
    <TabsList>
      <TabsTrigger v-for="item , index in list" :key="index" :value="item.title">
        {{ item.title }}
      </TabsTrigger>
    </TabsList>
    <TabsContent v-for="item in list" :key="item.title" :value="item.title">
  <template #default>
    <component :is="item.component" />
  </template>
</TabsContent>

  </Tabs>
	 	<!-- <div class="flex items-center gap-4">
	 		<div v-for="(item, index) in 3" :key="index" class="w-[120px] h-[36px] bg-neutral-200"></div>
	 	</div>
	 	<section>
	 		<div class="w-full h-[360px] bg-neutral-200"></div>
	 </section> -->
	 </main>
	 <footer>
	 	<div class="flex items-center gap-4">
	 		<div v-for="(item, index) in 3" :key="index" class="w-full h-[260px] bg-neutral-200"></div>
	 	</div>
	 </footer>
	 </div>
</template>

<script setup>
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
	const loading = ref(false)
	const list = [
	{
		title: "Today",
		component: resolveComponent('TabsToday')//custom component relative tdy
	},{
		title: "Week",
		
	},{
		title: "Month",
		
	},{
		title: "Year",
		
	},

	]
	
</script>