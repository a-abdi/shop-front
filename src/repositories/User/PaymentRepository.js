import Client from './Clients/AxiosClient'

const resource = 'payment'

export default {
    index () {
        return Client.get(`${resource}`);
    },
    show (cartId) {
        return Client.get(`${resource}/${cartId}`);
    },
    payment () {
        return Client.post(`${resource}`);
    },
    update (payload, cartId) {
        return Client.put(`${resource}/${cartId}`, payload);
    },
    delete (cartId) {
        return Client.delete(`${resource}/${cartId}`)
    },

    // MANY OTHER ENDPOINT RELATED STUFFS
}