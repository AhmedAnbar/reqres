import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from '../store'
import axios from 'axios'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(store.getters['user/getError'] || store.getters['user/getRegisterError'] || store.getters['user/getMessage']){
    store.dispatch('user/removeRegisterError')
    store.dispatch('user/removeError')
    store.dispatch('user/removeMessage')
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // eslint-disable-next-line no-console
    let token = store.getters['user/getToken']
    if (!token) {
      next({
        name: 'login',
      })
    } else {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
