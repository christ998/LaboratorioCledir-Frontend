import {Box, Button, TextField} from "@mui/material";
import ItemDropDown from "./ItemDropDown";
import SearchIcon from '@mui/icons-material/Search';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import '../styles/ListItemDropDown.scss'
import axios from "axios";
import {useEffect, useState} from "react";


function ListItemDropDown(props) {
    const [criteria, setCriteria] = useState('')
    const [empty, setEmpty] = useState({isCriteria: false, isStrainCode: false})
    const [criterionTwo, setCriterionTwo] = useState('')
    const [nameMic, setNameMic] = useState('')
    const {onSearch} = props


    function validate() {
        let isValid = true
        let emptyFields = {}

        if (criteria == '') {
            emptyFields.isCriteria = true
            isValid = false
        }

        if (nameMic == '') {
            emptyFields.isStrainCode = true
            isValid = false
        }

        setEmpty(emptyFields)
        console.log(empty)
        return isValid
    }

    async function search() {
        if (validate()){
            const dataFetched = await axios.get('http://localhost:4000/micparticular', {params: {[criteria]: nameMic}})
            onSearch(dataFetched.data)
        } else {
            return
        }

    }

    return (
        <Box display="flex" justifyItems={"center"} alignItems={"end"}>
            <ItemDropDown onEmpty={empty.isCriteria} handleValue={(operationName) => {setCriteria(operationName); setEmpty({...empty, isCriteria: false})}} names={['Species', 'Strain code']}/>
            <ItemDropDown handleValue={(operationName) => setCriterionTwo(operationName)}
                          names={['Starts with..']}/>
            <TextField error={empty.isStrainCode} onChange={(e) => setNameMic(e.target.value)} sx={{mb: '8px', mr: '8px'}}
                       id="demo-helper-text-misaligned-no-helper" label="Name"/>

            <Box sx={{my: "auto"}}>
                <Button onClick={search} variant="contained" startIcon={<SearchIcon/>} color={"error"}
                        sx={{mr: '10px'}}>Buscar</Button>
                <Button className="btn-hover" variant="outlined" startIcon={<DeleteOutlineIcon/>}>Reset</Button>
            </Box>

        </Box>
    )
}

export default ListItemDropDown