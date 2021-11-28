import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//Pages
import Login from "./views/Login";
import Buscador from "./views/Buscador";
import Agregar from "./views/Agregar";
import Inventario from "./views/Inventario";
import Home from "./views/Home";
import HomeCatalogue from "./views/HomeCatalogue";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/homecatalogue" element={<HomeCatalogue/>} />
                <Route path="/" element={<Buscador/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/agregar" element={<Agregar/>}/>
                <Route path="/inventario" element={<Inventario/>}/>
            </Routes>
        </Router>
    );
}

export default App;
