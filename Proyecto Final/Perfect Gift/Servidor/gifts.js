const express = require("express");
const router = express.Router();
ObjectID = require('mongodb').ObjectID

router.post("/newGift", function (req, res) {
    let db = req.app.locals.db;
    const user = req.body.username;
    const eventName = req.body.eventName;
    const guestAwardName = req.body.guestAwardName;
    const description = req.body.description;
    const rank = req.body.giftRank;
    const price = req.body.giftPrice;
    let gift = {
        user,
        eventName,
        guestAwardName,
        description,
        rank,
        price
    };
    db.collection("gifts").insertOne(gift, function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            db.collection("gifts").find({ $and: [{ user: user }, { eventName: eventName }] }).toArray(function (err, data) {
                if (err !== null) {
                    res.send(err);
                } else {
                    res.send(data);
                }
            });
        }
    });
});

router.get("/:user/:event", function (req, res) {
    const user = req.params.user;
    const event = req.params.event;
    let db = req.app.locals.db;
    db.collection("gifts").find({ $and: [{ user: user }, { eventName: event }] }).toArray(function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            res.send(datos);
        }
    });
});

router.delete("/deleteGift/:_id", function (req, res) {
    let db = req.app.locals.db;
    const _id = req.params._id;
    const user = req.body.username;
    const eventName = req.body.eventName;
    db.collection("gifts").deleteOne({ _id: ObjectID(_id) }, function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            db.collection("gifts").find({ $and: [{ user: user }, { eventName: eventName }] }).toArray(function (err, data) {
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