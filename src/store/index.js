import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

const API_BASE_URL = process.env.VUE_APP_API_HOST

export default new Vuex.Store({
  state: {
    emailStats: {},
    allEmails: [],
    receiverEmails: {}
  },
  mutations: {
    setEmailStats(state, data) {
      state.emailStats = data
    },
    setAllEmails(state, data) {
      state.allEmails = data
    },
    setReceiverEmails(state, data) {
      let receiver = data.receiver
      state.receiverEmails[receiver] = data
    }
  },
  actions: {
    async fetchCountSummary(context) {
      const response = await axios.get(API_BASE_URL + '/emails/stats')
      context.commit('setEmailStats', response.data.data)
      return response
    },
    async fetchAllEmails(context) {
      const response = await axios.get(API_BASE_URL + '/emails')
      context.commit('setAllEmails', response.data.data)
      return response
    },
    async fetchEmailsByReceiver(context, data) {
      const response = await axios.get(API_BASE_URL + '/emails/receiver?receiver='+ data.receiver)
      context.commit('setReceiverEmails', response.data.data)
      return response
    }
  },
  getters: {
    getCountSummary(state) {
      return state.emailStats
    },
    getAllEmails(state) {
      return state.allEmails
    },
    getReceiverEmails(state) {
      return state.receiverEmails
    }
  },
  modules: {},
});
