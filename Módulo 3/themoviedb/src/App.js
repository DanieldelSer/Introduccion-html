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



function App() {

  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [dataFilm, setDataFilm] = useState({});
  const [creditsFilm, setCreditsFilm] = useState([]);
  const [arrayNumAleatorio, setArrayNumAleatorio] = useState([]);

  const IdPelicula = () => {
    const { id } = useParams();
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8aafd29ffe74d236a861756f3a90e086&language=es-ES`)
        .then(function (res) {
          return res.json();
        })
        .then(function (res) {
          setDataFilm(res)
        })
    }, [id])
    useEffect(() => {
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

        let arrayNumAleatorio = [];
        let min = 0;
        let max = data.length - 1
        for (let i = 0; i < 6; i++) {
            let temp = Math.round(Math.random() * max);
            let temporal = parseInt((Math.floor(temp)) + 1);
            if ((temporal >= min) && (temporal <= max)) {
                if (arrayNumAleatorio.indexOf(temporal) !== -1) {
                    i--;
                    continue;
                } else {
                    arrayNumAleatorio.push(temporal);
                }
            } else {
                i--;
                continue;
            }
        }
        setArrayNumAleatorio(arrayNumAleatorio)

      });
  }, []);



  // const mostrarPopular = data.map((film) => {
  //   return (
  //     <div key={film.title}>
  //       <h2><Link to={`/${film.id}`}>{film.title}</Link></h2>
  //       <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} width="300" height="400"></img>
  //     </div>
  //   );
  // });

  if (isLoading) {
    return <div className="App">Loading...</div>;
  } else {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecera />
          <Route exact path="/">
            {/* {mostrarPopular} */}
            <h2><Link to={`/${data[arrayNumAleatorio[0]].id}`}>{data[arrayNumAleatorio[0]].title}</Link></h2>
            <img src={`https://image.tmdb.org/t/p/w500${data[arrayNumAleatorio[0]].poster_path}`} alt={data[arrayNumAleatorio[0]].title} width="300" height="400"></img>
            <h2><Link to={`/${data[arrayNumAleatorio[1]].id}`}>{data[arrayNumAleatorio[1]].title}</Link></h2>
            <img src={`https://image.tmdb.org/t/p/w500${data[arrayNumAleatorio[1]].poster_path}`} alt={data[arrayNumAleatorio[1]].title} width="300" height="400"></img>
            <h2><Link to={`/${data[arrayNumAleatorio[2]].id}`}>{data[arrayNumAleatorio[2]].title}</Link></h2>
            <img src={`https://image.tmdb.org/t/p/w500${data[arrayNumAleatorio[2]].poster_path}`} alt={data[arrayNumAleatorio[2]].title} width="300" height="400"></img>
            <h2><Link to={`/${data[arrayNumAleatorio[3]].id}`}>{data[arrayNumAleatorio[3]].title}</Link></h2>
            <img src={`https://image.tmdb.org/t/p/w500${data[arrayNumAleatorio[3]].poster_path}`} alt={data[arrayNumAleatorio[3]].title} width="300" height="400"></img>
            <h2><Link to={`/${data[arrayNumAleatorio[4]].id}`}>{data[arrayNumAleatorio[4]].title}</Link></h2>
            <img src={`https://image.tmdb.org/t/p/w500${data[arrayNumAleatorio[4]].poster_path}`} alt={data[arrayNumAleatorio[4]].title} width="300" height="400"></img>
            <h2><Link to={`/${data[arrayNumAleatorio[5]].id}`}>{data[arrayNumAleatorio[5]].title}</Link></h2>
            <img src={`https://image.tmdb.org/t/p/w500${data[arrayNumAleatorio[5]].poster_path}`} alt={data[arrayNumAleatorio[5]].title} width="300" height="400"></img>
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
