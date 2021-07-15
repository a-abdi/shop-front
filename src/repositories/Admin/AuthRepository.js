import Client from './Clients/AxiosClient'

export default {
    Login (adminData) {
        return Client.post('/login', adminData)
    }
};