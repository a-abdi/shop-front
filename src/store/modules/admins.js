import ProductRepository from "../../repositories/Admin/ProductRepository"
import CategoryRepository from "../../repositories/Admin/CategoryRepository"

export default {
    namespaced: true,

    state: () => ({
        categories: null,
    }),

    mutations: {
        setCategories (state, response) {
            const { data } = response
            state.categories = data
        },
    },

    actions: {
        async getProducts ({ commit }) {
            console.log( await ProductRepository.index())
        },

        async addProduct({commit}, productData) {
            return await ProductRepository.create(productData)
        },

        async getCayegories ({commit}) {
            commit('setCategories', await CategoryRepository.index())
        },
    },

    getters: {
        categories (state) {
            return state.categories
        }
    }
}