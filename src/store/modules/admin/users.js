import UserRepository from "../../../repositories/Admin/UserRepository"

export default {
    namespaced: true,

    state: () => ({
        users: null,
        user:  null,
    }),

    mutations: {
        setUsers (state, response) {
            const { data } = response
            state.users = data
        },

        setUser (state, response) {
            const { data } = response
            state.user = data
        },
    },

    actions: {
        async getUsers ({commit}) {
            commit('setUsers', await UserRepository.index())
        },

        async getUser ({commit}, userId) {
            commit('setUser', await UserRepository.show(userId))
        },

        async deleteUser({}, userId) {
            return await UserRepository.delete(userId)
        },
    },

    getters: {
        users (state) {
            return state.users
        },

        user (state) {
            return state.user
        }
    }
}