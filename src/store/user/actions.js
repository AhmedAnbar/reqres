import axios from 'axios'
import router from '../../router'
import {loginApi} from '@/helpers/api'
export default {
  loginUser: async (context, payload) => {
    context.commit('setLoading', true)
    try {
      const response = await axios.post(loginApi, payload)
      // eslint-disable-next-line no-console
      context.commit('setToken', response.data.token)
      context.commit('setLoading', false)
      router.push({name: 'resources'})
    } catch (error) {
      // eslint-disable-next-line no-console
      context.commit('setError')
      context.commit('setLoading', false)
    }
  },
  registerUser: async (context, payload) => {
    context.commit('setLoading', true)
    try {
      const response = await axios.post(loginApi, payload)
      // eslint-disable-next-line no-console
      context.commit('setToken', response.data.token)
      context.commit('setLoading', false)
      router.push({name: 'resources'})
    } catch (error) {
      // eslint-disable-next-line no-console
      context.commit('setError')
      context.commit('setLoading', false)
    }
  },
  logoutUser: (context) => {
    context.commit('setLogout')
    localStorage.removeItem('vuex')
    router.push({name: 'login'})
  },
  setError: (context) => {
    context.commit('setError')
  },
  setRegisterError: (context) => {
    context.commit('setRegisterError')
  },
  removeError: (context) => {
    context.commit('removeError')
  },
  removeRegisterError: (context) => {
    context.commit('removeRegisterError')
  }
}
