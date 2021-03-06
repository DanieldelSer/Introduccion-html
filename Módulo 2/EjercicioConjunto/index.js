const express = require("express");
const { readdirSync } = require("fs");
const { isRegExp } = require("util");
const { armarios } = require("./almacen");
const app = express();
const almacen = require("./almacen");
let cesta = require("./cesta");

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/almacen", function (req, res) {
  /* Devuelve un un objeto con tres arrays dentro correspondientes a las secciones */
  res.send(almacen);
});

app.get("/almacen/:departamento", function (req, res) {
  /* Recibe la opcion por params y devuelve el array de objetos del departamento correspondiente */
  let opcion = req.params.departamento;
  switch (opcion) {
    case "armarios":
      res.send(almacen.armarios);
      break;
    case "mesas":
      res.send(almacen.mesas);
      break;
    case "sillas":
      res.send(almacen.sillas);
      break;
  }
});

app.post("/almacen", function (req, res) {
  /* Recibe un objeto con los campos del mueble nuevo y el campo adicional opcion. Añade el objeto nuevo al array correspondiente según el valor de opcion y luego devuelve el departamento del almacen seleccionado por opcion. En caso de error, devuelve un objeto con el mensaje de error.  */
  let opcion = req.body.opcion;
  let nombre = req.body.nombre.toUpperCase();
  let descripcion = req.body.descripcion;
  let img = req.body.img;
  let precio = parseInt(req.body.precio);
  let mueble = {
    nombre: nombre,
    descripccion: descripcion,
    img: img,
    precio: precio,
  };
  let respuesta;
  let boolean = false;
  switch (opcion) {
    case "armarios":
      almacen.armarios.push(mueble);
      respuesta = almacen.armarios;
      boolean = true;
      break;
    case "mesas":
      almacen.mesas.push(mueble);
      respuesta = almacen.mesas;
      boolean = true;
      break;
    case "sillas":
      almacen.sillas.push(mueble);
      respuesta = almacen.sillas;
      boolean = true;
      break;
  }
  boolean
    ? res.send(respuesta)
    : res.send({
        error: true,
        mensaje: "No ha podido añadirse correctamente",
      });
});

app.put("/almacen", function (req, res) {
  /* Recibe un objeto con los campos opcion, nombre y precio (además de los valores nuevos para el objeto). Busca el nombre dentro del array del departamento marcado por opcion y si lo encuentra y el precio es el mismo, modifica el valor de los campos del objeto con los nuevos valores recibidos y devuelve el departamento del almacen elegido por opcion. En caso contrario, devuelve error.  */
  let opcion = req.body.opcion;
  let nombre = req.body.nombre.toUpperCase();
  let precio = parseInt(req.body.precio);
  let NewNombre = req.body.nombreNuevo.toUpperCase();
  let NewDescipcion = req.body.descripcion;
  let NewImg = req.body.img;
  let NewPrecio = parseInt(req.body.precioNuevo);
  let respuesta;
  let boolean = false;

  switch (opcion) {
    case "armarios":
      for (let i = 0; i < almacen.armarios.length; i++) {
        if (
          almacen.armarios[i].nombre.includes(nombre) &&
          almacen.armarios[i].precio == precio
        ) {
          almacen.armarios[i].nombre = NewNombre;
          if (NewDescipcion.length != 0) {
            almacen.armarios[i].descripccion = NewDescipcion;
          }
          if (NewImg.length != 0) {
            almacen.armarios[i].img = NewImg;
          }
          almacen.armarios[i].precio = NewPrecio;
          respuesta = almacen.armarios;
          boolean = true;
        }
      }
      break;
    case "mesas":
      for (let i = 0; i < almacen.mesas.length; i++) {
        if (
          almacen.mesas[i].nombre.includes(nombre) &&
          almacen.mesas[i].precio == precio
        ) {
          almacen.mesas[i].nombre = NewNombre;
          if (NewDescipcion.length != 0) {
            almacen.mesas[i].descripccion = NewDescipcion;
          }
          if (NewImg.length != 0) {
            almacen.mesas[i].img = NewImg;
          }
          almacen.mesas[i].precio = NewPrecio;
          respuesta = almacen.mesas;
          boolean = true;
        }
      }
      break;
    case "sillas":
      for (let i = 0; i < almacen.sillas.length; i++) {
        if (
          almacen.sillas[i].nombre.includes(nombre) &&
          almacen.sillas[i].precio == precio
        ) {
          almacen.sillas[i].nombre = NewNombre;
          if (NewDescipcion.length != 0) {
            almacen.sillas[i].descripccion = NewDescipcion;
          }
          if (NewImg.length != 0) {
            almacen.sillas[i].img = NewImg;
          }
          almacen.sillas[i].precio = NewPrecio;
          respuesta = almacen.sillas;
          boolean = true;
        }
      }
      break;
  }
  boolean
    ? res.send(respuesta)
    : res.send({
        error: true,
        mensaje: "No ha podido modificarse correctamente",
      });
});

