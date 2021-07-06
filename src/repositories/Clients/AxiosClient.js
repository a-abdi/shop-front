import axios from 'axios';

const baseDomain = "http://192.168.1.130:8094"

const baseURL = `${baseDomain}/api`

let token = null

export const axiosSetToken = (token) => {
    token = token.data
}

export default axios.create({
    baseURL,
    headers: {
        "Authorization": `Bearer ${token}`
    }
});
