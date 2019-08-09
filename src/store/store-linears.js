import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  core: {
    ID1: {
      name: 'Go To Shop',
      completed: true,
      dueDate: '21/05/2019',
      dueTime: '14:00'
    },
    ID2: {
      name: 'Get Apples',
      completed: false,
      dueDate: '21/05/2019',
      dueTime: '15:00'
    },
    ID3: {
      name: 'Get Bananas',
      completed: false,
      dueDate: '21/05/2019',
      dueTime: '16:00'
    },
    ID4: {
      name: 'Get home',
      completed: false,
      dueDate: '21/05/2019',
      dueTime: '17:00'
    }
  }
}
const actions = {
  updateParentLine({ commit }, payload) { 
    commit('updateParentLine', payload)
  },
  deleteParentLine({ commit }, id) {
    commit('deleteParentLine', id)
  },
  addParentLine({ commit }, lineItem) {
    const id = uid()
    const payload = {
      id,
      lineItem
    }
    commit('addParentLine', payload)
  }
}
const mutations = {
  updateParentLine(st, payload) {
    Object.assign(st.core[payload.id], payload.updates)
  },
  deleteParentLine(st, id) {
    Vue.delete(st.core, id)
  },
  addParentLine(st, payload) {
    Vue.set(st.core, payload.id, payload.lineItem)
  }
}
const getters = {
  coreItems: st => st.core,
  
  coreCompletedItems: (st) => {
    const completedItems = {}
    Object.entries(st.core)
      .filter(([, v]) => v.completed)
      .forEach(([key, value]) => {
        completedItems[key] = value
      })
    return completedItems
  },

  coreIncompleteItems: (st) => {
    const inCompleteItems = {}
    Object.entries(st.core)
      .filter(([, v]) => !v.completed)
      .forEach(([key, value]) => {
        inCompleteItems[key] = value
      })
    return inCompleteItems
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
