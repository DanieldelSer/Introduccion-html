import Cabecera from './cabecera';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import { useState } from 'react';

function App() {
  const [boolean, setBoolean] = useState(false);
  function click() {
    if (boolean) {
      setBoolean(false);
    } else {
      setBoolean(true);
    }

  };

  const libreria = {
    usuario: {
      nombre: 'Javier',
      vip: false,
      imagen: 'https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg'
    },

    libros: [
      {
        id: "1",
        titulo: "El Juego de Ender",
        autor: "Orson Scott Card",
        editorial: "Ediciones B / Zeta",
        descripcion: "La Tierra está amenazada por una especie extraterrestre de insectos que pretende destruir la humanidad. Para vencerlos se precisa la intervención de un genio militar, por lo cual se permite el nacimiento de Ender, tercer hijo de una pareja en un mundo que limita a dos el número de descendientes. Ender se entrenará en una estación espacial, superará a sus rivales y se convertirá en la persona capaz de dirigir las flotas terrestres contra los insectos de otros mundos.",
        img: "https://images-na.ssl-images-amazon.com/images/I/91fqbLUmU0L.jpg",
        stock: 25
      },
      {
        id: "2",
        titulo: "Juego de tronos",
        autor: "George R. R. Martin",
        editorial: "Gigamesh",
        descripcion: "Tras el largo verano, el invierno se acerca a los Siete Reinos. Lord Eddard Stark, señor de Invernalia, deja sus dominios para unirse a la corte de su amigo el rey Robert Baratheon, llamado el Usurpador, hombre díscolo y otrora guerrero audaz cuyas mayores aficiones son comer, beber y engendrar bastardos. Eddard Stark ocupará el cargo de Mano del Rey e intentará desentrañar una maraña de intrigas que pondrá en peligro su vida y la de todos los suyos. En un mundo cuyas estaciones pueden durar decenios y en el que retazos de una magia inmemorial y olvidada surgen en los rincones más sombrios y maravillosos, la traición y la lealtad, la compasión y la sed de venganza, el amor y el poder hacen del juego de tronos una poderosa trampa que atrapará en sus fauces a los personajes... y al lector.",
        img: "https://www.planetadelibros.com/usuaris/libros/fotos/71/m_libros/juego-de-tronos-n-02_9788415480396.jpg",
        stock: 2
      },
      {
        id: "3",
        titulo: "I robot",
        autor: "Isaac Asimov",
        editorial: "Edhasa",
        descripcion: "Los robots de Isaac Asimov son máquinas capaces de llevar a cabo muy diversas tareas, y que a menudo se plantean a sí mismos problemas de 'conducta humana'. Pero estas cuestiones se resuelven en Yo, robot en el ámbito de las tres leyes fundamentales de la robótica, concebidas por Asimov, y que no dejan de proponer extraordinarias paradojas que a veces se explican por errores de funcionamiento y otras por la creciente complejidad de los 'programas'. Las paradojas que se plantean en estos relatos futuristas no son sólo ingeniosos ejercicios intelectuales sino sobre todo una indagación sobre la situación del hombre actual en relación con los avances tecnológicos y con la experiencia del tiempo.",
        img: "https://imagessl0.casadellibro.com/a/l/t5/40/9788435021340.jpg",
        stock: 10
      }
    ]
  }

  const mostrarLibros = libreria.libros.map((libro) => {
    return <Main
      img={libro.img}
      titulo={libro.titulo}
      autor={libro.autor}
      editorial={libro.editorial}
      descripcion={libro.descripcion}
      stock={libro.stock}
    />;
  });

  const mostrarUsuario =
    <Cabecera
      nombre={libreria.usuario.nombre}
      imagen={libreria.usuario.imagen}
    />;

    function random(minimo,maximo){
      return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
    }

  let numRandom = random(1, libreria.libros.length + 1)

  const mostrarLibroOferta =
    <Footer
      img={libreria.libros[numRandom].img}
      titulo={libreria.libros[numRandom].titulo}
      autor={libreria.libros[numRandom].autor}
      editorial={libreria.libros[numRandom].editorial}
      descripcion={libreria.libros[numRandom].descripcion}
      stock={libreria.libros[numRandom].stock}
    />;


  if (boolean) {
    return (
      <div className="App">
        <h1>Hola</h1> {mostrarUsuario}
        <button onClick={click}>VIP</button>
        {mostrarLibros}
        {mostrarLibroOferta}
      </div>
    );
  } else {
    return (
      <div className="App">
        {mostrarUsuario}
        <button onClick={click}>VIP</button>
        {mostrarLibros}
        <h3>Oferta</h3>
        {mostrarLibroOferta}
      </div>
    )
  }

}

export default App;
