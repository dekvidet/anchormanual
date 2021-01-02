import { calculateNextStatus } from './services'

const initialState = () => ({
  contents: [],
  lastId: 0,
})

const getters = {}

const actions = {
  createContent({ commit }, content) {
    commit('incrementLastId', content)
    commit('createContent', content)
  },
  updateContent({ commit }, content) {
    commit('updateContent', content)
  },
  deleteContent({ commit }, id) {
    commit('deleteContent', id)
  },
  undeleteContent({ commit }, id) {
    commit('undeleteContent', id)
  },
  moveContentUp({ commit }, id) {
    commit('moveContent', id)
  },
  moveContentDown({ commit }, id) {
    commit('moveContent', id)
  },
  syncContents({ commit }) {
    commit('syncContents')
  },
}

const mutations = {
  setContents(state, contents) {
    state.contents = contents
  },
  incrementLastId(state) {
    state.lastId += 1
  },
  createContent(state, content) {
    state.contents.push({ ...content, id: state.lastId, status: calculateNextStatus(null, 'create') })
  },
  updateContent(state, newContent) {
    state.contents = state.contents.map(content => {
      if (content.id === newContent.id) {
        return {
          ...newContent,
          status: calculateNextStatus(content.status, 'update'),
        }
      }
      return content
    })
  },
  deleteContent(state, id) {
    const contentToDelete = state.contents.find(content => content.id === id)
    const newStatus = calculateNextStatus(contentToDelete.status, 'delete')
    if (newStatus === null) {
      state.contents = state.contents.filter(content => content.id !== id)
    } else {
      state.contents = state.contents.map(content => {
        if (content.id === id) {
          return { ...content, status: newStatus }
        }
        return content
      })
    }
  },
  undeleteContent(state, id) {
    state.contents = state.contents.map(content => {
      if (content.id === id) {
        return { ...content, status: calculateNextStatus(content.status, 'undelete') }
      }
      return content
    })
  },
  syncContents(state) {
    state.contents = state.contents
      .map(content => ({ ...content, status: calculateNextStatus(content.status, 'sync') }))
      .filter(content => content.status === 'synced')
  },
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
}
