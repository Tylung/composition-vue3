import { ref } from 'vue'
import axios from 'axios'

const usePokemon = ( idPokemon = 1 ) => {

	const pokemon = ref()
	const isLoading = ref(false)
	const errMsg = ref()

	const searchPokemon = async ( id ) => {
		if ( !id ) return

		isLoading.value = true
		pokemon.value = null

		try {
			const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

			pokemon.value = data

			errMsg.value = null

			console.log(pokemon.value)

		} catch (error) {
			errMsg.value = `No se pudo cargar ese pokemon ${idPokemon}`
		}

	}

	searchPokemon( idPokemon );

	return {
		errMsg,
		isLoading,
		pokemon,
		searchPokemon
	}

}


export default usePokemon