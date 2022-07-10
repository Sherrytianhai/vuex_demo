import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './a.js'
import moduleB from './b.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'xxx'
  },
  mutations: {
    add(state) {
      state.name = 'xxx+++'
    }
  },
  actions: {},
  getters: {},
  modules: {
    a: moduleA,
    b: moduleB
  }
})
