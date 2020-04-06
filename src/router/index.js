import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Grupo from '../views/Grupo.vue'
import Cervejarias from '../views/Cervejarias.vue'
import Contato from '../views/Contato.vue'
import Detalhes from '../views/Detalhes.vue'
import notfound from '../views/notfound.vue'

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
      path: '/detalhes',
      name: 'Detalhes',
      component: Detalhes
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    },
    {
      path: '*',
      name: 'notfound',
      component: notfound
    }
  ]
})

// export default router
