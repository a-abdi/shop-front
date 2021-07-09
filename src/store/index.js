import { createStore } from 'vuex'
import ProductRepository from '../repositories/ProductRepository'
import AuthRepository from '../repositories/AuthRepository'
import CartRepository from '../repositories/CartRepository'
import Client from '../repositories/Clients/AxiosClient'

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
        Client.defaults.headers.common['Authorization'] = `Bearer ${userData.data.token}`;
      },

      setCartData (state, cartData) {
        state.cart = cartData
        localStorage.setItem('cart', JSON.stringify( cartData ))
      }
    },

    getters: {
      userIsGuest(state) {
        if(!state.user) {
          return true

        } else {
          return false
        }
      },

      countCart(state) {
        if(state.cart) {
          return state.cart.data.length

        } else {
          return null
        }
      },
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
      
      async getCart ({ commit }) {
        const cart = await CartRepository.index()
        commit('setCartData', cart.data)
      },

      async addToCart ({ commit }, productId) {
        const cart = await CartRepository.create(productId)
        commit('setCartData', cart.data)
      }

    }
})