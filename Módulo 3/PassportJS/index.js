const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const passport = require("passport");
var cors = require("cors");
app.use(cors());
let db;

MongoClient.connect("mongodb://localhost:27017", function (err, client) {
  if (err !== null) {
    console.log(err);
  } else {
    db = client.db("tienda");
  }
});

const session = require("express-session");

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.static("public"));

const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      db.collection("users")
        .find({ email: email })
        .toArray(function (err, users) {
          if (users.length === 0) {
            done(null, false);
          }
          const user = users[0];
          if (password === user.password) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser(function (id, done) {
  db.collection("users")
    .find({ email: id })
    .toArray(function (err, users) {
      if (users.length === 0) {
        done(null, null);
      }
      done(null, users[0]);
    });
});

app.post(
  "/api/login",
  passport.authenticate("local", {
    successRedirect: "/api",
    failureRedirect: "/api/fail",
  })
);

app.get("/api/fail", function (req, res) {
  res.status(401).send({ mensaje: "denegado" });
});

app.get("/api", function (req, res) {
  if (req.isAuthenticated() === false) {
    return res.status(401).send({ mensaje: "necesitas loguearte" });
  }
  res.send({ mensaje: "logueado correctamente" });
});

app.post("/api/register", function (req, res) {
  db.collection("users").insertOne(
    {
      name: req.body.nombre,
      email: req.body.email,
      password: req.body.password,
    },
    function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send({ mensaje: "Registrado" });
      }
    }
  );
});

app.get("/api/user", function (req, res) {
  if (req.isAuthenticated()) {
    return res.send({ nombre: req.user.name });
  }
  res.send({ nombre: "No logueado" });
});

app.listen(3001);