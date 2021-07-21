import { createStore } from 'vuex'
import ProductRepository from '../repositories/ProductRepository'
import AuthRepository from '../repositories/User/AuthRepository'
import CartRepository from '../repositories/User/CartRepository'
import UserClient from '../repositories/User/Clients/AxiosClient'

import AdminModule from "./modules/admins"
import UserCartModule from "./modules/user/cart"
import ProductsModule from "./modules/products"
import UsersModule from "./modules/users"
import CategoriesModule from "./modules/categories"

export default createStore({
    modules: {
      admin: AdminModule,
      userCart: UserCartModule,
      categories: CategoriesModule,
      products: ProductsModule,
      users: UsersModule,
    },

    state () {
      return {
        products: null,
        product: null,
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
        localStorage.setItem('user', JSON.stringify(userData))
        UserClient.defaults.headers.common['Authorization'] = `Bearer ${userData.data.token}`
      },

      clearData ({}, item) {
        localStorage.removeItem(item);
      },
    },

    getters: {
      authUser(state) {
        if(state.user) {
          return true

        } else {
          return false
        }
      },

      cartCount(state) {
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
      
      userSignOut({ commit }) {
        commit('clearData', 'user')
        commit('clearData', 'cart')
        location.reload()
      },
    }
})