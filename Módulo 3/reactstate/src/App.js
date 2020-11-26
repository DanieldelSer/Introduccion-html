
import './App.css';
import sistemaSolar from "./sistemasolar";
import Planetas from './planeta';
import { useState } from 'react';

function App() {
  const nuevoSistemaSolar = [];
  const [sistemaEstado, setSistemaEstado] = useState(sistemaSolar)

  function borrar() {
    for (let i = 0; i < sistemaSolar.length; i++) {
      nuevoSistemaSolar.push(sistemaSolar[i])
    }
    
    setSistemaEstado(sistemaEstado.splice(0, sistemaSolar.length - 1));
    //setSistemaEstado(sistemaEstado.splice(0, nuevoSistemaSolar.length - 1));
  }

  // const mostrarSistemaSolar = sistemaSolar.map((planeta) => {
  //   return (
  //     <div key={planeta.nombre} className="card">
  //       <img src={planeta.imagen} alt="" />
  //       <h1>Nombre : {planeta.nombre}</h1>
  //       <p>Color: {planeta.color}</p>
  //       <p>Temperatura: {planeta.temperatura}</p>
  //     </div>
  //   );
  // });
  // return mostrarSistemaSolar;


  const mostrarPlaneta = sistemaEstado.map((planeta) => {
    return <Planetas imagen={planeta.imagen}
                     nombre={planeta.nombre}
                     color={planeta.color}
                     temperatura={planeta.temperatura}
                     onDelete={borrar}
    />;
  });

  return (<div>
    <button onClick={borrar}>Borrar Planeta</button>
    {mostrarPlaneta},
  </div>
  );
}

export default App;
