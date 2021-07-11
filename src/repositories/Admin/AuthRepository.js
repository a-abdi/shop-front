import Client from '../Clients/AxiosClient'

export default {
    adminLogin (adminData) {
        return Client.post('admin/login', adminData)
    }
};