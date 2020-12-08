import { BrowserRouter, Route, Link, } from "react-router-dom";
import { useState } from 'react';
import './App.css';


const Quinteto = (props) => {
  const mostrarEquipo = props.equipo.map(jugador => {
    return (
      <>
        <h2>{jugador.nombre}</h2>
        <img src={jugador.imagen} alt="" />
      </>
    )
  })
  return mostrarEquipo;
};

const Jugador = (props) => {
  return (
    <div>
      <h1>{props.nombre}</h1>
      <img src={props.imagen} alt="" />
      <p>Posición: {props.pos}</p>
      <p>Edad: {props.edad}</p>
      <p>Estatura: {props.estatura}</p>
    </div>
  )
}


const Cabecera = (props) => {
  return (
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/quinteto">Quinteto</Link></li>
      <li><Link to="/jugador1">{props.equipo[0].nombre}</Link></li>
      <li><Link to="/jugador2">{props.equipo[1].nombre}</Link></li>
      <li><Link to="/jugador3">{props.equipo[2].nombre}</Link></li>
      <li><Link to="/jugador4">{props.equipo[3].nombre}</Link></li>
      <li><Link to="/jugador5">{props.equipo[4].nombre}</Link></li>
    </ul>
  )
}

function App() {

  const [jugadores, setJugadores] = useState([
    {
      nombre: "LeBron James",
      pos: "ala-pívot",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/LeBron_James_Lakers.jpg/245px-LeBron_James_Lakers.jpg",
      edad: "35",
      estatura: "2,06 m"
    },
    {
      nombre: "James Harden",
      pos: "escolta",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/James_Harden_%2830735342912%29.jpg/240px-James_Harden_%2830735342912%29.jpg",
      edad: "31",
      estatura: "1,96 m"
    },
    {
      nombre: "Stephen Curry",
      pos: "base",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Stephen_Curry_dribbling_2016_%28cropped%29.jpg/245px-Stephen_Curry_dribbling_2016_%28cropped%29.jpg",
      edad: "32",
      estatura: "1,91 m"
    },
    {
      nombre: "Russell Westbrook",
      pos: "base",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Russell_Westbrook_Rockets_%28cropped%29.jpg/245px-Russell_Westbrook_Rockets_%28cropped%29.jpg",
      edad: "32",
      estatura: "1,91 m"
    },
    {
      nombre: "Shaquille O'Neal",
      pos: "Pívot",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Shaq_Heat.jpg/245px-Shaq_Heat.jpg",
      edad: "48",
      estatura: "2,16 m"
    }
  ]);

  return (
    <BrowserRouter>
      <div className="App">
        <Cabecera equipo={jugadores} />
        <Route exact path="/"></Route>
        <Route exact path="/quinteto">
          <Quinteto equipo={jugadores} />
        </Route>
        <Route exact path="/jugador1">
          <Jugador
            nombre={jugadores[0].nombre}
            pos={jugadores[0].pos}
            imagen={jugadores[0].imagen}
            edad={jugadores[0].edad}
            estatura={jugadores[0].estatura} />
        </Route>
        <Route exact path="/jugador2">
          <Jugador
            nombre={jugadores[1].nombre}
            pos={jugadores[1].pos}
            imagen={jugadores[1].imagen}
            edad={jugadores[1].edad}
            estatura={jugadores[1].estatura} />
        </Route>
        <Route exact path="/jugador3">
          <Jugador
            nombre={jugadores[2].nombre}
            pos={jugadores[2].pos}
            imagen={jugadores[2].imagen}
            edad={jugadores[2].edad}
            estatura={jugadores[2].estatura} />
        </Route>
        <Route exact path="/jugador4">
          <Jugador
            nombre={jugadores[3].nombre}
            pos={jugadores[3].pos}
            imagen={jugadores[3].imagen}
            edad={jugadores[3].edad}
            estatura={jugadores[3].estatura} />
        </Route>
        <Route exact path="/jugador5">
          <Jugador
            nombre={jugadores[4].nombre}
            pos={jugadores[4].pos}
            imagen={jugadores[4].imagen}
            edad={jugadores[4].edad}
            estatura={jugadores[4].estatura} />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
