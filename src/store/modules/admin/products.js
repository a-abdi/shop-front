import ProductRepository from "../../../repositories/Admin/ProductRepository"

export default {
    namespaced: true,

    state: () => ({
        
    }),

    mutations: {
       
    },

    actions: {
        async getProducts ({ commit }) {
            commit('loadProducts', await ProductRepository.index(), { root: true })
        },

        async addProduct({commit}, productData) {
            return await ProductRepository.create(productData)
        },
    },

    getters: {
       
    }
}