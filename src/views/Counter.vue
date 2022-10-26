<template>
	<h1>Counter view</h1>
	<h2>{{ counter }}</h2>

	<button style="margin:0 1rem;" @click="increase">+1</button>

	<button style="margin:0 1rem;" @click="decrease">-1</button>

</template>

<script>
import useCounter from '@/composables/useCounter'

export default {
	name: 'Counter',
	props: {},
	emits: [],
	setup() {
		
		const { counter, increase, decrease } = useCounter(25)
		const { counter:counter2, increase:increase2, decrease:decrease2 } = useCounter()

		return {
			counter,
			increase,
			decrease
		}

	},
}
</script>

<style>

</style>


