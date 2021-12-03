import {Navigate} from "react-router-dom";

export default function RedirectIfNotLoggedIn({children}) {

    function check() {
        if (!localStorage.getItem('token')) {
            return <Navigate to='/login' />
        } else {
            return children
        }
    }

    return check()
}