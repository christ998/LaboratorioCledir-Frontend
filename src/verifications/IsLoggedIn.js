import checkToken from "../requests/checktoken";
import {useEffect, useState} from "react";
export default function IsLoggedInAsAdmin({children}) {

    const [isToken, setIsToken] = useState(false)

    useEffect(async ()=>{
        const res = await checkToken(localStorage.getItem('token'))
        if (res) setIsToken(true)
    }, [])

    function check() {

        if (!isToken) {
            return <></>

        } else {
            return children
        }
    }

    return check()

}