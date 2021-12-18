import ListMicroorganism from "../components/ListMicroorganism";
import ListItemDropDown from "../components/ListItemDropDown";
import Header from "../components/Header/Header";
import {useState} from "react";
import requestMicroorganism from "../requests/Microorganisms";
import {Box, Paper} from "@mui/material";
import {Helmet} from "react-helmet";

const {getMicroorganism} = requestMicroorganism

function Buscador() {
    const [data, setData] = useState([])
    const [ready, setReady] = useState(false)

    const handleTableData = () => {
        if (ready === false) {
            setReady(true)

        } else {
            setReady(false)
            setReady(true)
        }
    }

    const onSearch = async (parameters) => {
        const data = await getMicroorganism(parameters)// Devuelve el data del request
        setData(data)
        handleTableData()
    }


    return (
        <>
            <Helmet>
              <title>Buscador - MicroLab</title>
            </Helmet>
            <Header/>
            <Paper sx={{pb:'70px', pt:'80px'}} >
                <Box sx={{maxWidth: '800px', mx: 'auto'}}>
                    <ListItemDropDown onSearch={(parameters) => onSearch(parameters)}/>
                    {ready ? (<ListMicroorganism data={data}/>
                    ) : null}
                </Box>

            </Paper>
        </>
    );
}

export default Buscador;
