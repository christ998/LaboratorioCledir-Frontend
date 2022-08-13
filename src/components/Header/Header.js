import React, {useEffect, useState} from "react";
import MenuList from "./MenuList";
import {Box, Button, Link, ThemeProvider} from "@mui/material";
import {styled} from '@mui/material/styles';
import photo from "../../Assets/Images/Home/logoUfro.png"
import {createTheme} from '@mui/material/styles';
import {indigo} from "@mui/material/colors";
import checkToken from "../../requests/checktoken";
import {useNavigate} from "react-router-dom";

const Img = styled('img')({
    display: 'block',
    maxHeight: '130px',

});

const theme = createTheme({
    palette: {
        primary: indigo,
    },
});
export default function Header() {

    const [isToken, setIsToken] = useState(false) // guarda si existe un token valido o no
    const history = useNavigate()

    const menuCentralised = {
        position:"absolute",
        bottom:0,
        left:"50%",
        translate: "-50%"
    }

    const logo = {
        // position: "absolute",
        marginLeft: "54px"
    }


    useEffect(async () => {
        if (localStorage.getItem("token")){
            const res = await checkToken(localStorage.getItem('token'))
            if (res) setIsToken(true)
        }

    }, [])

    const signOut = () => {
        localStorage.removeItem('token')
        history('/home')
        window.location.reload()
    }

    function isSignedIn() {

        if (!isToken) {
            return (
                <Link href="/login"><Button variant="contained" color="primary">Sign in</Button></Link>

            )
        } else {

            return (
                <Link><Button onClick={signOut} variant="contained" color="primary">Sign out</Button></Link>

            )
        }
    }

    return (
        <ThemeProvider theme={theme}>

            <Box sx={{ backgroundColor: '#003a6c', position: 'relative'}}>
                <Box sx={logo}>
                    <Img src={photo}/>
                </Box>
                <Box sx={menuCentralised}>
                    <MenuList/>
                </Box>
                <Box sx={{position: 'absolute', bottom: '10%', left: '85%'}}>
                    {isSignedIn()}
                </Box>
            </Box>
        </ThemeProvider>

    )

}