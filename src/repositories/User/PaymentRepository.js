import Client from './Clients/AxiosClient'

const resource = 'payment'

export default {  
    payment () {
        return Client.post(`${resource}`);
    },

    getLatestMessage () {
        return Client.get(`${resource}/message-latest`)
    }
}