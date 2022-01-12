import React, {useEffect, useState} from "react";
import MenuList from "./MenuList";
import {Box, Button, CardMedia, Link, ThemeProvider} from "@mui/material";
import {styled} from '@mui/material/styles';
import photo from "../../Assets/Images/Header/header.jpg"
import {createTheme} from '@mui/material/styles';
import {indigo} from "@mui/material/colors";
import checkToken from "../../requests/checktoken";
import {useNavigate} from "react-router-dom";

const Img = styled('img')({
    display: 'block',

});

const theme = createTheme({
    palette: {
        primary: indigo,
    },
});
export default function Header() {

    const [isToken, setIsToken] = useState(false) // guarda si existe un token valido o no
    const history = useNavigate()


    useEffect(async () => {
        const res = await checkToken(localStorage.getItem('token'))
        if (res) setIsToken(true)
    }, [])

    const signOut = () => {
        localStorage.removeItem('token')
        history('/home')
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

            <Box sx={{position: 'relative'}}>
                <Img src={photo}/>
                <MenuList/>
                <Box sx={{position: 'absolute', bottom: '10%', left: '85%'}}>
                    {isSignedIn()}
                </Box>
            </Box>
        </ThemeProvider>

    )

}