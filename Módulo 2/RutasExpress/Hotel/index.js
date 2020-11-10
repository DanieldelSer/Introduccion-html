const express = require("express");
const app = express();
const mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const clientes = require("./clientes");
const habitaciones = require("./habitaciones");
const reservas = require("./reservas")


MongoClient.connect("mongodb://localhost:27017", function (err, client) {
    if (err !== null) {
        console.log(err);
    } else {
        app.locals.db = client.db("hotel");
    }
});

app.use("/clientes", clientes);
app.use("/habitaciones", habitaciones);
app.use("/reservas", reservas);

app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});