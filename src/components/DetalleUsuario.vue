<template>
    <div>
        <h3>Detalle de usuario</h3>
        <div v-for="(persona,index) in info" :key="index">
            <p>Name: {{persona.name}}</p>
            <p>Username: {{persona.username}}</p>
            <p>Email: {{persona.email}}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DetalleUsuario',
    props: {
        info: Array
    }
}
</script>