const express = require("express");
const router = express.Router();

router.post("/newGuest", function (req, res) {
    let db = req.app.locals.db;
    const user = req.body.username;
    const eventName = req.body.eventName;
    const guestName = req.body.guestName;
    const guestEmail = req.body.guestEmail;
    const state = "Pendiente";
    let guest = {
        user,
        eventName,
        guestName,
        guestEmail,
        state
    };
    db.collection("guests").insertOne(guest, function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            db.collection("guests").find({ eventName: eventName }).toArray(function (err, data) {
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