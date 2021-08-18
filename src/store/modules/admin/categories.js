import CategoryRepository from "../../../repositories/Admin/CategoryRepository"

export default {
    namespaced: true,

    state: () => ({
        categories: null,
        category:   null,
    }),

    mutations: {
        setCategories (state, response) {
            const { data } = response
            state.categories = data
        },

        setCategory (state, response) {
            const { data } = response
            state.category = data
        },
    },

    actions: {
        async getCategories ({commit}) {
            commit('setCategories', await CategoryRepository.index())
        },

        async getCategory ({commit}, categoryId) {
            commit('setCategory', await CategoryRepository.show(categoryId))
        },

        async createCategory ({}, categoryData) {
            return await CategoryRepository.create(categoryData)
        },

        async editCategory({}, category) {
            return await CategoryRepository.update(category.data, category.id)
        },
    },

    getters: {
        categories (state) {
            return state.categories
        },

        category (state) {
            return state.category
        }
    }
}