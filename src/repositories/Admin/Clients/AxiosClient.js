import axios from 'axios'

const baseDomain = "http://a-abdi.ir:8080"

const baseURL = `${baseDomain}/api/admin`

export default axios.create({
    baseURL,
    headers: {

    }
});
