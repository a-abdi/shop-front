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

        async updateCart ({ commit }, cartData) {
            const cart = await CartRepository.update({ quantity: cartData.quantity }, cartData.id)
            commit('setCartData', cart.data)
        },

        async deleteCart ({ commit }, cartId) {
           const cart = await CartRepository.delete(cartId)
           commit('setCartData', cart.data)
        }
    },

    getters: {  
        cartCount(state) {
            if(state.cart) {
                let countCart = 0
                state.cart.data.forEach(cart => {
                    countCart += cart.quantity
                });
                return countCart
    
            } else {
              return null
            }
        },

        cart (state) {
            return state.cart
        }
    }
}