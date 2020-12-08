import { useState, useEffect } from "react";
import './App.css';

const Pokemon = (props) => {
  return <div>{props.name}</div>
}

function App() {

  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [alert, setAlert] = useState("");
  const [url, setUrl] = useState("");
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    setIsloading(true);
    fetch("https://pokeapi.co/api/v2/type")
      .then(function (results) {
        return results.json();
      })
      .then(function (data) {
        console.log(data);
        function compare(a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        }
        data.results.sort(compare);
        setData(data.results);
        setUrl(data.results);
        setIsloading(false);
      });
  }, []);

  const manageChange = (e) => {
    setAlert(e.target.value);
    console.log(alert);
  };

  const mostrarTypePokemons = data.map((typePokemon) => {
    return (
      <option key={typePokemon.name}>{typePokemon.name}</option>
    );
  });

  const mostrarPokemon = data.map((pokemon) => {
    if (pokemon.name === alert) {

        fetch(pokemon.url)
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            setPokemon(res.name)
          });

      return <Pokemon  name={name}/>
    } 
  })

  if (isLoading) {
    return <div className="App">Loading...</div>;
  } else {
    return <div className="App">
      <select onChange={manageChange}>
        <option>Elije un tipo...</option>
        {mostrarTypePokemons}
      </select>
      <button onClick={mostrarPokemon}>Mostrar</button>
      <p>{alert}</p>
    </div>;
  }
}

export default App;
