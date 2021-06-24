import { createStore } from 'vuex'

export default createStore({
    state () {
        return {
          user: 'null',
        }
    },

    mutations: {
        setUserData (state) {
          state.user = 'test';
        }
    },

    getters: {
        isLoged (state) {
          return state.user;
        }
    },

    actions: {
      auth ({ commit }) { commit('setUserData') }
    }
})