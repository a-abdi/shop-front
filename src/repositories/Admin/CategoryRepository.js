import Client from './Clients/AxiosClient';

const resource = 'categories'

export default {
    index () {
        return Client.get(`${resource}`);
    },
    show (productId) {
        return Client.get(`${resource}/${productId}`);
    },
    create (payload) {
        return Client.post(`${resource}`, payload);
    },
    update (payload, productId) {
        return Client.put(`${resource}/${productId}`, payload);
    },
    delete (productId) {
        return Client.delete(`${resource}/${productId}`)
    },

    // MANY OTHER ENDPOINT RELATED STUFFS
}