
import { useState } from 'react';
import { BrowserRouter, Route, Link, useParams } from 'react-router-dom';
import './App.css';

const Nombre = () => {
  const { pNombre } = useParams();
  return <h1>Hola {pNombre}</h1>
};

function App() {

  const [texto, setTexto] = useState('');


  const manageChange = (e) => {
    setTexto(e.target.value);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <input type="text" value={texto} onChange={manageChange} />
        <Link to={"/" + texto}>Saludar</Link>
        <Route exact path="/:pNombre">
          <Nombre />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
