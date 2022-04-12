import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      user: 'Juan Dela Cruz',
      friends: []
    }
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
