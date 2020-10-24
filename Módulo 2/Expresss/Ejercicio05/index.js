// Define un objeto con las propiedades siguientes: nombre, apellidos y edad.
// El objeto estará fuera de las rutas para que sea accesible por todas ellas.
// Crea una aplicación en la que se pueda modificar cualquiera de las propiedades
// de ese objeto utilizando peticiones de tipo get.
// Crea una ruta para cambiar el nombre, otra ruta para el apellido y otra ruta para la edad. 

const express = require("express");
const app = express();

let persona = {
    nombre: "",
    apellidos: "",
    edad: 0
};
//app.get("/nombre/:parametro", function(req, res)
app.get("/:nombre", function (req, res) {
    persona.nombre = req.params.nombre;
    res.send(persona);
});
//app.get("/apellidos/:parametro", function(req, res)
app.get("/:nombre/:apellidos", function (req, res) {
    persona.nombre = req.params.nombre;
    persona.apellidos = req.params.apellidos;
    res.send(persona);
});
//app.get("/edad/:parametro", function(req, res)
app.get("/:nombre/:apellidos/:edad", function (req, res) {
    persona.nombre = parseInt(req.params.nombre);
    persona.apellidos = req.params.apellidos;
    persona.edad = req.params.edad;
    res.send(persona);
});

app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});