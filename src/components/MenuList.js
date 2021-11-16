import {
    Box,
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import '../styles/MenuList.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {useState} from "react";


function MenuList() {
    const [openHome, setOpenHome] = useState(false)
    const [openBd, setOpenBd] = useState(false)
    const [openSearcher, setOpenSearcher] = useState(false)
    const fontSize = {
        fontSize: '18px'
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
        <div>
            <Box sx={{backgroundColor: '#ACDDF3', py: '5px', borderRadius: '9px 9px 0 0', maxWidth: '532px'}}>
                <List>
                    <ListItemButton>
                        <ListItemText disableTypography={true} sx={fontSize}>Home</ListItemText>
                        <ListItemIcon>
                            {openHome ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton onClick={handleClick}>
                        <ListItemText disableTypography={true} sx={fontSize} id={2}>
                            Base de datos
                        </ListItemText>
                        <ListItemIcon>
                            {openBd ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton onClick={handleClick}>
                        <ListItemText disableTypography={true} sx={fontSize} id={3}>Búsqueda</ListItemText>
                        <ListItemIcon>
                            {openSearcher ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                        </ListItemIcon>
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