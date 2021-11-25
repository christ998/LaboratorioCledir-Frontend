import ListItemDropDown from "../components/ListItemDropDown";
import {useState} from "react";
import ListInventory from "../components/Tables/ListInventory";
import requestMicroorganism from "../requests/Microorganisms";
import {Alert, Skeleton} from "@mui/material";

const {getMicroorganism} = requestMicroorganism

function Inventario() {

    const [data, setData] = useState([])
    const [ready, setReady] = useState(false)
    const [someError, setSomeError] = useState(false)
    const [parameters, setParameters] = useState() // Este state es para guardar los últimos parámetros para refrescar la tabla al actualizar
    const [loading, setLoading] = useState(false)

    const handleTableData = (microorganism) => {
        if (ready === false) {
            setReady(true)

        } else {
            setReady(false)
            setReady(true)
        }

    };

    const onSearch = async (parameters) => {
        setSomeError(false)
        setReady(false)
        setLoading(true)
        setParameters(parameters)
        try {
            const data = await getMicroorganism(parameters)// Devuelve el data del request
            setData(data)
            handleTableData()
            setLoading(false)
        } catch (e) {
            setLoading(false)
            setSomeError(true)
            setTimeout(() => {
                setSomeError(false)
            }, 4000)
        }

    };


    return (
        <div>
            <ListItemDropDown onSearch={(parameters) => onSearch(parameters)}/>
            {someError &&
            <Alert severity="error">Sem conexão com o banco de dados</Alert>
            }
            {loading &&
            <>
                <Skeleton variant="rectangular" width={800} height={20}></Skeleton><br/>
                <Skeleton variant="rectangular" width={800} height={20}></Skeleton><br/>
                <Skeleton variant="rectangular" width={800} height={20}></Skeleton>
            </>
            }
            {ready ? (<ListInventory onUpdate={() => onSearch(parameters)} data={data}/>
            ) : null}
        </div>

    );
}

export default Inventario;