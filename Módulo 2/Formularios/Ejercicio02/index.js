// Crear una segunda ruta ('/sumar-animal')
// que recibirá por query el nombre, el tipo y la edad de un animal.
// Al recibirlo, se creará un objeto de animal con su información y se añadirá a la lista de animales en el servidor.

const express = require("express");
const app = express();


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

app.get("/", function (req, res) {
    let mostrar = "";
    for (let i = 0; i < animales.length; i++) {
        mostrar += `<h3>${animales[i].name}</h3>
                    <p>Edad: ${animales[i].edad}</p>
                    <p>Tipo: ${animales[i].tipo}</p>
                    `
    }
    res.send(`<h1>Animales</h1>`
        + mostrar);
})

app.get("/sumar", function(req, res){
    let nombre = req.query.nombre;
    let edad = req.query.edad;
    let tipo = req.query.tipo;
    animales.push({
        name: nombre,
        edad: edad,
        tipo: tipo
    })
})

app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});