import Client from '../Clients/AxiosClient';

const resource = 'carts'

export default {
    index () {
        return Client.get(`${resource}`);
    },
    show (cartId) {
        return Client.get(`${resource}/${cartId}`);
    },
    create (payload) {
        return Client.post(`${resource}`, payload);
    },
    update (payload, cartId) {
        return Client.put(`${resource}/${cartId}`, payload);
    },
    delete (cartId) {
        return Client.delete(`${resource}/${cartId}`)
    },

    // MANY OTHER ENDPOINT RELATED STUFFS
}