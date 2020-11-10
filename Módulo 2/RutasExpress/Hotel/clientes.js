const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    let db = req.app.locals.db;
    db.collection("clientes").find().toArray(function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            res.send(datos);
        }
    });
});

router.get("/:dni", function (req, res) {
    let db = req.app.locals.db;
    const dni = req.params.dni;
    db.collection("clientes").find({dni: {$regex: `.*${dni}.*`}}).toArray(function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            res.send(datos);
        }
    });
});

router.post("/nuevoCliente", function (req, res) {
    let db = req.app.locals.db;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const dni = req.body.dni;
    let cliente = {
        nombre,
        apellido,
        dni
    };
    db.collection("clientes").insertOne(cliente, function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            db.collection("clientes").find().toArray(function (err, data) {
                if (err !== null) {
                    res.send(err);
                } else {
                    res.send(data);
                }
            });
        }
    });
});

router.put("/editarCliente", function (req, res) {
    let db = req.app.locals.db;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const dni = req.body.dni;
    db.collection("clientes").updateOne({ dni: dni }, { $set: { nombre: nombre, apellido: apellido } },
        function (err, datos) {
            if (err !== null) {
                res.send(err);
            } else {
                res.send(datos);
            }
        }
    );
});

module.exports = router;