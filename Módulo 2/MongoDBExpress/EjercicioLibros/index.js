// Crea una aplicación para llevar un registro de libros leídos/por leer. Cada libro tendrá dos propiedades:
// Título del libro
// Estado: “leído” o “sin leer”


// Una ruta GET /api/libros que devuelva toda la colección de libros
// Una ruta GET /api/libros/:titulo que devuelva el libro solicitado.
// Una ruta POST /api/nuevoLibro/:titulo que añada un libro a la colección.
// En esta ruta, crea un objeto libro con el título que llega por req.params y el estado: “sin leer”
// libro : { título:, estado: “sin leer”}
// Una ruta PUT /api/editarLibro/:titulo.
// En esta ruta modifica el estado de libro escrito en la ruta: haz que cambie de “sin leer” a “leído”
// Una ruta DELETE /api/borrarLibro/:titulo que borre el libro indicado de la base de datos

// IMPORTANTE: Antes de crear formularios o elementos input en un archivo HTML,
// prueba desde el Postman que todas las rutas hacen lo esperado.

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
    db = client.db("libros");
  }
});

app.get("/api/libros", function (req, res) {
    db.collection("libros")
      .find()
      .toArray(function (err, datos) {
        if (err !== null) {
          res.send(err);
        } else {
          res.send(datos);
        }
      });
  });

app.get("/api/libros/:titulo", function (req, res) {
    const titulo = req.params.titulo;
    db.collection("libros").find({titulo: {$regex: `.*${titulo}.*`}}).toArray(function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            res.send(datos);
        }
    });
});

app.post("/api/nuevoLibro/:titulo", function (req, res) {
    const titulo = req.params.titulo;
    let libro = {
      titulo: titulo,
      estado: "sin leer"
    };
    db.collection("libros").insertOne(libro, function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        db.collection("libros").find().toArray(function (err, data) {
            if (err !== null) {
              res.send(err);
            } else {
              res.send(data);
            }
          });
      }
    });
  });

  app.put("/api/editarLibro/:titulo", function (req, res) {
    const titulo = req.params.titulo;
    db.collection("libros").updateOne({ titulo: titulo },{ $set: { estado: "leído" } },function (err, datos) {
        if (err !== null) {
          res.send(err);
        } else {
          res.send(datos);
        }
      }
    );
  });

  app.delete("/api/borrarLibro/:titulo", function (req, res) {
    const titulo = req.params.titulo;
    db.collection("libros").deleteOne({ titulo: titulo }, function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    });
  });

  app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});