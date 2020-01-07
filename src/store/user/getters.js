export default {
  getError: (state) => {
    return state.error
  },
  getRegisterError: (state) => {
    return state.register_error
  },
  getToken: (state) => {
    return state.token
  },
  getUserIsAuth: (state) => {
    return state.userIsAuth
  },
  getLoading: (state) => {
    return state.loading
  }
}
