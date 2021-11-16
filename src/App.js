import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Pages
import Login from "./views/Login";
import Buscador from "./views/Buscador";
import Agregar from "./views/Agregar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Buscador />} />
        <Route path="/login" element={<Login />} />
        <Route path="/agregar" element={<Agregar />} />
      </Routes>
    </Router>
  );
}

export default App;
