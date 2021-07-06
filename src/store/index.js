import { createStore } from 'vuex'
import ProductRepository from '../repositories/ProductRepository'
import AuthRepository from '../repositories/AuthRepository'
import CartRepository from '../repositories/CartRepository'
import { axiosSetToken } from '../repositories/Clients/AxiosClient'

const productRepository = ProductRepository
const authRepository = AuthRepository

export default createStore({
    state () {
      return {
        products: null,
        product: null,
        cart: null,
        user: null,
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
      },

      setUserData (state, userData) {
        state.user = userData
        localStorage.setItem('user', JSON.stringify( userData))
        const { data } = userData
        axiosSetToken(data)
      }
    },

    getters: {
       
    },

    actions: {
      async getProducts ({ commit }) {
        commit('loadProducts', await productRepository.index())
      },

      async getProduct ({ commit }, { productId }) {
        commit('loadProduct', await productRepository.show(productId))
      },

      async userRegister ({}, userData) {
        return await authRepository.userRegister(userData) 
      },

      async userLogin ({commit}, userData) {
        commit('setUserData', await authRepository.userLogin(userData))
      },
      
      async getCart () {
        console.log(await CartRepository.index())
      }

    }
})