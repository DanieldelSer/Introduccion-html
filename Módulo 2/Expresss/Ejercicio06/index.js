// Declara un array con los nombres de l@s estudiantes del Bootcamp.
// Crea una aplicación en la que se puedan añadir elementos a ese array mediante el método get.
// Agrega los nombres de los profesores.

const express = require("express");
const app = express();

let array = ["Daniel", "Elena", "Leticia", "Rafa", "Manu", "Anastasia", "Bego", "Camile", "Diego", "Luis", "Maialen", "Roberto", "Yoanna"];

app.get("/:profesor", function(req, res){
    array.push(req.params.profesor);
    res.send(`<p>${array}</p>`)
})

app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});