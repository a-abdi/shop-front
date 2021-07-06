import Client from './Clients/AxiosClient';

export default {
    registerUser (userData) {
        return Client.post('register', userData)
    }
};