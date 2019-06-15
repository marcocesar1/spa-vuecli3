import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personas: []
  },
  getters: {
    searchPersona: (state) => (busqueda) => {
      return state.personas.filter( persona => persona.name.toLowerCase().includes(busqueda) )
    },
    searchIdPersona: (state) => (id) => {
      return state.personas.filter( persona => persona.id == id )
    },
  },
  mutations: {
    setPersonas(state, personas){
      state.personas = personas;
    }
  },
  actions: {
    getPersona(context){
      Axios.get('http://jsonplaceholder.typicode.com/users').then( response => {
        context.commit('setPersonas', response.data)
      })
    }
  }
})