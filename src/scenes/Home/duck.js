import contentList from '../../components/ContentList/duck'

const initialState = () => ({
  contentFormDialog: {
    isVisible: false,
    content: null,
  },
})

const getters = {}

const actions = {
  showContentFormDialog({ commit }, content = null) {
    commit('setContentFormDialog', {
      isVisible: true,
      content,
    })
  },
  hideContentFormDialog({ commit }) {
    commit('setContentFormDialog', {
      isVisible: false,
      content: null,
    })
  },
}

const mutations = {
  setContentFormDialog(state, data) {
    state.contentFormDialog = data
  },
}

export default {
  modules: {
    contentList,
  },
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
}
