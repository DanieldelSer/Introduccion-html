
import './App.css';
import coches from './coches'
import Coche from './coche'

function App() {
  const mostrarCoches = coches.map((mCoche) => {
    return <Coche 
                  nombre={mCoche.nombre}
                  numruedas={mCoche.numruedas}
                  altura={mCoche.altura}
                  longuitud={mCoche.longuitud}
                  color={mCoche.color}
    />;
  });

  return mostrarCoches

}

export default App;
