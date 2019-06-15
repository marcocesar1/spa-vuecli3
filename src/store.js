import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    persona: []
  },
  mutations: {
    setPersona(state, persona){
      state.persona = persona;
    }
  },
  actions: {
    getPersona(context){
      Axios.get('http://jsonplaceholder.typicode.com/todos/1').then( response => {        
        context.commit('setPersona', response.data)
      })
    }
  }
})