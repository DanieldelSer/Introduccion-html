import { useState, useEffect } from "react";
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [alert, setAlert] = useState("");
  const [planeta, setPlaneta] = useState([]);

  useEffect(() => {
    setIsloading(true);
    fetch("https://swapi.dev/api/planets")
      .then(function (results) {
        return results.json();
      })
      .then(function (data) {
        console.log(data);
        setData(data.results);
        setIsloading(false);
      });
  }, []);

  const manageChange = (e) => {
    setAlert(e.target.value);
  };

  const mostrarAlert = () => {
    alert(alert)
  };

  const mostrarPlanetas = data.map((planeta) => {
    return (
      <option key={planeta.name}>{planeta.name}</option>
    );
  });

  function obtenerResidentesPlaneta() {
    let planetaSeleccionado;
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === alert) {
        planetaSeleccionado = data[i]
        break;
      }
    }
    for (let i = 0; i < planetaSeleccionado.residents.length; i++) {
      useEffect(() => {
        setIsloading(true);
        fetch(planetaSeleccionado.residents[i])
          .then(function (respuesta) {
            return respuesta.json();
          })
          .then(function (datos) {
            console.log(datos);
            setIsloading(false);
            setPlaneta(datos)
            // let nombrePersonajes = `<li>${datos.name}</li>`
            // planetaPersonajes.innerHTML += nombrePersonajes
          });
      })
  }
}

  if (isLoading) {
    return <div className="App">Loading...</div>;
  } else {
    return <div className="App">
      <select onChange={manageChange}>
        <option>Elije un planeta...</option>
        {mostrarPlanetas}
      </select>
      <button onClick={mostrarAlert}>Mostrar</button>
    </div>;
  }
}

export default App;
