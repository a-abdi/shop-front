import axios from 'axios';

const baseDomain = "http://192.168.1.131:8094"

const baseURL = `${baseDomain}/api`

const userData = localStorage.getItem('user')
const token = {}

if(userData) {
    const { data } = JSON.parse(userData)
    token.value = data.token
}

export default axios.create({
    baseURL,
    headers: {
        "Authorization": `Bearer ${token.value}`
    }
});
