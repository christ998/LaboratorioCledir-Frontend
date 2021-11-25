import axios from "./axios";
const requestMicroorganism = {
    getMicroorganism: async (parameters) => {
        const res = await axios.get("/micparticular", parameters)
        return res.data
    },

    updateStock: async (parameters) => {
        const res = await axios.post('/add', parameters)
        return res
    },




}

export default requestMicroorganism