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

        updateUserInformation(state, userInformation) {
            state.user.data.information = userInformation.data
            localStorage.setItem('user', JSON.stringify(state.user))
        },

        updateUserData(state, userData) {
            state.user.data.name = userData.data.name
            state.user.data.email = userData.data.email
            localStorage.setItem('user', JSON.stringify(state.user))
        }
    },

    actions: { 
        async register ({}, userData) {
            return await AuthRepository.register(userData) 
        },
    
        async login ({ commit }, userData) {
            const user = await AuthRepository.login(userData)
            commit('setUserData', user.data)
        },

        async forgotPassword ({}, email) {
            return await AuthRepository.forgotPassword(email)
        },

        async resetPassword ({}, resetPasswordData) {
            return await AuthRepository.resetPassword(resetPasswordData)
        },

        async personalInformation ({commit}, pseronalInformationData) {
            const userInformation = await  AuthRepository.personalInformation(pseronalInformationData)
            commit('updateUserInformation', userInformation.data)
        },

        async userUpdate ({ commit }, userData) {
            const user = await AuthRepository.userUpdate(userData)
            commit('updateUserData', user.data)
        },
          
         async signOut({ commit }) {
            await AuthRepository.logout()
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

        user (state) {
            return state.user
        }
    }
}