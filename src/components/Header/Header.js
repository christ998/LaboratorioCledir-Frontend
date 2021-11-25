import React from "react";
import MenuList from "./MenuList";
import {Box, CardMedia} from "@mui/material";
import { styled } from '@mui/material/styles';
import photo from "../../Assets/Images/Header/back.jpg"

const Img = styled('img')({
    display: 'block',

});
export default class Header extends React.Component{

    render() {
        return(
            <Box sx={{position: 'relative'}}>
                <Img src={photo}/>
                <MenuList/>
            </Box>
        )
    }
}