import axios from 'axios'

const baseDomain = "http://api.a-abdi.ir"

const baseURL = `${baseDomain}/api/admin`

export default axios.create({
    baseURL,
    headers: {

    }
});
