import Client from './Clients/AxiosClient';

const resource = 'products';

export default {
    index () {
        return Client.get(`${resource}`);
    },

    show (id) {
        return Client.post(`${resource}/${id}`);
    },

    create (payload) {
        return Client.post(`${resource}`, payload);
    },

    update (id, payload) {
        return Client.put(`${resource}/${id}`, payload);
    },

    delete (id) {
        return Client.delete(`${resource}/${id}`);
    }
};