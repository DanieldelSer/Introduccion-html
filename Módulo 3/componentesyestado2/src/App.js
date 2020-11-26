
import './App.css';
import nombres from './array'

function App() {
  
    const mostrarNombres = nombres.map((nombre) => {
        return (
          <ul key={nombre}>
            <li>Nombre : {nombre}</li>
          </ul>
        );
      });
      return mostrarNombres;
}

export default App;
