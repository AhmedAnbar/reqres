import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = () => ({
  token: null,
  error: null,
  register_error: null,
  userIsAuth: false,
  loading: false
})

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
