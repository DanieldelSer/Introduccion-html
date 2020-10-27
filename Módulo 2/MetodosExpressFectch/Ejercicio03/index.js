// Crea una ruta PUT que reciba un objeto persona con nombre,
// apellido y edad. Dentro del array personas,
// modifica el objeto que tenga el nombre que recibimos en la petición.

const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let personas = [
    {
        name: "Mikel",
        apellidos: "Salazar",
        edad: 37

    },
    {
        name: "Javier",
        apellidos: "Flores",
        edad: 36

    },
    {
        name: "Roberto",
        apellidos: "Campillo",
        edad: 39

    }
];

app.put("/personas", function (req, res) {
    let name = req.body.name;
    let apellidos = req.body.apellidos;
    let edad = req.body.edad;
    for (let i = 0; i < personas.length; i++) {
        if (name === personas[i].name.toLowerCase()) {
            personas[i] = { name: name, apellidos: apellidos, edad: edad };
        }
    }
    res.send(personas);
    console.log(personas);
});

app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});