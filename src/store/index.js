import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, getCity, setCity } from '@/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getToken() || {},
    city: getCity() || {}
  },
  getters: {},
  mutations: {
    setUser (state, payload) {
      state.user = payload
      setToken(payload)
    },
    setACity (state, payload) {
      state.city = payload
      setCity(payload)
    }
  },
  actions: {},
  modules: {}
})
