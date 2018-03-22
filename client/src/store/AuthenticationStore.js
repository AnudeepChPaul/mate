
const state = {
  isAuthenticated: false,
  token: null
}

const getters = {
  'GET_AUTHENTICATION_STATUS': (state) => () => (state.isAuthenticated),
  'GET_AUTHENTICATION_TOKEN': (state) => (state.token)
}

const mutations = {
  'SET_AUTHENTICATION': (state, { isAuthenticated, token }) => {
    state.isAuthenticated = isAuthenticated
    state.token = token
  }
}

const actions = {
  async 'SET_AUTHENTICATION' (store, payload) {
    store.commit('SET_AUTHENTICATION', {
      isAuthenticated: payload.isAuthenticated,
      token: payload.token
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
