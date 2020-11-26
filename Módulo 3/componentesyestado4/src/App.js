
import { useState } from 'react';
import './App.css';

function App() {
const [num, setNum] = useState(0);
function sumar() {
  setNum(num + 1);
}
  return (
    <div className="App">
      <h1>{num}</h1>
        <button onClick={sumar}>Sumar</button>
    </div>
  );
}

export default App;
