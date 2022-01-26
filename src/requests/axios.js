import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_APP,
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