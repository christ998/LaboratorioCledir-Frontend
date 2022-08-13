import {
    Box,
    Collapse,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import '../../styles/MenuList.scss'

import {useState} from "react";
import {useNavigate} from "react-router-dom";


function MenuList() {
    const [openHome, setOpenHome] = useState(false)
    const [openBd, setOpenBd] = useState(false)
    const [openSearcher, setOpenSearcher] = useState(false)
    const history = useNavigate();

    const fontSize = {
        fontSize: '13px',
        fontFamily: 'Roboto',
        fontWeight: 500,
    }

    const handleClick = (event) => {

        switch (event.target.id) {
            case '2':
                setOpenBd(!openBd);
                break;
            case '3':
                setOpenSearcher(!openSearcher);
                break;
        }
    }
    return (
        <div className="">
            <Box sx={{color: '#fcfcfc'}}>
                <List className="menu-list">
                    <ListItemButton onClick={() => history("/home")} sx={{borderRight: '1px solid rgba(0,0,0,.1)'}}>
                        <ListItemText disableTypography={true} sx={fontSize}>HOME</ListItemText>
                        {/*<ListItemIcon>*/}
                        {/*    {openHome ? <ExpandLessIcon/> : <ExpandMoreIcon/>}*/}
                        {/*</ListItemIcon>*/}
                    </ListItemButton>
                    {/*<ListItemButton onClick={handleClick}>*/}
                    {/*    <ListItemText disableTypography={true} sx={fontSize} id={2}>*/}
                    {/*        Base de datos*/}
                    {/*    </ListItemText>*/}
                    {/*    <ListItemIcon>*/}
                    {/*        {openBd ? <ExpandLessIcon/> : <ExpandMoreIcon/>}*/}
                    {/*    </ListItemIcon>*/}
                    {/*</ListItemButton>*/}
                    <ListItemButton onClick={() => history('/buscar')}>
                        <ListItemText disableTypography={true} sx={fontSize} id={3}>SEARCH</ListItemText>
                        {/*<ListItemIcon>*/}
                        {/*    {openSearcher ? <ExpandLessIcon/> : <ExpandMoreIcon/>}*/}
                        {/*</ListItemIcon>*/}
                    </ListItemButton>

                </List>
                <Collapse in={openBd} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemText primary="Starred"/>
                        </ListItemButton>
                    </List>
                </Collapse>
                <Collapse in={openSearcher} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemText primary="Búsqueda"/>
                        </ListItemButton>
                    </List>
                </Collapse>

            </Box>
        </div>
    );
}

export default MenuList