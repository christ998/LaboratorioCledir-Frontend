import {Box, List, ListItemButton} from "@mui/material";
import '../styles/MenuList.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {useState} from "react";


function MenuList() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Box sx={{backgroundColor: '#ACDDF3', py:'5px', borderRadius: '9px 9px 0 0'}}>
                {/*<ul>*/}
                {/*    <li>Home <ExpandLessIcon></ExpandLessIcon> </li>*/}
                {/*    <li>Base de Datos<ExpandLessIcon></ExpandLessIcon></li>*/}
                {/*    <li>Búsqueda <ExpandMoreIcon></ExpandMoreIcon> </li>*/}
                {/*</ul>*/}
                <List>
                    <ListItemButton>Home</ListItemButton>
                    <ListItemButton>Base de datos</ListItemButton>
                    <ListItemButton>Búsqueda</ListItemButton>
                </List>
            </Box>
        </div>
    );
}

export default MenuList