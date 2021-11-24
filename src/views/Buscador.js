import ListMicroorganism from "../components/ListMicroorganism";
import ListItemDropDown from "../components/ListItemDropDown";
import {useEffect, useState} from "react";
import ListInventory from "../components/Tables/ListInventory";


function Buscador() {
    const [data, setData] = useState([])
    const [ready, setReady] = useState(false)

    const handleTableData = (microorganism) => {
        if (ready === false) {
            setData(microorganism)
            setReady(true)

        } else {
            setReady(false)
            setData(microorganism)
            setReady(true)
        }

    }


    return (
        <div>
            <ListItemDropDown onSearch={handleTableData}/>
            {ready ? (<ListInventory data={data}/>
            ) : null}
        </div>

    );
}

export default Buscador;
