import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      activeTag: 1,
      isBanner: true
    },
    mutations: {
      SET_BANNER(state, payload) {
        state.isBanner = payload
      },
      SET_TAG(state, payload) {
        state.activeTag = payload
      }
    },
    strict: true
  })

export default store
