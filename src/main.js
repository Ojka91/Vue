import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LastArticles from './components/LastArticles'
import MiComponente from './components/MiComponente'
import HelloWorld from './components/HelloWorld'
import Blog from './components/Blog'
import Pagina from './components/Pagina'
import Formulario from './components/Formulario'
import ErrorComponent from './components/ErrorComponent'


Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: LastArticles
  },
  {
    path: '/ultimos-articulos',
    component: LastArticles
  },
  {
    path: '/mi-componente',
    component: MiComponente
  },
  {
    path: '/',
    component: LastArticles
  },
  {
    path: '/hola-mundo',
    component: HelloWorld
  },
  {
    path: '/formulario',
    component: Formulario
  },
  {
    path: '/pagina/:id?', 
    name: 'pagina',
    component: Pagina
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '*',
    component: ErrorComponent
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
