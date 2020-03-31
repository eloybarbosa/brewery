import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Grupo from '../views/Grupo.vue'
import Cervejarias from '../views/Cervejarias.vue'
import Contato from '../views/Contato.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/grupo',
      name: 'Grupo',
      component: Grupo
    },
    {
      path: '/cervejarias',
      name: 'Cervejarias',
      component: Cervejarias
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    }
  ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
})

// export default router
