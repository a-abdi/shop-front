import { createStore } from 'vuex'
import ProductRepository from '../repositories/ProductRepository'
import AuthRepository from '../repositories/AuthRepository'
import CartRepository from '../repositories/CartRepository'

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
      },

      loadCart (state, response) {
        const { data } = response
        state.cart = data
      }
    },

    getters: {
       userIsGuest(state) {
          if(!state.user) {
            return true
          } else {
            return false
          }
       }
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

      async userLogin ({ commit }, userData) {
        const user = await AuthRepository.userLogin(userData)
        commit('setUserData', user.data)
      },
      
      // async getCart () {
      //   console.log(await CartRepository.index())
      // },

      async addToCart ({ commit }, productId) {
        commit('loadCart', await CartRepository.create(productId))
      }

    }
})