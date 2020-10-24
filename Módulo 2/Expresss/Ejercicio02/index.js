// Crea una aplicación con una ruta a la que le puede llegar un parámetro en la url.
// Al hacer una petición get a esa ruta,
// el servidor devolverá como respuesta un número aleatorio entre 1 y el número que llega como parámetro.

const express = require("express");
const app = express();

let numAleatorio = require("./aleatorio");

app.get("/:numero", function (req, res) {
    let num = parseInt(req.params.numero);
    res.send(`Numero aleatorio=${numAleatorio(1, num)}`);
})

app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});