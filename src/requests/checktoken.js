import axios from "./axios";

async function checkToken(token) {
    const res = await axios.post("/checkjwt", {token})
    if (res.status == 200) {
        return true
    }
}

export default checkToken