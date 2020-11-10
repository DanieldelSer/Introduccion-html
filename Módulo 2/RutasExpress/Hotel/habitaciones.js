const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    let db = req.app.locals.db;
    db.collection("habitacion").find().toArray(function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            res.send(datos);
        }
    });
});

router.get("/:numero", function (req, res) {
    let db = req.app.locals.db;
    const numero = parseInt(req.params.numero);
    db.collection("habitacion").find({numero: numero}).toArray(function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            res.send(datos);
        }
    });
});

router.post("/nuevaHabitacion", function (req, res) {
    let db = req.app.locals.db;
    const numero = req.body.numero;
    const estado = req.body.estado;
    let habitacion = {
        numero,
        estado
    };
    db.collection("habitacion").insertOne(habitacion, function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            db.collection("habitacion").find().toArray(function (err, data) {
                if (err !== null) {
                    res.send(err);
                } else {
                    res.send(data);
                }
            });
        }
    });
});

router.put("/checkInHabitacion", function (req, res) {
    let db = req.app.locals.db;
    const numero = parseInt(req.body.numero);
    db.collection("habitacion").updateOne({ numero: numero }, { $set: { estado: "ocupada" } },
        function (err, datos) {
            if (err !== null) {
                res.send(err);
            } else {
                res.send(datos);
            }
        }
    );
});

router.put("/checkOutHabitacion", function (req, res) {
    let db = req.app.locals.db;
    const numeroHabitacion = parseInt(req.body.numeroHabitacion);
    db.collection("habitacion").updateOne({ numero: numeroHabitacion }, { $set: { estado: "libre" } },
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