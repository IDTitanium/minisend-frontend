import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

const API_BASE_URL = process.env.VUE_APP_API_HOST

export default new Vuex.Store({
  state: {
    emailStats: {}
  },
  mutations: {
    setEmailStats(state, data) {
      state.emailStats = data
    }
  },
  actions: {
    fetchCountSummary(context) {
      const response = axios.get(API_BASE_URL + '/emails/stats')
      context.commit('setEmailStats', response.data.data)
      return response
    }
  },
  getters: {
    getCountSummary(state) {
      return state.emailStats
    }
  },
  modules: {},
});
