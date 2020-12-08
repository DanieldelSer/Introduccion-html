import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import { useState } from 'react';
import './App.css';

const Pelicula = (props) => {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <img src={props.imagen} alt="" />
      <p>{props.sinopsis}</p>
    </div>
  )
};

function App() {
  const [peliculas, setPeliculas] = useState([
    {
      id: "1",
      imagen: "https://cdn2.excelsior.com.mx/media/pictures/2019/03/15/2115226.jpg",
      titulo: "Avengers Endgame",
      sinopsis: "Capitán América, Thor, la Viuda Negra, Hulk, Máquina de guerra, Rocket, Okoye y M'Baku se quedaron en Wakanda, el país de origen de Black Panther, después de que sus compañeros se evaporaran por 'el chasquido' de Thanos. Se trata del chasquido de dedos mortal del supervillano que acabó con la mitad de toda la vida."
    },
    {
      id: "2",
      imagen: "https://i.pinimg.com/originals/3e/7d/64/3e7d6466dca73cf4a1ccc34aca513ad6.jpg",
      titulo: "El Retorno Del Rey",
      sinopsis: "Hombres, elfos y enanos unen sus fuerzas para presentar batalla a Sauron y sus huestes. Ajenos a estos preparativos, Frodo y Sam siguen adentrándose en el país de Mordor en su heroico viaje para destruir el Anillo de Poder en las Grietas del Destino."
    }
  ])

  const mostrarPeliculas = peliculas.map(pelicula => {
    return (
      <div>
        <Link to={`/${pelicula.titulo}`}><h1>{pelicula.titulo}</h1></Link>
        <img src={pelicula.imagen} alt="" />
      </div>
    )
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          {mostrarPeliculas}
        </Route>
        <Route exact path="/Avengers Endgame">
          <Pelicula titulo={peliculas[0].titulo}
            imagen={peliculas[0].imagen}
            sinopsis={peliculas[0].sinopsis}
          />
        </Route>
        <Route exact path="/El Retorno Del Rey">
          <Pelicula titulo={peliculas[1].titulo}
            imagen={peliculas[1].imagen}
            sinopsis={peliculas[1].sinopsis}
          />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
