// Crea una ruta POST que reciba una petición con un objeto persona con
// nombre, apellido y edad. Añade ese objeto al array de personas.

const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let personas = [];

app.post("/personas", function (req, res) {
    let nombre = req.body.nombre;
    let apellidos = req.body.apellidos;
    let edad = req.body.edad;
    personas.push({ nombre: nombre, apellidos: apellidos, edad: edad });
    res.send(personas);
    console.log(personas);
});

app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});