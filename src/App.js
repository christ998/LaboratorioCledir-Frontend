import {Routes, Route} from "react-router-dom";
//Pages
import Login from "./views/Login";
import Buscador from "./views/Buscador";
import Agregar from "./views/Agregar";
import Inventario from "./views/Inventario";
import Home from "./views/Home";
import HomeCatalogue from "./views/HomeCatalogue";
import RedirectIfNotLoggedIn from "./verifications/RedirectIfNotLoggedIn";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Buscador/>}/>
            <Route path="/agregar" element={<Agregar/>}/>

            <Route path="/inventario" element={<Inventario/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/homecatalogue" element={<HomeCatalogue/>}/>
            <Route path="/login" element={<Login/>}/>

        </Routes>
    );
}

export default App;
