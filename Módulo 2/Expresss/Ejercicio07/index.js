// Crea un módulo propio con un array de 10 ceros.
// Crea otro módulo con una función que devuelva un número aleatorio entre 0 y 9.
// Crea una ruta para que cada vez que se haga una petición de tipo get,
// se llame al método de número aleatorio y se sume 1 al valor del número en el índice del número aleatorio.
// Muestra el array con los valores en la respuesta.

const express = require("express");
const app = express();

const ceros = require("./arrayCeros");
const num = require("./numAleatorio");

app.get("/", function (req, res) {
    ceros[num()] += 1;
    res.send(ceros);
});

app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});