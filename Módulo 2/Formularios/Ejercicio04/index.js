// Crear una ruta ('/adoptar') que recibe un nombre de animal por parámetro de query.
// Cuando llegue una petición a esta ruta,
// eliminaremos el animal con este nombre de la lista de animales que hay en el servidor.

const express = require("express");
const app = express();
app.use(express.static("public"));

let animales = [
    {
        name: "perro",
        edad: 5,
        tipo: "mamifero"

    },
    {
        name: "ballena",
        edad: 8,
        tipo: "pez"

    },
    {
        name: "halcon",
        edad: 6,
        tipo: "ave"

    }
]

// app.get("/", function (req, res) {
//     let mostrar = "";
//     for (let i = 0; i < animales.length; i++) {
//         mostrar += `<h3>${animales[i].name}</h3>
//                     <p>Edad: ${animales[i].edad}</p>
//                     <p>Tipo: ${animales[i].tipo}</p>
//                     `
//     }
//     res.send(`<h1>Animales</h1>`
//         + mostrar);
// })

app.get("/sumar", function (req, res) {
    let nombre = req.query.name;
    let edad = req.query.edad;
    let tipo = req.query.tipo;
    animales.push({
        name: nombre,
        edad: edad,
        tipo: tipo
    });
    res.send(animales);
});

app.get("/dejar", function (req, res) {
    animales.push({
        name: req.query.nombre,
        edad: req.query.edad,
        tipo: req.query.tipo
    });
});

app.get("/adoptar", function (req, res) {
    for (let i = 0; i < animales.length; i++) {
        if (animales[i].name === req.query.name) {
            animales.splice(i, 1);
            break;
        }
    }
    res.send(animales);
});

app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});