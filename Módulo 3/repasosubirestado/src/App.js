
import { useState } from 'react';
import './App.css';
import SumarNumero from "./SumarNumero"



function App() {
  const [num, setNum] = useState(0);
  const cambiarNumero = () => {
    setNum(num + 1);
  };
  return (
    <div className="App">
      <p>{num}</p>
      {/* SumarNumero hijo de App.js */}
      <SumarNumero cambiarNumero={cambiarNumero} />
    </div>
  );
}

export default App;
