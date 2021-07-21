import Client from './Clients/AxiosClient'

export default {
    login (adminData) {
        return Client.post('/login', adminData)
    }
};