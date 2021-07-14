import { createStore } from 'vuex'
import ProductRepository from '../repositories/ProductRepository'
import AuthRepository from '../repositories/User/AuthRepository'
import CartRepository from '../repositories/User/CartRepository'
import UserClient from '../repositories/User/Clients/AxiosClient'
import AdminClient from '../repositories/Admin/Clients/AxiosClient'
import AdminAuthRepository from "../repositories/Admin/AuthRepository"
import AdminProductRepository from "../repositories/Admin/ProductRepository"
import AdminCategoryRepository from "../repositories/Admin/CategoryRepository"

export default createStore({
    state () {
      return {
        products: null,
        product: null,
        cart: null,
        user: null,
        admin: null,
        categories: null,
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

      setAdminData (state, adminData) {
        state.admin = adminData
        localStorage.setItem('admin', JSON.stringify(adminData))
        AdminClient.defaults.headers.common['Authorization'] = `Bearer ${adminData.data}`
      },

      setCategories (state, response) {
        const { data } = response
        state.categories = data
      },

      setCartData (state, cartData) {
        state.cart = cartData
        localStorage.setItem('cart', JSON.stringify( cartData ))
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

      authAdmin(state) {
        if(state.admin) {
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
      
      async getCart ({ commit }) {
        const cart = await CartRepository.index()
        commit('setCartData', cart.data)
      },

      async addToCart ({ commit }, productId) {
        const cart = await CartRepository.create(productId)
        commit('setCartData', cart.data)
      },

      async adminLogin ({ commit }, adminData) {
        const admin = await AdminAuthRepository.adminLogin(adminData)
        commit('setAdminData', admin.data)
      },

      async adminGetProducts ({ commit }) {
        console.log( await AdminProductRepository.index())
        // const admin = await AdminAuthRepository.adminLogin(adminData)
        // commit('setAdminData', admin.data)
      },

      async addProduct({commit}, productData) {
        const { data } = await AdminProductRepository.create(productData)
        return data
      },

      async adminGetCayegories ({commit}) {
        commit('setCategories', await AdminCategoryRepository.index())
      },

      userSignOut({ commit }) {
        commit('clearData', 'user')
        commit('clearData', 'cart')
        location.reload()
      },

      adminSignOut({ commit }) {
        commit('clearData', 'admin')
        location.reload()
      }
    }
})