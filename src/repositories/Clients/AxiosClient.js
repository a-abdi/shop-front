import axios from 'axios';

const baseDomain = "http://192.168.1.130:8094"

const baseURL = `${baseDomain}/api`

export default axios.create({
    baseURL,
    headers: {
        
    }
});
