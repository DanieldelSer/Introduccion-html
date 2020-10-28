// Crea una ruta DELETE que reciba un nombre de persona.
// Borra el objeto persona del array que tenga el nombre que recibimos en la petición.


const express = require("express");
const app = express();
const personas = require("./personas");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/personas", function (req, res) {
    res.send(personas);
});

app.put("/personas", function (req, res) {
    let name = req.body.name;
    let apellidos = req.body.apellidos;
    let edad = req.body.edad;
    for (let i = 0; i < personas.length; i++) {
        if (name === personas[i].name) {
            personas[i] = { name: name, apellidos: apellidos, edad: edad };
        }
    }
    res.send(personas);
    console.log(personas);
});

app.delete("/personas", function (req, res) {
    let name = req.body.name;
    for (let i = 0; i < personas.length; i++) {
        if (name === personas[i].name) {
            personas.splice(i, 1);
        }
    }
    res.send(personas);
})

app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});