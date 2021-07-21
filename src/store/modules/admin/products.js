import ProductRepository from "../../../repositories/Admin/ProductRepository"

export default {
    namespaced: true,

    state: () => ({

    }),

    mutations: {
       
    },

    actions: {
        async getProducts ({ commit }) {
            console.log( await ProductRepository.index())
        },

        async addProduct({commit}, productData) {
            return await ProductRepository.create(productData)
        },
    },

    getters: {
       
    }
}