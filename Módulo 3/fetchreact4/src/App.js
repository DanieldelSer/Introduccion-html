import { useState, useEffect } from "react";
import './App.css';


const Tipo = (props) => {
  const [datosSet, setDatosSet] = useState([]);
  useEffect(() => {
    fetch(`https://api.magicthegathering.io/v1/cards?setName=${props.name}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setDatosSet(res.cards)
      })
  }, [props])
  console.log(props);
  const mostrarSet = datosSet.map((set1) => {
    return (
      <div >
        <h1>{set1.name}</h1>
        <p>{set1.text}</p>
        <img src={set1.imageUrl} alt={set1.name} width="300" height="400"></img>
      </div>
    );
  });
  return mostrarSet
};

function App() {

  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [cartasSet, setCartasSet] = useState("");

  useEffect(() => {
    setIsloading(true);
    fetch("https://api.magicthegathering.io/v1/sets")
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
        data.sets.sort(compare);
        setData(data.sets);
        setIsloading(false);
      });
  }, []);

  const manageChange = (e) => {
    setCartasSet(e.target.value);
  };

  const mostrarSets = data.map((set) => {
    return (
      <option key={set.name} value={set.name}>{set.name}</option>
    );
  });

  


  if (isLoading) {
    return <div className="App">Loading...</div>;
  } else {
    return <div className="App">
      <select onChange={manageChange}>
        <option>Elije un Set...</option>
        {mostrarSets}
      </select>
      <Tipo name={cartasSet} />
      
    </div>;
  }
}

export default App;
