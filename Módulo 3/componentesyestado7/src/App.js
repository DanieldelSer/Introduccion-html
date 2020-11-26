import Cabecera from './Cabecera'
import Main from './Main'
import Footer from './Footer'
import './App.css';

function App() {

  let muelle = {
    nombre: 'Puerto deportivo',
    barcos: [
      {
        nombre: 'bar quito',
        eslora: "5m",
        tripulantes: 2
      },
      {
        nombre: 'imperioso',
        eslora: "12m",
        tripulantes: 3
      }
    ],
    contacto: {
      telefono: '94463827'
    }
  };

  const mostrarMuelle =
    <Cabecera
      nombre={muelle.nombre}
    />;

  const mostrarBarcos = muelle.barcos.map((barco) => {
    return <Main
      nombre={barco.nombre}
      eslora={barco.eslora}
      tripulantes={barco.tripulantes}
    />;
  });

  const mostrarTlf =
    <Footer
      contacto={muelle.contacto.telefono}
    />;

  return (
    <div className="App">
      {mostrarMuelle}
      {mostrarBarcos}
      {mostrarTlf}
    </div>
  );
}

export default App;
