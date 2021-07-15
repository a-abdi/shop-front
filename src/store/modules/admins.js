import Client from '../../repositories/Admin/Clients/AxiosClient'
import AuthRepository from "../../repositories/Admin/AuthRepository"
import ProductRepository from "../../repositories/Admin/ProductRepository"
import CategoryRepository from "../../repositories/Admin/CategoryRepository"

export default {
    namespaced: true,

    state: () => ({
        admin: null,
        categories: null,
    }),

    mutations: {
        setAdminData (state, adminData) {
            state.admin = adminData
            localStorage.setItem('admin', JSON.stringify(adminData))
            Client.defaults.headers.common['Authorization'] = `Bearer ${adminData.data}`
        },

        setCategories (state, response) {
            const { data } = response
            state.categories = data
        },

        clearData ({}, item) {
            localStorage.removeItem(item);
        },
    },

    actions: {
        async Login ({ commit }, adminData) {
            const admin = await AuthRepository.Login(adminData)
            commit('setAdminData', admin.data)
        },

        async getProducts ({ commit }) {
            console.log( await ProductRepository.index())
        },

        async addProduct({commit}, productData) {
            return await ProductRepository.create(productData)
        },

        async getCayegories ({commit}) {
            commit('setCategories', await CategoryRepository.index())
        },

        signOut({ commit }) {
            commit('clearData', 'admin')
            location.reload()
        }
    },

    getters: {
        isLoggined(state) {
            if(state.admin) {
              return true
    
            } else {
              return false
            }
        },

        categories (state) {
            return state.categories
        }
    }
}