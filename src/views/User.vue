<template>
    <div>
        <h1>Info</h1>        
        <p>Id desde props: {{userId}}</p>
        <p>Id desde $route: {{$route.params.userId}}</p>

        <DetalleUsuario :info="searchIdPersona"/>

    </div>
</template>

<script>

import store from '../store'
import DetalleUsuario from '@/components/DetalleUsuario.vue'

export default {
    name: 'Usuario',
    components: {
        DetalleUsuario
    },
    props: ['userId'],
    computed: {
        searchIdPersona(){
            return store.getters.searchIdPersona(this.userId)
        }
    }
}

</script>