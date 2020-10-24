// Con los dos módulos del ejercicio anterior,
// crea una aplicación en la que hacer peticiones de tipo get
// a la que le añadas “/borrar/:numero” para borrar el número (ponerlo a cero)
// indicado (si es que existe), no el índice en el que se encuentra.

const express = require("express");
const app = express();

const ceros = require("../Ejercicio07/arrayCeros");
const num = require("../Ejercicio07/numAleatorio");

app.get("/", function (req, res) {
    ceros[num()] += 1;
    res.send(ceros);
});

app.get("/borrar/:numero", function (req, res) {
    let numBorrar = parseInt(req.params.numero);
    for (let i = 0; i < ceros.length; i++) {
        if (numBorrar === ceros[i]) {
            ceros[i] = 0;
        }
    }
    res.send(ceros);
});

app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});