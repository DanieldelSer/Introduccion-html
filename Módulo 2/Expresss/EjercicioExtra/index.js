// Crea una aplicación que simule una tienda online.
// Crea una variable almacén en la que guardes un array con objetos.
// Cada objeto será un departamento de la tienda y tendrás varios productos en cada uno.
// Cada uno de estos productos será un objeto con las siguientes propiedades: nombre, precio y stock.
// Crea también una variable cesta.

// Crea las siguientes rutas:
// Dos rutas diferentes para cada uno de los departamentos de la tienda.
// Una ruta devolverá en la respuesta todos los productos que hay en ese departamento.
// Haz que se muestre en una tabla HTML.
// La otra ruta servirá para comprar productos.
// Esta ruta recibirá dos parámetros: nombre del producto y cantidad.
// Añadir a la variable cesta el producto y la cantidad seleccionada Si la cantidad pedida es mayor que el stock,
// devolveremos un mensaje avisando de que no hay stock suficiente.  

// Una ruta para mostrar la cesta.
// Una ruta para confirmar la compra. Esta ruta devolverá un mensaje de confirmación y vaciará la cesta.

const express = require("express");
const app = express();

let almacen = [
    {
        name: "iluminacion",
        items: [
            {
                name: "lampara",
                propiedades: [{
                    precio: 20,
                    stock: 5
                }]
            },
            {
                name: "bombilla",
                propiedades: [{
                    precio: 3,
                    stock: 10
                }]
            }
        ]
    },
    {
        name: "jardin",
        items: [
            {
                name: "pala",
                propiedades: [{
                    precio: 12,
                    stock: 5
                }]
            },
            {
                name: "maceta",
                propiedades: [{
                    precio: 5,
                    stock: 9
                }]
            }
        ]
    }
]
console.log(almacen);


let cesta = [];

app.get("/tienda", function (req, res) {
    let departamentos = "";
    for (let i = 0; i < almacen.length; i++) {
        departamentos += `<h3>${almacen[i].name}</h3>`
    }
    res.send(`<h1>Tienda-departamentos</h1>`
        + departamentos);
});

app.get("/tienda/:departamento", function (req, res) {
    let mostrarDepartamento = req.params.departamento;
    let boolean = false;
    let items = "";
    for (let i = 0; i < almacen.length; i++) {
        if (mostrarDepartamento === almacen[i].name) {
            boolean = true;
            for (let j = 0; j < almacen[i].items.length; j++) {
                items += `<h3>${almacen[i].items[j].name}</h3>
                          <p>${almacen[i].items[j].propiedades[0].precio}€ </p>`
            }
        }
    }
    if (boolean) {
        res.send(items);
    } else {
        res.send(`No hay ningún departamento con ese nombre: ${mostrarDepartamento}`);
    }
});

app.get("/tienda/:departamento/:item/:cantidad", function (req, res) {
    let departamentoSelecionado = req.params.departamento;
    let itemSeleccionado = req.params.item;
    let cantidad = parseInt(req.params.cantidad);
    for (let i = 0; i < almacen.length; i++) {
        if (departamentoSelecionado === almacen[i].name) {
            for (let j = 0; j < almacen[i].items.length; j++) {
                if (almacen[i].items[j].name === itemSeleccionado) {
                    
                    cesta.push({
                        "name": itemSeleccionado,
                        "precio": almacen[i].items[j].propiedades[0].precio * cantidad + "€",
                        "cantidad": cantidad
                    });
                    almacen[i].items[j].propiedades[0].stock -= cantidad;
                    break;
                }
                // else {
                //     res.send(`No hay stock de ${itemSeleccionado}`);
                // }
            }
        }
        // else {
        //     res.send(`No hay ningún departamento con ese nombre:${departamentoSelecionado}`)
        // }
    } res.send(`<h2>Compra:</h2>
               <p>${itemSeleccionado}</p>
               <p>cantidad: ${cantidad}</p>
               `);
});

app.get("/cesta", function (req, res) {
    let cesta2 = "";
    for (let i = 0; i < cesta.length; i++) {
        cesta2 += `
                <p>${cesta[i].name}</p>
                <p>cantidad: ${cesta[i].cantidad}</p>
                <p>total: ${cesta[i].precio}</p>
                 `
    };
    res.send(`<h2>Cesta:</h2>
            <p>${cesta2}</p>`);
});

app.get("/comprar", function(req, res){
    cesta = [];
    res.send(`<p>Su compra ha sido realizada</p>`)
})

app.listen(3000, function () {
    console.log("Puerto 3000 abierto");
});