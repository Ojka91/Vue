<template>
  <div id="app">
  <HeaderComponent/>
  <Slider/>
  <div class="center">
    <!--<LastArticles>
    </LastArticles> -->
    <router-view></router-view>


  <Sidebar/>
  </div>
  <div class="clearfix">

  <FooterComponent/>
  </div>
  </div>
</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'
import MiComponente from './components/MiComponente.vue'*/
import HeaderComponent from './components/HeaderComponent'
import Slider from './components/Slider'
import Sidebar from './components/Sidebar'
//import LastArticles from './components/LastArticles'
import FooterComponent from './components/FooterComponent'

export default {
  name: 'App',
  components: {
    Slider,
    HeaderComponent,
    Sidebar,
    
    FooterComponent
  }
}
</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/

@import './assets/css/styles.css';
</style>
