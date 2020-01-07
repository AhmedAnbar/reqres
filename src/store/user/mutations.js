export default {
  setLoading: (state, payload) => {
    state.loading = payload
  },
  setToken: (state, payload) => {
    state.token = payload
    state.userIsAuth = true
  },
  setError: (state) => {
    state.error = "Invalid Email or Password <br /> Make sure you are registerd"
  },
  setRegisterError: (state) => {
    state.register_error = "Invalid Email or Password"
  },
  removeError: (state) => {
    state.error = null
  },
  removeRegisterError: (state) => {
    state.register_error = null
  },
  setLogout: (state) => {
    state.token = null
    state.userIsAuth = false
    state.login_error = null
    state.error = null
  }
}
