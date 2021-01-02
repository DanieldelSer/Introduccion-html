const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors")
const mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;

const objectID = mongodb.ObjectID();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const users = require("./users");
const events = require("./events");
const gifts = require("./gifts");

MongoClient.connect("mongodb://localhost:27017", function (err, client) {
    if (err !== null) {
        console.log(err);
    } else {
        app.locals.db = client.db("PerfectGift");
    }
});

app.use("/users", users);
app.use("/events", events);
app.use("/gifts", gifts);

app.post("/send-email", (req, res) => {
    const transporter = nodemailer.createTransport({
        port: 465,               // true for 465, false for other ports
        host: "smtp.gmail.com",
        auth: {
            user: 'perfectgiftappweb@gmail.com',
            pass: 'proyectofinal',
        },
        secure: true,
    });

    const mailOptions = {
        from: 'perfectgiftappweb@gmail.com',  // sender address
        to: 'kaliotto@gmail.com',   // list of receivers
        subject: 'Prueba sending Email using Node.js',
        text: 'Hola',
        html: `<h1 style="color:red;">Hey there! </h1>
            <p style="font-size:50px;">This is our first message sent with Nodemailer</p> `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.status(500).send(error.message);
            console.log(err);
        } else {
            //console.log(info);
            //res.status(200).send({message:"Email enviado", message_id: info.message_id});
            console.log("Email enviado");
            res.status(200).jsonp(req.body);
        }
    });
});

app.listen(3000, () => {
    console.log("Puerto 3000 abierto");
});