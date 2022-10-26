<template>
	<h1>Counter view</h1>
	<h2>{{ counter }}</h2>

	<button style="margin:0 1rem;" @click="increase">+1</button>

	<button style="margin:0 1rem;" @click="decrease">-1</button>

</template>

<script>
import { ref } from 'vue'

export default {
	name: 'Counter',
	props: {},
	emits: [],
	setup() {
		const counter = ref(1)

		// const increase = () => {
		// 	counter.value++
		// }

		// const decrease = () => {
		// 	counter.value--
		// }

		return {
			counter,
			// methods
			increase: () => counter.value++,
			decrease: () => counter.value--
		}
	},
}
</script>

<style>

</style>


