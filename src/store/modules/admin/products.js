import ProductRepository from "../../../repositories/Admin/ProductRepository"

export default {
    namespaced: true,

    state: () => ({
        products: null,
        product:  null,
    }),

    mutations: {
       setProducts(state, response) {
           const { data } = response
           state.products = data
       },

       setProduct(state, response) {
        const { data } = response
        state.product = data
       }
    },

    actions: {
        async getProducts ({ commit }) {
            commit('setProducts', await ProductRepository.index())
        },

        async getProduct({ commit }, productId) {
            commit('setProduct', await ProductRepository.show(productId))
        },

        async createProduct({}, product) {
            return await ProductRepository.create(product.data)
        },

        async editProduct({}, product) {
            return await ProductRepository.update(product.data, product.id)
        },

        async deleteProduct({}, productId) {
            return await ProductRepository.delete(productId)
        },
    },

    getters: {
        products (state) {
           return state.products
        },

        product (state) {
            return state.product
        }
    }
}