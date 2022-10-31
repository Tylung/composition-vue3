import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Recolectar las gemas del infinito', completed: false },
      { id: '2', text: 'Gema de la realidad', completed: false },
      { id: '3', text: 'Gema del tiempo', completed: true },
      { id: '4', text: 'Gema del alma', completed: false },
      { id: '5', text: 'Gema del poder', completed: true },
    ]
  },
  mutations: {
    toggleTodo( state, id ){

      const todoIdx = state.todos.findIndex( todo => todo.id === id )

      state.todos[todoIdx].completed = !state.todos[todoIdx].completed 

    }
  },
  actions: {
  },
  getters: {

    pendingTodos(state, getters, rootState) {
      return state.todos.filter( todo => !todo.completed )
    },

    allTodos: (state, getters, rootState) => {
      return state.todos
    },

    completedTodos: (state, getters, rootState) => {
      return state.todos.filter( todo => todo.completed )
    },

    getTodosByTab: ( _, getters ) => ( tab ) => {
      
      const statesTab = {
        'all': getters.allTodos,
        'pending': getters.pendingTodos,
        'completed': getters.completedTodos,
      }

      return statesTab[tab];

    }

  },
  modules: {
  }
})
