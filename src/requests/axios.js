import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 10000
})

instance.interceptors.request.use((config) => {
    if (localStorage.getItem('token')){
        config.headers = {
            'Authorization':`${localStorage.getItem('token')}`
        }
    }
    return config

})

export default instance