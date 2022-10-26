<template>
  <h2 v-if="isLoading">Espere por favor....</h2>

  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="users.length > 0">
    <ul>
      <li v-for="{ first_name, last_name, id, email} in users" :key="id">
        <h4> {{ first_name }} {{ last_name }} </h4>

        <h6> {{ email }} </h6>
      </li>
    </ul>
  </div>

  <button @click="lastPage">Atras</button>
  <button @click="nextPage"> Siguiente </button>
  <span>Página: {{ currentPage }}</span>
</template>

<script>
import useUsers from '@/composables/useUsers'

export default {

  setup() {

    const {
      currentPage,
      errorMessage,
      isLoading,
      users,
      nextPage,
      lastPage
    } = useUsers()

    return {
      currentPage,
      errorMessage,
      isLoading,
      users,
      nextPage,
      lastPage,
    }

  }

}
</script>

<style scoped>

h2 {
  text-align: center;
  width: 100%;
  justify-self: center;
}

button {
  margin: 0 1rem;
}

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

li {
  list-style: none;
}

</style>