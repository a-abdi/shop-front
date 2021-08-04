import Client from './Clients/AxiosClient';

const resource = 'products'

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
    edit (payload, productId) {
        return Client.post(`${resource}/${productId}`, payload);
    },
    delete (productId) {
        return Client.delete(`${resource}/${productId}`)
    },

    // MANY OTHER ENDPOINT RELATED STUFFS
}