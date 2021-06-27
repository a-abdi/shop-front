import { createStore } from 'vuex'
import ProductRepository from '../repositories/ProductRepository';

export default createStore({
    state () {
      return {
        products: null
      }
    },

    mutations: {
      loadProducts (state, response) {

        const { data } = response

        state.products = data
      }
    },

    getters: {
       
    },

    actions: {
      async getProducts ({ commit }) {
        commit('loadProducts', await ProductRepository.index())
      }
    }
})