import { createStore } from 'vuex'
import ProductRepository from '../repositories/ProductRepository'
import AuthRepository from '../repositories/AuthRepository'
import CartRepository from '../repositories/CartRepository'
import { axiosSetToken } from '../repositories/Clients/AxiosClient'

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
        axiosSetToken(data.data)
      }
    },

    getters: {
       
    },

    actions: {
      async getProducts ({ commit }) {
        commit('loadProducts', await ProductRepository.index())
      },

      async getProduct ({ commit }, { productId }) {
        commit('loadProduct', await ProductRepository.show(productId))
      },

      async userRegister ({}, userData) {
        return await AuthRepository.userRegister(userData) 
      },

      async userLogin ({commit}, userData) {
        commit('setUserData', await AuthRepository.userLogin(userData))
      },
      
      // async getCart () {
      //   console.log(await CartRepository.index())
      // }

    }
})