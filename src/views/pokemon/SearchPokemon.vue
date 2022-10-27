<template>
  <h1>Buscar pokemon: {{ idPokemon }}</h1>
  <form @submit.prevent="onSubmit">
    <input
		type="number" 
		placeholder="Numero del pokemon" 
		v-model="idPokemon"
		min="1"
		ref="txtSearchId"
	>
  </form>
	<span>Presione enter para buscar</span>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { ref, onActivated } from 'vue' 

export default {
	setup() {

		onActivated(() => {
			txtSearchId.value.select()
		});
		

		const router = useRouter()

		const idPokemon = ref(1);		

		const txtSearchId = ref()
		

		return {
			idPokemon,
			onSubmit: () => {
				console.log(`Pokemon a buscar ${ idPokemon.value }`)
				router.push({ name: 'pokemon-id', params: { id: idPokemon.value } })
			},
			txtSearchId
		}
	}
};
</script>
