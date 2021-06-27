import { createStore } from 'vuex'
import ProductRepository from '../repositories/ProductRepository';
import Repository from "../repositories/RepositoryFactory"

const productRepository = Repository.get("products")

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