import {Box, Button, TextField} from "@mui/material";
import ItemDropDown from "./ItemDropDown";
import SearchIcon from '@mui/icons-material/Search';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useRef, useState} from "react";


function ListItemDropDown(props) {
    const [criteria, setCriteria] = useState('')
    const [empty, setEmpty] = useState({isCriteria: false, isStrainCode: false})
    const [nameMic, setNameMic] = useState('')
    let inputChild = useRef()
    const {onSearch} = props


    function validate() {
        let isValid = true
        let emptyFields = {}

        if (criteria === '') {
            emptyFields.isCriteria = true
            isValid = false
        }

        if (nameMic === '') {
            emptyFields.isStrainCode = true
            isValid = false
        }

        setEmpty(emptyFields)
        return isValid
    }

     async function search() {
        if (validate()) {
            onSearch({params: {[criteria]: nameMic}})
        } else {
            return
        }

    }

    function reset() {
        inputChild.current.reset()
        setNameMic('')
    }

    return (
        <Box display="flex" justifyItems={"center"} alignItems={"end"}>
            <ItemDropDown ref={inputChild} onEmpty={empty.isCriteria} handleValue={(operationName) => {
                setCriteria(operationName);
                setEmpty({...empty, isCriteria: false})
            }} names={['Genus species', 'Strain code']}/>

            <TextField value={nameMic} error={empty.isStrainCode} onChange={(e) => setNameMic(e.target.value)}
                       sx={{mb: '8px', mr: '8px'}}
                       id="demo-helper-text-misaligned-no-helper" label="Name"/>

            <Box sx={{my: "auto"}}>
                <Button onClick={search} variant="contained" startIcon={<SearchIcon/>} color={"error"}
                        sx={{mr: '10px'}}>Search</Button>
                <Button onClick={reset} className="btn-hover" variant="outlined"
                        startIcon={<DeleteOutlineIcon/>}>Reset</Button>
            </Box>

        </Box>
    )
}

export default ListItemDropDown