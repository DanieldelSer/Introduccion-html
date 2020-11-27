
import { useState } from 'react';
import './App.css';
import ciudades from './ArraryNombres';

function App() {
  const [ciudad, setCiudad] = useState(ciudades[0]);
  const [num, setNum] = useState(0);
  function mostrar() {
    setNum(num + 1);
    if (num === 2) {
      num = 1;
    }
    setCiudad(ciudades[num]);
  }
  return (
    <div className="App">
      <h1>{ciudad}</h1>
      <button onClick={mostrar}>Mostrar</button>
    </div>
  );
}

export default App;
