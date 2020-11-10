const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    let db = req.app.locals.db;
    db.collection("reservas").find().toArray(function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            res.send(datos);
        }
    });
});

router.get("/:dni1", function (req, res) {
    let db = req.app.locals.db;
    const dni1 = req.params.dni1;
    db.collection("reservas").find({dni: {$regex: `.*${dni1}.*`}}).toArray(function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            res.send(datos);
        }
    });
});

router.post("/nuevaReserva", function (req, res) {
    let db = req.app.locals.db;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const dni = req.body.dni;
    const numero = req.body.numero;
    const fechaCheckIn = req.body.fechaCheckIn;
    const fechaCheckOut = req.body.fechaCheckOut;
    let reserva = {
        nombre,
        apellido,
        dni,
        numero,
        fechaCheckIn,
        fechaCheckOut
    };
    db.collection("reservas").insertOne(reserva, function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            db.collection("reservas").find().toArray(function (err, data) {
                if (err !== null) {
                    res.send(err);
                } else {
                    res.send(data);
                }
            });
        }
    });
});

router.put("/editarReserva", function (req, res) {
    let db = req.app.locals.db;
    const dni = req.body.dni;
    const hoy = req.body.hoy;
    db.collection("reservas").updateOne({ dni: dni },{ $set: { fechaCheckOut: hoy } },function (err, datos) {
        if (err !== null) {
          res.send(err);
        } else {
          res.send(datos);
        }
      }
    );
  });

module.exports = router;