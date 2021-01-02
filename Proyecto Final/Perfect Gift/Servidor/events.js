const express = require("express");
const router = express.Router();

router.post("/newEvent", function (req, res) {
    let db = req.app.locals.db;
    const username = req.body.username;
    const eventName = req.body.eventName;
    let evento = {
        username,
        eventName
    };
    db.collection("events").insertOne(evento, function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            db.collection("events").find().toArray(function (err, data) {
                if (err !== null) {
                    res.send(err);
                } else {
                    res.send(data);
                }
            });
        }
    });
});

module.exports = router;