import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      isBanner: true
    },
    mutations: {
      SET_BANNER(state, payload) {
        state.isBanner = payload
      }
    },
    strict: true
  })

export default store
