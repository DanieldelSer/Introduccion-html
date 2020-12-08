import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from 'react';
import './App.css';

const Cabecera = () => {
  return (
    <>
      <h1>Perros y Gatos</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/perros">Perros</Link></li>
        <li><Link to="/gatos">Gatos</Link></li>
      </ul>
    </>
  )
}

const Gatos = (props) => {
  const mostrarGatos = props.gatos.map(gato =>{
    return <img src={gato} alt="" />
  })
  return mostrarGatos;
}

const Perros = (props) => {
  const mostrarPerros = props.perros.map(perro =>{
    return <img src={perro} alt="" />
  })
  return mostrarPerros;
}

function App() {
  const [gatos, setGatos] = useState([
    "https://s.france24.com/media/display/8c13820c-5b0e-11e9-bf90-005056a964fe/w:1280/p:4x3/gato.jpg",
    "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
  ]);
  const [perros, setPerros] = useState([
    "https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/opening.jpg",
    "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59bbb29c5bafe878503c9872/husky-siberiano-bosque.jpg"
  ]);
  return (
    <BrowserRouter>
    <div className="App">
      <Cabecera />
      <Route exact path="/">

      </Route>
      <Route exact path="/perros">
        <Perros perros={perros} />
      </Route>
      <Route exact path="/gatos">
        <Gatos gatos={gatos} />
      </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
