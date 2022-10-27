<template>
  <h1 v-if="!pokemon && !errMsg">Buscando....</h1>
  <h1 v-else-if="errMsg"> {{ errMsg }}</h1>

  <template v-else>
    <h2>
      {{ pokemon.name }}
    </h2>
    <img :src="pokemon.sprites.front_default
    " :alt="pokemon.name">
  </template>
  <br>
  <router-link :to="{ name: 'pokemon-search' }">
    Regresar
  </router-link>
</template>

<script>
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import usePokemon from '@/composables/usePokemon';
import { watch } from '@vue/runtime-core';
import Swal from 'sweetalert2'

export default {
  setup() {
    const route = useRoute()

    const { isLoading, pokemon, errMsg, searchPokemon } = usePokemon(route.params.id)

    watch(
      () => route.params.id,
      () => searchPokemon(route.params.id)
    )

    onBeforeRouteLeave(async () => {
      // const answer = window.confirm('Esta seguro de que desea salir?')
      const answer = await Swal.fire({
        title: 'Warning',
        text: 'Estas seguro que deseas salir?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No!',
      })

      if (!answer.isConfirmed){
        return false
      }

    })


    return {
      isLoading,
      pokemon,
      errMsg
    }
  }
}
</script>

<style>

</style>
