const { text } = require("express");
const express = require("express");
const router = express.Router();
ObjectID = require('mongodb').ObjectID

router.get("/:user", function (req, res) {
    const user = req.params.user;
    let db = req.app.locals.db;
    db.collection("msn").find({ from: user }).toArray(function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            res.send(datos);
        }
    });
});

router.post("/newMsn", function (req, res) {
    let db = req.app.locals.db;
    const from = req.body.username;
    const to = req.body.guestName;
    const text = req.body.userText;
    const state = "Unread";
    const date = req.body.date;
    let msn = {
        from,
        to,
        text,
        state,
        date
    };
    db.collection("msn").insertOne(msn, function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            db.collection("msn").find({ from: from }).toArray(function (err, data) {
                if (err !== null) {
                    res.send(err);
                } else {
                    res.send(data);
                }
            });
        }
    });
});

router.put("/readMsn", function (req, res) {
    let db = req.app.locals.db;
    const _id = req.body._id;
    const state = req.body.state;
    const user = req.body.username;
    db.collection("msn").updateOne({_id: ObjectID(_id) }, { $set: { state } }, function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            db.collection("msn").find({ from: user }).toArray(function (err, datos) {
                if (err !== null) {
                    res.send(err);
                } else {
                    res.send(datos);
                }
            });
        }
    }
    );
});

router.delete("/deleteMsn/:_id", function (req, res) {
    let db = req.app.locals.db;
    const _id = req.params._id;
    const user = req.body.username;
    db.collection("msn").deleteOne({ _id: ObjectID(_id) }, function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            db.collection("msn").find({ from: user }).toArray(function (err, data) {
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