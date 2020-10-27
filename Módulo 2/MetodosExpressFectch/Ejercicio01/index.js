// Crea un array de personas.
// Cada objeto “persona” tendrá nombre, apellido y edad.
// Crea una página HTML que haga un fetch al servidor.
// En el servidor crea una ruta que reciba una petición GET que devuelva el array de personas.
// Muestra el contenido del array en el HTML

const express = require("express");
const app = express();

app.use(express.static("public"));

let personas = [
    {
        name: "Mikel",
        apellido: "Salazar",
        edad: 37

    },
    {
        name: "Javier",
        apellido: "Flores",
        edad: 36

    },
    {
        name: "Roberto",
        apellido: "Campillo",
        edad: 39

    }
]

app.get("/personas", function (req, res) {
    res.send(personas);
});

app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});