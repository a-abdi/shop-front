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
        async getCayegories ({commit}) {
            commit('setCategories', await CategoryRepository.index())
        },

        async getCayegory ({commit}, CategoryId) {
            commit('setCategory', await CategoryRepository.show(CategoryId))
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