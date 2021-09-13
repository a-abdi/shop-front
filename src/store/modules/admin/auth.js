import Client from '../../../repositories/Admin/Clients/AxiosClient'
import AuthRepository from "../../../repositories/Admin/AuthRepository"

export default {
    namespaced: true,

    state: () => ({ 
        admin: null,
    }),

    mutations: {
        setAdminData (state, adminData) {
            state.admin = adminData
            localStorage.setItem('admin', JSON.stringify(adminData))
            Client.defaults.headers.common['Authorization'] = `Bearer ${adminData.data}`
        },
    },

    actions: { 
        async login ({ commit }, adminData) {
            const admin = await AuthRepository.login(adminData)
            commit('setAdminData', admin.data)
        },

        async forgotPassword ({}, email) {
            return await AuthRepository.forgotPassword(email)
        },

        async resetPassword ({}, resetPasswordData) {
            return await AuthRepository.resetPassword(resetPasswordData)
        },


        signOut({ commit }) {
            commit('clearData', 'admin', { root: true })
            location.reload()
        },
    },

    getters: {  
        checkAuth(state) {
            if(state.admin) {
              return true
    
            } else {
              return false
            }
        },
    }
}