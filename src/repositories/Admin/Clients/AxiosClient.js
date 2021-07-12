import axios from 'axios'

const baseDomain = "http://192.168.1.133:8094"

const baseURL = `${baseDomain}/admin/api`

export default axios.create({
    baseURL,
    headers: {

    }
});
