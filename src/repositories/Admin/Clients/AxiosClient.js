import axios from 'axios'

const baseDomain = "http://192.168.1.145:8094"

const baseURL = `${baseDomain}/api/admin`

export default axios.create({
    baseURL,
    headers: {

    }
});
