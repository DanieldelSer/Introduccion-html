// Crear una aplicación de servidor que tenga una lista de animales (un array con objetos)
// que tendrán nombre, edad y tipo de animal.
// Cuando vayamos a la raíz (ruta '/’) el servidor devolverá el HTML de la lista de animales.

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

app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});