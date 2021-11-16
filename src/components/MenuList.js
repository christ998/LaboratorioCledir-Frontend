import {Box, createTheme, List, ListItemButton, ListItemIcon, ListItemText, ThemeProvider} from "@mui/material";
import '../styles/MenuList.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {useState} from "react";


function MenuList() {
    const [open, setOpen] = useState(false)
    const fontSize = {
        fontSize: '18px'
    }
    return (
        <div>
            <Box sx={{backgroundColor: '#ACDDF3', py:'5px', borderRadius: '9px 9px 0 0', maxWidth: '532px'}}>
                <List>
                    <ListItemButton>
                        <ListItemText disableTypography={true} sx={fontSize} >Home</ListItemText>
                        <ListItemIcon>
                            <ExpandMoreIcon></ExpandMoreIcon>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText disableTypography={true} sx={fontSize}>Base de datos</ListItemText>
                        <ListItemIcon>
                            <ExpandMoreIcon></ExpandMoreIcon>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText disableTypography={true} sx={fontSize}>Búsqueda</ListItemText>
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