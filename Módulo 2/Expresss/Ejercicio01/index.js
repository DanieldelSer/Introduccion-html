// Crea una aplicación express con una llamada de tipo get que devuelva el siguiente HTML:

// Hola Mundo

// desde express

const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send(`<h1>Hola Mundo</h1>
              <h2>desde Express</h2>`);
})

app.listen(3000);