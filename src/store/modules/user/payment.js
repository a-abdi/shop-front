import PaymentRepository from '../../../repositories/User/PaymentRepository'

export default {
    namespaced: true,

    state: () => ({ 
       
    }),

    mutations: {
        
    },

    actions: { 
        async createPayment ({ commit }) {
           return await PaymentRepository.payment()
        },

        async getLatestError ({ commit }) {
            return await PaymentRepository.getLatestMessage()
        },
    },

    getters: {  
       
    }
}