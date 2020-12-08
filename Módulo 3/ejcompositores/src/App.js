import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Compositores from "./compositores";
import EliminarCompositor from "./eliminarCompositor";
import Cabecera from "./cabecera";

// const compositores = [
//   'Wolfgang Amadeus Mozart',
//   'Ludwig van Beethoven',
//   'Johann Sebastian Bach'
// ];


function App() {
  const [texto, setTexto] = useState('');
  // const [parrafo, setParrafo] = useState('');

  const [arrayCompositores, setArrayCompositores] = useState([
    {
      nombre: 'Wolfgang Amadeus Mozart',
      fecha: 1756,
      canciones: ['Symphonie Nr 40', 'Don Giovanni']
    },
    {
      nombre: 'Ludwig van Beethoven',
      fecha: 1770,
      canciones: ['Symphonie No.5', 'Piano Sonata No.32']
    },
    {
      nombre: 'Johann Sebastian Bach',
      fecha: 1685,
      canciones: ['Vivace', 'Largo ma non tanto']
    }
  ]);

  //i = compositor
  // const mostrarArrayCompositores = arrayCompositores.map((i) => {
  //   return <li>{i.nombre}</li>
  // });

  // const manageChange
  const cambiarTexto = (e) => {
    setTexto(e.target.value);
  };
  // const cambiarParrafo = () => {
  //   setParrafo(texto);
  // };

  const anyadirCompositor = () => {
    const nuevoArrayCompositores = arrayCompositores.slice()
    nuevoArrayCompositores.push({ nombre: texto });
    setArrayCompositores(nuevoArrayCompositores);
    setTexto('');
    // const nuevoArray  = [...compositores, text];
    // setArrayCompositores(nuevoArray);
  }

  const borrarCompositor = (nombre) => {
    const nuevoArray = arrayCompositores.filter((i) => i.nombre !== nombre);
    setArrayCompositores(nuevoArray);
  }

  // const borrar = () => {
  //   borrarCompositor(texto)
  // };

  return (
    <BrowserRouter>
      <div className="App">
        <Cabecera />
        <Route exact path="/">
          <Compositores compositores={arrayCompositores} />
          {/* <ul>{mostrarArrayCompositores}</ul> */}
          <input type="text" value={texto} onChange={cambiarTexto} />
          <button onClick={anyadirCompositor}>Añadir Compositor</button>
          <hr></hr>
        </Route>
        <Route exact path="/eliminar">
          <EliminarCompositor borrarCompositor={borrarCompositor} />
        </Route>
        {/* <input type="text" value={texto} onChange={cambiarTexto} />
      <button onClick={borrar}>Borrar Compositor</button> */}
        {/* <button onClick={cambiarParrafo}>Mostrar texto</button> */}
        {/* <p>{parrafo}</p> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
