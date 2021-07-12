import Client from '../Clients/AxiosClient'

export default {
    adminLogin (adminData) {
        return Client.post('/login', adminData)
    }
};