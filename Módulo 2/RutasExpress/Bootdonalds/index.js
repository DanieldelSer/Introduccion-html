const express = require("express");
const app = express();
const mongodb = require("mongodb");
const productos = require("./productos");
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

app.get("/productos", function (req, res) {
    res.send(productos);
});


app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});