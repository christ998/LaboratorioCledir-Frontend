import ListItemDropDown from "../components/ListItemDropDown";
import {useState} from "react";
import ListInventory from "../components/Tables/ListInventory";
import requestMicroorganism from "../requests/Microorganisms";
const {getMicroorganism} = requestMicroorganism

function Inventario() {

    const [data, setData] = useState([])
    const [ready, setReady] = useState(false)
    const [parameters, setParameters] = useState() // Este state es para guardar los últimos parámetros para refrescar la tabla al actualizar

    const handleTableData = (microorganism) => {
        if (ready === false) {
            setReady(true)

        } else {
            setReady(false)
            setReady(true)
        }

    }
    const onSearch = async (parameters) =>{
        setParameters(parameters)
        const data = await getMicroorganism(parameters)// Devuelve el data del request
        setData(data)
        handleTableData()
    }


    return (
        <div>
            <ListItemDropDown onSearch={(parameters) => onSearch(parameters)}/>
            {ready ? (<ListInventory onUpdate={() => onSearch(parameters)} data={data}/>
            ) : null}
        </div>

    );
}

export default Inventario;