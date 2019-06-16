<template>
  <div class="home">    
    <div class="row">
      <div class="col-md-6">
        <input v-model="busqueda" class="form-control" type="text" placeholder="Name">
      </div>
      <div class="col-md-6">
        <p>{{busqueda}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(persona, index) in searchPersona" :key="index">
              <th scope="row" v-text="persona.id"></th>
              <td>
                <router-link :to="{ name: 'user', params: { userId: persona.id } }">{{persona.name}}</router-link>
              </td>
              <td v-text="persona.username"></td>
              <td v-text="persona.email"></td>
            </tr>
          </tbody>
        </table>        
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 center">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import store from '../store'
import {mapState} from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['personas']),
    searchPersona(){
      return store.getters.searchPersona(this.busqueda)
    }
  },
  data(){
    return{
      busqueda: ''
    }
  }
}
</script>

<style>
.center{
  text-align: center;
}
</style>
