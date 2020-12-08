import { useState } from "react";
import './App.css';

const arrayNumeros = [1, 2, 3];

function App() {
  // const [nombre, setNombre] = useState('Iker');

  // const cambiarNombre = (e) => {
  //   setNombre(e.target.value);
  // };
  // const borrarNombre = () => {
  //   setNombre("");
  // }

  // return (
  //   <div className="App">
  //     <input type="text" value={nombre} onChange={cambiarNombre} />
  //     <button onClick={borrarNombre}>Borrar nombre</button>
  //     <p>{nombre}</p>
  //   </div>
  // );

  //Cambiar estado de React cuando es un array//

  const [array, setArray] = useState(arrayNumeros)

  const subirElemento = () => {
    const nuevoArray = array.slice();
    nuevoArray.push(4);
    setArray(nuevoArray);
  };

  const mostrarArray = array.map((indice) => {
    return <p>{indice}</p>
  });
  return (
    <div>
      <button onClick={subirElemento}>Subir</button>
      {mostrarArray}
    </div>
  )
}

export default App;
