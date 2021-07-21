import { createStore } from 'vuex'
import ProductRepository from '../repositories/ProductRepository'

import AdminModule from "./modules/admins"
import UserCartModule from "./modules/user/cart"
import ProductsModule from "./modules/products"
import UserAuthModule from "./modules/user/auth"
import AdminAuthModule from "./modules/admin/auth"
import CategoriesModule from "./modules/categories"

export default createStore({
    modules: {
      admin: AdminModule,
      adminAuth: AdminAuthModule,
      userCart: UserCartModule,
      categories: CategoriesModule,
      products: ProductsModule,
      userAuth: UserAuthModule,
    },

    state () {
      return {
        products: null,
        product: null,
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

      clearData ({}, item) {
        localStorage.removeItem(item);
      },
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
    }
})