// Crea una aplicación para gestionar menús de un restaurante. Cada menú tendrá 5 propiedades:
// Número de menu
// Primer plato
// Postre
// Segundo plato
// Precio

// Crea una ruta GET /api/menus para obtener todos los menús
// Crea una ruta POST /api/nuevoMenu para añadir un nuevo menú.
// Desde el navegador manda un objeto con las 5 propiedades y, en el servidor, introduce ese objeto en la base de datos
// Crea una ruta PUT /api/editarMenu para modificar un menú existente.
// Envía un objeto al servidor en el body de la petición,
// recoge ese objeto en el servidor (req.body, recuerda añadir el app.use correspondiente para poder leer el body)
// y modifica el menú con el número indicado. 
// Crea una ruta DELETE /api/borrarMenu para borrar un menú existente.
// Envía un objeto al servidor en el body de la petición,
// recoge ese objeto en el servidor (req.body) y borra el menú con el número indicado.


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
    db = client.db("restaurante");
  }
});

app.get("/api/menus", function (req, res) {
  db.collection("menus").find().toArray(function (err, datos) {
    if (err !== null) {
      res.send(err);
    } else {
      res.send(datos);
    }
  });
});

app.post("/api/nuevoMenu", function (req, res) {
  const numero = parseInt(req.body.numero);
  const primer = req.body.primer;
  const segundo = req.body.segundo;
  const postre = req.body.postre;
  const precio = parseInt(req.body.precio);
  let menu = {
    numero,
    primer,
    segundo,
    postre,
    precio
  }
  db.collection("menus").insertOne(menu, function (err, datos) {
    if (err !== null) {
      res.send(err);
    } else {
      res.send(datos)
    }
  });
});

app.put("/api/editarMenu", function (req, res) {
  const numero = parseInt(req.body.numero);
  const primer = req.body.primer;
  const segundo = req.body.segundo;
  const postre = req.body.postre;
  const precio = parseInt(req.body.precio);
  db.collection("menus").updateOne({ numero: numero }, { $set: { primer: primer, segundo: segundo, postre: postre, precio: precio } },
    function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    }
  );
});

app.delete("/api/borrarMenu", function (req, res) {
  const numero = parseInt(req.body.numero);
  db.collection("menus").deleteOne({ numero: numero }, function (err, datos) {
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