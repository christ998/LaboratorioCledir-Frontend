import axios from "./axios";

const requestMicroorganism = {
    getMicroorganism: async (parameters) => {
        const res = await axios.get("/micparticular", parameters)
        return res.data
    },

    createOrUpdate: async (parameters) => {
        const res = await axios.post('/micro/add', parameters)
        return res
    },

}

export default requestMicroorganism