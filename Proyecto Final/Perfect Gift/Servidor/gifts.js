const express = require("express");
const router = express.Router();

router.post("/newGift", function (req, res) {
    let db = req.app.locals.db;
    const userName = req.body.userName;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    let evento = {
        userName,
        name,
        description,
        price
    };
    db.collection("gifts").insertOne(evento, function (err, datos) {
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