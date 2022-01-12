import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/sl-add-poll.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/solutiom-factory/',
  routes
})

export default router
