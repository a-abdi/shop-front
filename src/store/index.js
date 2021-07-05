import { createStore } from 'vuex'
import ProductRepository from '../repositories/ProductRepository'

const productRepository = ProductRepository

export default createStore({
    state () {
      return {
        products: null,
        product: null
      }
    },

    mutations: {
      loadProducts (state, response) {
        const { data } = response
        state.products = data
      },

      loadProduct (state, response) {
        const { data } = response
        state.product = data
      }
    },

    getters: {
       
    },

    actions: {
      async getProducts ({ commit }) {
        commit('loadProducts', await productRepository.index())
      },

      async getProduct({ commit }, { productId }) {
        commit('loadProduct', await productRepository.show(productId))
      }
    }
})