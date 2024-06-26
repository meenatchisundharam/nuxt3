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
		<highchart :options="options" />
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
	const options = computed(() => ({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Monthly Average Temperature'
    },
    subtitle: {
      text: 'Source: <a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" target="_blank">Wikipedia.com</a>'
    },
    xAxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [
      {
        name: 'Reggane',
        data: [
          16.0, 18.2, 23.1, 27.9, 32.2, 36.4,
          39.8, 38.4, 35.5, 29.2, 22.0, 17.8
        ]
      },
      {
        name: 'Tallinn',
        data: [
          -2.9, -3.6, -0.6, 4.8, 10.2, 14.5,
          17.6, 16.5, 12.0, 6.5, 2.0, -0.9
        ]
      }
    ]
  }));
	
</script>