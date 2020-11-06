// Tenemos una base de datos de una tienda de mesas. 
// Las mesas son de todo tipo, pero todas tienen las siguientes propiedades:

// 	Tamaño
// 	Color
// 	Material
// 	Patas (nº de patas)

// Crea los siguientes métodos:

// Método GET y ruta ‘/api/mesas’. Mostrará todas las mesas que tenemos en la base de datos.

// Método POST y ruta ‘/api/anyadir’. Añadiremos una nueva mesa a la base de datos.

// Método PUT y ruta ‘/api/modificar/:color’. Todas las mesas del color indicado en la ruta cambiarán su color a granate.

// Método DELETE y ruta ‘/api/borrar/:patas. Borrará la(s) mesa(s) con el número de patas indicado.

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
        db = client.db("mesas");
    }
});

app.get("/api/mesas", function (req, res) {
    db.collection("mesas").find().toArray(function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            res.send(datos);
        }
    });
});

app.post("/api/anyadir", function (req, res) {
    let mesa = {
        tamaño: req.body.tamaño,
        color: req.body.color,
        material: req.body.material,
        patas: req.body.patas
    };
    db.collection("mesas").insertOne(mesa, function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            db.collection("mesas").find().toArray(function (err, data) {
                if (err !== null) {
                    res.send(err);
                } else {
                    res.send(data);
                }
            });
        }
    });
});

app.put("/api/modificar/:color", function (req, res) {
    let color = req.params.color;
    db.collection("mesas").updateOne({ color: "azul" }, { $set: { color: color } }, function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            db.collection("mesas").find().toArray(function (err, data) {
                if (err !== null) {
                    res.send(err);
                } else {
                    res.send(data);
                }
            });
        }
    });
});

app.delete("/api/borrar/:patas", function (req, res) {
    let borrasPatas = parseInt(req.params.patas);
    db.collection("mesas").deleteMany({ patas: borrasPatas }, function(err, datos){
        if (err !== null) {
            res.send(err);
        } else {
            db.collection("mesas").find().toArray(function (err, data) {
                if (err !== null) {
                    res.send(err);
                } else {
                    res.send(data);
                }
            });
        }
    });
});

app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});