app.delete("/almacen", function (req, res) {
  /* Recibe un objeto con los cambos opcion, nombre y precio. Busca el nombre dentro del array del departamento marcado por opcion y si lo encuentra y coincide el precio lo borra y devuelve el departamento del almacen selecionado por opcion. En caso contrario, devuelve error.  */
  let opcion = req.body.opcion;
  let nombre = req.body.nombre.toUpperCase();
  let precio = parseInt(req.body.precio);
  let respuesta;
  let boolean = false;
  switch (opcion) {
    case "armarios":
      for (let i = 0; i < almacen.armarios.length; i++) {
        if (
          almacen.armarios[i].nombre.includes(nombre) &&
          almacen.armarios[i].precio == precio
        ) {
          almacen.armarios.splice(i, 1);
          respuesta = almacen.armarios;
          boolean = true;
        }
      }
      break;
    case "mesas":
      for (let i = 0; i < almacen.mesas.length; i++) {
        if (
          almacen.mesas[i].nombre.includes(nombre) &&
          almacen.mesas[i].precio == precio
        ) {
          almacen.mesas.splice(i, 1);
          respuesta = almacen.mesas;
          boolean = true;
        }
      }
      break;
    case "sillas":
      for (let i = 0; i < almacen.sillas.length; i++) {
        if (
          almacen.sillas[i].nombre.includes(nombre) &&
          almacen.sillas[i].precio == precio
        ) {
          almacen.sillas.splice(i, 1);
          respuesta = almacen.sillas;
          boolean = true;
        }
      }
      break;
  }
  boolean
    ? res.send(respuesta)
    : res.send({
        error: true,
        mensaje: "No ha podido borrarse correctamente",
      });
});

/* CESTA------------------------------------------------------- */

app.get("/cesta", function (req, res) {
  res.send(cesta);
});

app.post("/cesta", function (req, res) {
  let opcion = req.body.opcion;
  let nombre = req.body.nombre;
  let descripcion = req.body.descripcion;
  let img = req.body.img;
  let precio = parseInt(req.body.precio);
  let anyadir = true;
  let respuesta;
  let errorCantidad = false;

  for (let i = 0; i < cesta.length; i++) {
    if (cesta[i].nombre === nombre && cesta[i].precio === precio) {
      cesta[i].cantidad++;
      anyadir = false;
      break;
    }
  }
  if (anyadir) {
    switch (opcion) {
      case "armarios":
        for (let i = 0; i < almacen.armarios.length; i++) {
          if (
            almacen.armarios[i].nombre === nombre &&
            almacen.armarios[i].precio === precio
          ) {
            if (almacen.armarios[i].stock > 0) {
              cesta.push({
                nombre: nombre,
                descripcion: descripcion,
                img: img,
                precio: precio,
                cantidad: 1,
              });
              almacen.armarios[i].stock--;
              respuesta = almacen.armarios;
              break;
            } else {
              errorCantidad = true;
            }
          }
        }
        break;
      case "mesas":
        for (let i = 0; i < almacen.mesas.length; i++) {
          if (
            almacen.mesas[i].nombre === nombre &&
            almacen.mesas[i].precio === precio
          ) {
            if (almacen.mesas[i].stock > 0) {
              cesta.push({
                nombre: nombre,
                descripcion: descripcion,
                img: img,
                precio: precio,
                cantidad: 1,
              });
              almacen.mesas[i].stock--;
              respuesta = almacen.mesas;
              break;
            } else {
              errorCantidad = true;
            }
          }
        }
        break;
      case "sillas":
        for (let i = 0; i < almacen.sillas.length; i++) {
          /*  console.log(almacen.sillas[i].stock) */
          if (
            almacen.sillas[i].nombre === nombre &&
            almacen.sillas[i].precio === precio
          ) {
            if (almacen.sillas[i].stock > 0) {
              cesta.push({
                nombre: nombre,
                descripcion: descripcion,
                img: img,
                precio: precio,
                cantidad: 1,
              });
              almacen.sillas[i].stock--;
              respuesta = almacen.sillas;
              /* console.log(almacen.sillas[i].stock); */
              break;
            } else {
              errorCantidad = true;
            }
          }
        }
        break;
    }
  }
  errorCantidad
    ? res.send({
        error: true,
        mensaje: "No hay stock suficiente de este producto",
      })
    : res.send(respuesta);
});

app.put("/cesta", function (req, res) {
  let nombre = req.body.nombre;
  let precio = req.body.precio;

  for (let i = 0; i < cesta.length; i++) {
    if (cesta[i].nombre === nombre && cesta[i].precio === precio) {
      if (cesta[i].cantidad >= 1) {
        cesta[i].cantidad--;
      }
      if (cesta[i].cantidad === 0) {
        cesta.splice(i, 1);
      }
    }
  }
  res.send(cesta)
});

app.delete("/cesta", function (req, res) {
  cesta = [];
  res.send({
    mensaje: "Tu cesta está vacía",
  });
});

app.listen(3000);
