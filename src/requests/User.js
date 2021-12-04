import axios from "./axios";

const authenticate = async (email, password) => {
    const response = await axios.post('/auth', {email, password})
    return response
}

export default authenticate