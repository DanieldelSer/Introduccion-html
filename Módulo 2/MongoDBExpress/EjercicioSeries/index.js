// Crea una aplicación en la que guardar puntuaciones de series de TV que hayas visto.
// En la base de datos guarda lo siguiente:
// Título de la serie
// Plataforma donde está disponible (Netflix, HBO, Amazon, Disney+...)
// Nota

// Crea una ruta GET /api/series que devuelva todas las series y puntuaciones que haya en la colección.
// Crea una ruta GET /api/serie que devuelva la información de una ÚNICA serie.
// Crea un formulario para introducir el nombre de la serie que quieres buscar.

// Crea una ruta POST /api/nuevaSerie que añada una nueva serie a la colección.
// Envía los datos usando un formulario en el HTML. En el servidor, recoge la información que llega en req.body y acuérdate de añadir el app.use correspondiente.


// IMPORTANTE: Antes de crear formularios en un archivo HTML,
// comprueba desde el Postman que todas las rutas hacen lo esperado.

// RECUERDA: 
// En un formulario con un método GET, la información se envía en la URL con el formato clave=valor.
// Recuerda cómo acceder y recoger la información.

// Cuando usamos un formulario con un método POST, la información se envía y llega al servidor en el body de la petición.
// No te olvides de usar los métodos adecuados para que el servidor lea esa información. 

const express = require("express");
const app = express();
const mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let db;

MongoClient.connect("mongodb://localhost:27017", function (err, client) {
  if (err !== null) {
    console.log(err);
  } else {
    db = client.db("series");
  }
});

app.get("/api/series", function (req, res) {
  db.collection("series").find().toArray(function (err, datos) {
    if (err !== null) {
      res.send(err);
    } else {
      res.send(datos);
    }
  });
});

app.get("/api/serie/:titulo", function (req, res) {
  const titulo = req.params.titulo;
  db.collection("series").find({ titulo: {$regex: `.*${titulo}.*`}}).toArray(function (err, datos) {
    if (err !== null) {
      res.send(err);
    } else {
      res.send(datos);
    }
  });
});

app.post("/api/nuevaSerie", function (req, res) {
  const titulo = req.body.titulo;
  const plataforma = req.body.plataforma;
  const nota = parseInt(req.body.nota);
  let serie = {
    titulo,
    plataforma,
    nota
  }
  db.collection("series").insertOne(serie, function (err, datos) {
    if (err !== null) {
      res.send(err);
    } else {
      res.send(datos)
    }
  });
});

app.listen(3000, function () {
  console.log("Puerto 3000 abierto");
});