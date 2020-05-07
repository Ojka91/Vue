<template>
  <section id="pagina">
    <h2 class="subheader">Pagina de prueba</h2>
    <h3>{{id_desde_url}}</h3>
    <button @click="actualizarNombre()">Actualizar nombre</button>
    <button @click="redirigir()">Redirigir</button>
    <h4>{{nombre}}</h4>
  </section>
</template>



<script>
export default {
  name: "Pagina",
  created() {
    console.log("Created done");
  },
  mounted() {
    this.id_desde_url = this.$route.params.id;
    console.log("Mounted done");
  },
  updated() {
    console.log("Updated done");
  },
  destroyed() {
    console.log("Destroyed done");
  },
  data() {
    return {
      id_desde_url: null,
      nombre: "Pepe"
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "Oscar";
      console.log(this.nombre);
    },
    redirigir() {
      this.$router.push('/blog')
    }
  }
};
</script>