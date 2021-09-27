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
    },

    getters: {  
       
    }
}