// Crea un array de 5 nombres.
// Define dos rutas: una será del tipo “/persona” y
// la otra será /persona/:parámetro’.
// Al entrar a la primera ruta nos devolverá la lista de personas
// y al entrar a la segunda nos devolverá la persona solicitada.

const express = require("express");
const app = express();

let nombres = ["Daniel", "Mikel", "Javier", "Jesús", "Roberto"];

app.get("/personas", function (req, res) {
    let personajes = "";
    for (i = 0; i < nombres.length; i++) {
        personajes += `<h1>${nombres[i]}</h1>`;
    }
    res.send(personajes);
});

app.get("/personas/:parametro", function (req, res) {
    let persona = req.params.parametro;
    for (let i = 0; i < nombres.length; i++) {
        if (persona === nombres[i].toLowerCase()) {
            res.send(`<h1>${nombres[i]}</h1>`);
        }
    }
    res.send("error");
});

app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});