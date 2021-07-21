import CartRepository from '../../../repositories/User/CartRepository'

export default {
    namespaced: true,

    state: () => ({ 
        cart: null,
    }),

    mutations: {
        setCartData (state, cartData) {
            state.cart = cartData
            localStorage.setItem('cart', JSON.stringify( cartData ))
        },
    },

    actions: { 
        async getCart ({ commit }) {
            const cart = await CartRepository.index()
            commit('setCartData', cart.data)
        },

        async addToCart ({ commit }, productId) {
            const cart = await CartRepository.create(productId)
            commit('setCartData', cart.data)
        },
    },

    getters: {  
        cartCount(state) {
            if(state.cart) {
              return state.cart.data.length
    
            } else {
              return null
            }
        },

        cart (state) {
            return state.cart
        }
    }
}