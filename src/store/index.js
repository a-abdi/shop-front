import { createStore } from 'vuex'
import ProductRepository from '../repositories/ProductRepository'
import UserCartModule from "./modules/user/cart"
import UserAuthModule from "./modules/user/auth"
import AdminProductsModule from "./modules/admin/products"
import AdminAuthModule from "./modules/admin/auth"
import AdminCategoriesModule from "./modules/admin/categories"

export default createStore({
    modules: {
      adminAuth: AdminAuthModule,
      adminCategories: AdminCategoriesModule,
      adminProducts: AdminProductsModule,
      userCart: UserCartModule,
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