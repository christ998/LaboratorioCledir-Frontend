import {Box, Button} from "@mui/material";
import ItemDropDown from "./ItemDropDown";
import SearchIcon from '@mui/icons-material/Search';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import '../styles/ListItemDropDown.scss'
function ListItemDropDown() {

    return (
        <Box display="flex" justifyItems={"center"} alignItems={"center"}>
            <ItemDropDown/>
            <ItemDropDown/>
            <ItemDropDown/>
            <Box>
                <Button variant="contained" startIcon={<SearchIcon/>} color={"error"} sx={{mr: '10px'}}>Buscar</Button>
                <Button className="btn-hover" variant="outlined" startIcon={<DeleteOutlineIcon/>}>Reset</Button>
            </Box>

        </Box>
    )
}

export default ListItemDropDown