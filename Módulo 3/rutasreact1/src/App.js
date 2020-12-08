import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import { useState } from 'react';


const Cabecera = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/nombres">Nombres</Link>
        </li>
      </ul>
    </header>
  );
};

const Nombres = () => {
  const [nombres, setNombres] = useState(["Mikel", "Javier", "Rolo", "Jesus", "Daniel"]);
  const mostrarNombres = nombres.map(nombre => {
    return <li>{nombre}</li>
  });
  return <ul>{mostrarNombres}</ul>;
};

function App() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Route exact path="/">
        <h1>Rutas en React</h1>
      </Route>
      <Route exact path="/nombres">
        <Nombres />
      </Route>
    </BrowserRouter>
  );
}

export default App;
