import Client from './Clients/AxiosClient'

const resource = 'payment'

export default {  
    payment () {
        return Client.post(`${resource}`);
    },

    // MANY OTHER ENDPOINT RELATED STUFFS
}