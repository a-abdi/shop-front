import Client from '../../../repositories/User/Clients/AxiosClient'
import AuthRepository from '../../../repositories/User/AuthRepository'

export default {
    namespaced: true,

    state: () => ({ 
        user: null,
    }),

    mutations: {
        setUserData (state, userData) {
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            Client.defaults.headers.common['Authorization'] = `Bearer ${userData.data.token}`
        },
    },

    actions: { 
        async register ({}, userData) {
            return await AuthRepository.register(userData) 
        },
    
        async login ({ commit }, userData) {
            const user = await AuthRepository.login(userData)
            commit('setUserData', user.data)
        },
          
        signOut({ commit }) {
            commit('clearData', 'user', { root: true })
            commit('clearData', 'cart', { root: true })
            location.reload()
        },
    },

    getters: {  
        checkAuth(state) {
            if(state.user) {
              return true
    
            } else {
              return false
            }
        },
    }
}