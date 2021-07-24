import Client from './Clients/AxiosClient'

export default {
    login (adminData) {
        return Client.post('/login', adminData)
    },

    forgotPassword (email) {
        return Client.post('/forgot-password', email)
    }
};