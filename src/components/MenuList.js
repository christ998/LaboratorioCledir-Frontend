import {Box, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import '../styles/MenuList.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {useState} from "react";


function MenuList() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Box sx={{backgroundColor: '#ACDDF3', py:'5px', borderRadius: '9px 9px 0 0', maxWidth: '532px'}}>
                {/*<ul>*/}
                {/*    <li>Home <ExpandLessIcon></ExpandLessIcon> </li>*/}
                {/*    <li>Base de Datos<ExpandLessIcon></ExpandLessIcon></li>*/}
                {/*    <li>Búsqueda <ExpandMoreIcon></ExpandMoreIcon> </li>*/}
                {/*</ul>*/}
                <List>
                    <ListItemButton>
                        <ListItemText>Home</ListItemText>
                        <ListItemIcon>
                            <ExpandMoreIcon></ExpandMoreIcon>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText>Base de datos</ListItemText>
                        <ListItemIcon>
                            <ExpandMoreIcon></ExpandMoreIcon>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText>Búsqueda</ListItemText>
                        <ListItemIcon>
                            <ExpandMoreIcon></ExpandMoreIcon>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Box>
        </div>
    );
}

export default MenuList