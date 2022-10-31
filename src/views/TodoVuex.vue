<template>
  <h1>Lista de tareas de Thanos</h1>
  <h4>Pendientes: {{ pending.length }}</h4>
  <!-- <h4>Todos: {{ all.length }}</h4> -->
  <!-- <h4>Completados: {{ completed.length }}</h4> -->

  <button 
  	:class="{ 'active': currentTab === 'all' }"
	@click="currentTab ='all'">
	Todos
  </button>
  <button 
  	:class="{ 'active': currentTab === 'pending' }"
	@click="currentTab ='pending'">
	Pendientes
  </button>
  <button 
  	:class="{ 'active': currentTab === 'completed' }"
	@click="currentTab ='completed'">
	Completados
  </button>

  <div>
	<ul>
		<li v-for="todo in getTodosByTab" :key="todo.id" :class="{ 'completed': todo.completed }" @dblclick="toggleTodo(todo.id)">
			{{ todo.text }}
		</li>
	</ul>
  </div>

</template>

<script>
import useTodos from '@/composables/useTodos'

export default {
	setup() {
		const {
			toggleTodo,
			currentTab,
			getTodosByTab,
			pending
		} = useTodos()


		return {
			toggleTodo,
			currentTab,
			getTodosByTab,
			pending
		}
	}
}
</script>

<style scoped>

div {
	display: flex;
	justify-content: center;
	align-content: center;
}

ul {
	width: 300px;
	text-align: center;
}

li {
	list-style: none;
	cursor: pointer;
	margin: 10px;
	border: 1px solid #000;
	border-radius: 10px;
}

button {
	padding: 10px;
	margin: 10px;
	transition: all 0.3s;
}

button:hover {
	background-color: #42b983;
}

.active {
	background-color: #2c3e50;
	color: #fff;
}

.completed {
	text-decoration: line-through;
}

</style>