import Vue from 'vue'
import VueBodyClass from 'vue-body-class'

import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      bodyClass: 'theme-alexandremasy view-home'
    }
  }
]

const vbc = new VueBodyClass(routes);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  vbc.guard(to, next)
})
vbc.guard(router.currentRoute, () => {})

export default router
