<template>
<div>
    <hr/>
    <h1>Este es mi componente</h1>
    <h1>{{subtitulo}}</h1>
    <span>{{test}}</span>
    <hr/>
</div>
  
</template>

<script>
export default {
    name: 'MiComponente',
    data(){
        return{
            subtitulo: 'Soy el subtitulo del componente',
            test: "test"
        }
    }
}
</script>