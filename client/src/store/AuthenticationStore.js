
const state = {
  isAuthenticated: false
}

const getters = {
  'GET_AUTHENTICATION_STATUS': (state) => (state.isAuthenticated)
}

const mutations = {
  'SET_AUTHENTICATION': (state, {
    isAuthenticated
  }) => (state.isAuthenticated = isAuthenticated)
}

const actions = {
  async 'SET_AUTHENTICATION' (store, payload) {
    store.commit('SET_AUTHENTICATION', {
      isAuthenticated: payload.isAuthenticated
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
