<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>

    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIronman"> Change ironman </button>
    <button @click="changeHulk"> Change hulk </button>

    <h5>Tony: {{ ironmanIsAlive }}</h5>
    <h5>Bruce: {{ hulkIsAlive }}</h5>

    <button @click="changeStatus"> Cambiar status</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'HomeView',

  setup() {
    const ironman = ref({
      name: 'Tony',
      age: 50
    })

    const hulk = reactive({
      name: 'Bruce',
      age: 50
    })


    let ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value
      ironmanIsAlive = reactive(!ironmanIsAlive) // no funciona !
    }

    return {
      ironman,
      hulk,

      changeIronman: () => {
        ironman.value.name = 'Tony Stark'
        ironman.value.age = 55
      },
      changeStatus,
      changeHulk: () => {
        hulk.name = 'Bruce Banner'
        hulk.age = 55
      },
      ironmanIsAlive,
      hulkIsAlive
    }
  }

}
</script>
