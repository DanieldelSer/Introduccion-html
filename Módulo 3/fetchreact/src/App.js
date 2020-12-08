import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");
  const [info, setInfo] = useState([]);
  const [infoPrev, setInfoPrev] = useState([]);

  useEffect(() => {
    setIsloading(true);
    fetch(url)
      .then(function (results) {
        return results.json();
      })
      .then(function (data) {
        console.log(data);
        setData(data.results);
        setInfo(data.info.next);
        setInfoPrev(data.info.prev);
        setIsloading(false);
      });
  }, [url]);

  const mostrarPersonajes = data.map((personaje) => {
    return (
      <div>
        <h1 key={personaje.name}>{personaje.name}</h1>
        <img src={personaje.image} alt={personaje.name} width="400" height="300"></img>
      </div>
    );
  });

  const next = () => {
    setUrl(info)
  };

  const previous = () => {
    if (infoPrev !== null) {
      setUrl(infoPrev)
    } else {
      alert("No hay página anterior")
    };
  };


  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return <div>
      <button onClick={previous}>Anterior</button>
      <button onClick={next}>Siguiente</button>
      {mostrarPersonajes}
    </div>;
  }
}

export default App;
