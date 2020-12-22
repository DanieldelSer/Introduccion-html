import { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";
import './App.css';


const Cabecera = () => {
  return (
    <>
      <Link to="/">Inicio</Link>
    </>
  )
};


const IdPelicula = () => {
  const [dataFilm, setDataFilm] = useState({});
  const [creditsFilm, setCreditsFilm] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8aafd29ffe74d236a861756f3a90e086&language=es-ES`)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        setDataFilm(res)
      });
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=8aafd29ffe74d236a861756f3a90e086&language=es-ES`)
      .then(function (result) {
        return result.json();
      })
      .then(function (result) {
        setCreditsFilm(result.cast)
      })
  }, [id])

  const mostrarCredits = creditsFilm.map((actor) => {
    return (
      <div key={actor.name}>
        <h2>{actor.name}</h2>
        <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} width="300" height="400"></img>
        <p>Personaje: {actor.character}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>{dataFilm.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${dataFilm.poster_path}`} alt={dataFilm.title} width="300" height="400"></img>
      <p>{dataFilm.overview}</p>
      <p>Duración: {dataFilm.runtime} min</p>
      {mostrarCredits}
    </div>
  )
};

function App() {

  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  


  useEffect(() => {
    setIsloading(true);
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=8aafd29ffe74d236a861756f3a90e086&language=es-ES&page=1")
      .then(function (results) {
        return results.json();
      })
      .then(function (data) {
        // console.log(data);
        setData(data.results);
        console.log(data.results);
        setIsloading(false);
      });
  }, []);



  const mostrarPopular = data.map((film) => {
    return (
      <div key={film.title}>
        <h2><Link to={`/${film.id}`}>{film.title}</Link></h2>
        <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} width="300" height="400"></img>
      </div>
    );
  });

  if (isLoading) {
    return <div className="App">Loading...</div>;
  } else {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecera />
          <Route exact path="/">
            {mostrarPopular}
          </Route>
          <Route exact path="/:id">
            <IdPelicula />
          </Route>
        </div>;
      </BrowserRouter>
    )
  }
}

export default App;
