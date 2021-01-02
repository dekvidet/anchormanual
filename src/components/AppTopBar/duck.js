const initialState = () => ({
  connectionDialog: {
    isVisible: false,
  },
  hasUnpublishedData: false,
})

const getters = {}

const actions = {
  showConnectionDialog({ commit }) {
    commit('setConnectionDialog', { isVisible: true })
  },
  hideConnectionDialog({ commit }) {
    commit('setConnectionDialog', { isVisible: false })
  },
}

const mutations = {
  setConnectionDialog(state, data) {
    state.connectionDialog = data
  },
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
}
