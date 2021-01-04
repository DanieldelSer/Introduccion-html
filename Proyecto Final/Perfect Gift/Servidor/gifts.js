const express = require("express");
const router = express.Router();

router.post("/newGift", function (req, res) {
    let db = req.app.locals.db;
    const user = req.body.user;
    const eventName = req.body.eventName;
    const guestName = req.body.guestName;
    const description = req.body.description;
    const rank = req.body.rank;
    const price = req.body.price;
    let gift = {
        user,
        eventName,
        guestName,
        description,
        rank,
        price
    };
    db.collection("gifts").insertOne(gift, function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            db.collection("gifts").find().toArray(function (err, data) {
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