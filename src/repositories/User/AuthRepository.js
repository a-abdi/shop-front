import Client from './Clients/AxiosClient'

export default {
    userRegister (userData) {
        return Client.post('register', userData)
    },

    userLogin (userData) {
        return Client.post('login', userData)
    }
};