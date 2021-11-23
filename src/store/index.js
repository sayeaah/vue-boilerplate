import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: 'Juan Dela Cruz',
    friends: []
  },
  mutations: {
    setFriend(state, value) {
      state.friends.push(value);
    }
  },
  actions: {
  },
  modules: {
  }
})
