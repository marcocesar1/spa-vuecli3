<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p><strong>{{persona}}</strong></p>
    <small>data desde api test - run ie</small>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState} from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['persona'])
  }
}
</script>
