const express = require("express");
const { readdirSync } = require("fs");
const { armarios } = require("./almacen");
const app = express();
const almacen = require("./almacen");

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/almacen", function (req, res) {
    /* Devuelve un un objeto con tres arrays dentro correspondientes a las secciones */
  res.send(almacen);
})

app.get("/almacen/:departamento", function(req,res){
    /* Recibe la opcion por params y devuelve el array de objetos del departamento correspondiente */
    let opcion = req.params.departamento
    switch (opcion){
        case "armarios":
            res.send(almacen.armarios)
            break;
        case "mesas":
            res.send(almacen.mesas)
            break;
        case "sillas":
            res.send(almacen.sillas)
            break;
    }
})

app.post("/almacen", function(req, res){
    /* Recibe un objeto con los campos del mueble nuevo y el campo adicional opcion. Añade el objeto nuevo al array correspondiente según el valor de opcion y luego devuelve el almacen. En caso de error, devuelve un objeto con el mensaje de error.  */

    let opcion = req.body.opcion
    let nombre = req.body.nombre
    let descripcion = req.body.descripcion
    let img = req.body.img
    let precio = req.body.precio
    let mueble = {
        nombre: nombre,
        descripccion: descripcion,
        img: img,
        precio: precio,
    }
    let boolean = false
    switch (opcion){
        case "armarios":
            almacen.armarios.push(mueble)
            boolean = true
            break;
        case "mesas":
            almacen.mesas.push(mueble)
            boolean = true
            break;
        case "sillas":
            almacen.sillas.push(mueble)
            boolean = true
            break;
    }
    boolean 
    ? res.send(almacen)
    : res.send({error: true, mensaje: "No ha podido añadirse correctamente"})
})

app.put("/almacen", function(req,res){
        /* Recibe un objeto con los cambos opcion y nombre (además de los campos del objeto). Busca el nombre dentro del array del departamento marcado por opcion y si lo encuentra, modifica el valor de los campos del objeto con los nuevos valores recibidos y devuelve el almacen. En caso contrario, devuelve error.  */
    let opcion = req.body.opcion
    let nombre = req.body.nombre
    let NewNombre = req.body.nombreNuevo
    let NewDescipcion = req.body.descripcion
    let NewImg = req.body.img
    let NewPrecio = req.body.precio
    let boolean = false
    
    switch (opcion){
        case "armarios":
            for(let i = 0; almacen.armarios.length ; i++){
            if (almacen.armarios[i].nombre.includes(nombre)){
                almacen.armarios[i].nombre = NewNombre
                almacen.armarios[i].descripccion = NewDescipcion
                almacen.armarios[i].img = NewImg
                almacen.armarios[i].precio = NewPrecio
                boolean = true
            }
        }
            break;
        case "mesas":
            for(let i = 0; almacen.mesas.length ; i++){
            if (almacen.mesas[i].nombre.includes(nombre)){
                almacen.mesas[i].nombre = NewNombre
                almacen.mesas[i].descripccion = NewDescipcion
                almacen.mesas[i].img = NewImg
                almacen.mesas[i].precio = NewPrecio
                boolean = true
            }
        }
            break;
        case "sillas":
            for(let i = 0; almacen.sillas.length ; i++){
            if (almacen.sillas[i].nombre.includes(nombre)){
                almacen.sillas[i].nombre = NewNombre
                almacen.sillas[i].descripccion = NewDescipcion
                almacen.sillas[i].img = NewImg
                almacen.sillas[i].precio = NewPrecio
                boolean = true
            }
        }
            break;
            
    }
    boolean 
    ? res.send(almacen)
    : res.send({error: true, mensaje: "No ha podido modificarse correctamente"})

})

app.delete("/almacen", function(req, res){
    /* Recibe un objeto con los cambos opcion y nombre. Busca el nombre dentro del array del departamento marcado por opcion y si lo encuentra lo borra y devuelve el almacen. En caso contrario, devuelve error.  */
    let opcion = req.body.opcion
    let nombre = req.body.nombre
    let boolean = false
    switch (opcion){
        case "armarios":
            for(let i = 0; i< almacen.armarios[i].length; i++){
                if(almacen.armarios[i].nombre.includes(nombre)){
                    almacen.armarios[i].splice(i,1)
                    boolean = true
                }
            }
            break;
        case "mesas":
            for(let i = 0; i< almacen.mesas[i].length; i++){
                if(almacen.mesas[i].nombre.includes(nombre)){
                    almacen.mesas[i].splice(i,1)
                    boolean = true
                }
            }
            break;
        case "sillas":
            for(let i = 0; i< almacen.sillas[i].length; i++){
                if(almacen.sillas[i].nombre.includes(nombre)){
                    almacen.sillas[i].splice(i,1)
                    boolean = true
                }
            }
            break;
    }
    boolean 
    ? res.send(almacen)
    : res.send({error: true, mensaje: "No ha podido borrarse correctamente"})
})


app.listen(3000)