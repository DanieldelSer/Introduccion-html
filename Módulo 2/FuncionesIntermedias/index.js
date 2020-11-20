const express = require("express");
const mongodb = require("mongodb");
const bcrypt = require("bcrypt");
const app = express();
const cifrarContrasenia = require("./cifrarContraseña");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let MongoClient = mongodb.MongoClient;
let db;

MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
    if (err !== null) {
        console.log(err);
    } else {
        db = client.db("cifrado");
    }
});

app.post("/registro", function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let contraseinaCifrada = bcrypt.hashSync(password, 10);

    db.collection("users").insertOne({ username: username, password: contraseinaCifrada }, function (err, result) {
        if (err !== null) {
            res.send({ mensaje: "Error al registrar el usuario" })
        } else {
            res.send({ mensaje: "Usuario registrado correctamente" })
        }
    })
})

app.post("/login", function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    db.collection("users")
        .find({ username: username })
        .toArray(function (err, arrayUsuario) {
            if (err !== null) {
                res.send({ mensaje: "Ha habido un error" });
            } else {
                if (arrayUsuario.length > 0) {
                    if (bcrypt.compareSync(password, arrayUsuario[0].password)) {
                        res.send({ mensaje: "Logueado correctamente" });
                    } else {
                        res.send({ mensaje: "Contraseña incorrecta" });
                    }
                } else {
                    res.send({ mensaje: "El usuario no existe" });
                }
            }
        });
});


app.listen(3000);
