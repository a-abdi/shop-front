import Client from './Clients/AxiosClient'

export default {
    register (userData) {
        return Client.post('register', userData)
    },

    login (userData) {
        return Client.post('login', userData)
    },

    forgotPassword (email) {
        return Client.post('/forgot-password', email)
    },

    resetPassword (resetPasswordData) {
        return Client.post('/reset-password', resetPasswordData)
    }
};