import ListMicroorganism from "../components/ListMicroorganism";
import ListItemDropDown from "../components/ListItemDropDown";
import { useState} from "react";
import requestMicroorganism from "../requests/Microorganisms";
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

    const onSearch = async (parameters) =>{
        const data = await getMicroorganism(parameters)// Devuelve el data del request
        setData(data)
        handleTableData()
    }


    return (
        <div>
            <ListItemDropDown onSearch={(parameters) => onSearch(parameters)}/>
            {ready ? (<ListMicroorganism data={data}/>
            ) : null}
        </div>

    );
}

export default Buscador;
