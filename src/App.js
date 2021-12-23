import {Routes, Route} from "react-router-dom";
//Pages
import Login from "./views/Login";
import Buscador from "./views/Buscador";
import Agregar from "./views/Agregar";
import Inventario from "./views/Inventario";
import Home from "./views/Home";
import HomeCatalogue from "./views/HomeCatalogue";
import RedirectIfNotLoggedIn from "./verifications/RedirectIfNotLoggedIn";
import RedirectIfLoggedIn from "./verifications/RedirectIfLoggedIn";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Buscador/>}/>
            <Route path="/login" element={<RedirectIfLoggedIn><Login/></RedirectIfLoggedIn>}/>
            <Route path="/agregar" element={<RedirectIfNotLoggedIn><Agregar/></RedirectIfNotLoggedIn>}/>
            <Route path="/inventario" element={<RedirectIfNotLoggedIn><Inventario/></RedirectIfNotLoggedIn>}/>
            <Route path="/home" element={<RedirectIfNotLoggedIn><Home/></RedirectIfNotLoggedIn>}/>
            <Route path="/homecatalogue" element={<RedirectIfNotLoggedIn><HomeCatalogue/></RedirectIfNotLoggedIn>}/>
        </Routes>
    );
}

export default App;
