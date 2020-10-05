//variables para Brocha
let precioBrocha = 0;
let cantidadBrocha = 0;
let imagenBrocha = `<img width="20px" height="20px" src="./iconos/Copia de brocha.svg" alt="Brocha">`;
//variables para Llave
let precioLlave = 0;
let cantidadLlave = 0;
let imagenLlave = `<img width="20px" height="20px" src="./iconos/Copia de llave.svg" alt="Brocha">`;
//variables para Martillo
let precioMartillo = 0;
let cantidadMartillo = 0;
let imagenMartillo = `<img width="20px" height="20px" src="./iconos/Copia de martillo.svg" alt="Brocha">`;
//variables para Tronco
let precioTronco = 0;
let cantidadTronco = 0;
let imagenTronco = `<img width="20px" height="20px" src="./iconos/Copia de tronco.svg" alt="Brocha">`;

let herramientas = [
    {
        nombre: "Brocha",
        precio: 1
    },
    {
        nombre: "Llave",
        precio: 2
    },
    {
        nombre: "Martillo",
        precio: 3
    },
    {
        nombre: "Tronco",
        precio: 4
    }
]
//Creamos las funciones para los botones comprar y quitar de la cesta
//Brocha
function añadirBrocha() {
    cantidadBrocha++
    precioBrocha += herramientas[0].precio
    console.log("cantidad:" + cantidadBrocha)
    console.log("precio:" + precioBrocha + "€")
    actualizarCestaSumarBrocha()
}
function quitarBrocha() {
    if (cantidadBrocha > 0) {
        cantidadBrocha--
        precioBrocha -= herramientas[0].precio
        console.log("cantidad:" + cantidadBrocha)
        console.log("precio:" + precioBrocha + "€")
        actualizarCestaQuitarBrocha();
    } else {
        alert("El número de Brochas es 0")
    }
}
//Llave
function añadirLlave() {
    cantidadLlave++
    precioLlave += herramientas[1].precio
    console.log("cantidad:" + cantidadLlave)
    console.log("precio:" + precioLlave + "€")
    actualizarCestaSumarLlave()
}
function quitarLlave() {
    if (cantidadLlave > 0) {
        cantidadLlave--
        precioLlave -= herramientas[1].precio
        console.log("cantidad:" + cantidadLlave)
        console.log("precio:" + precioLlave + "€")
        actualizarCestaQuitarLlave();
    } else {
        alert("El número de Llaves es 0")
    }
}
//Martillo
function añadirMartillo() {
    cantidadMartillo++
    precioMartillo += herramientas[2].precio
    console.log("cantidad:" + cantidadMartillo)
    console.log("precio:" + precioMartillo + "€")
    actualizarCestaSumarMartillo()
}
function quitarMartillo() {
    if (cantidadMartillo > 0) {
        cantidadMartillo--
        precioMartillo -= herramientas[2].precio
        console.log("cantidad:" + cantidadMartillo)
        console.log("precio:" + precioMartillo + "€")
        actualizarCestaQuitarMartillo();
    } else {
        alert("El número de Martillos es 0")
    }
}
//Tronco
function añadirTronco() {
    cantidadTronco++
    precioTronco += herramientas[3].precio
    console.log("cantidad:" + cantidadTronco)
    console.log("precio:" + precioTronco + "€")
    actualizarCestaSumarTronco()
}
function quitarTronco() {
    if (cantidadTronco > 0) {
        cantidadTronco--
        precioTronco -= herramientas[3].precio
        console.log("cantidad:" + cantidadTronco)
        console.log("precio:" + precioTronco + "€")
        actualizarCestaQuitarTronco();
    } else {
        alert("El número de Troncos es 0")
    }
}

//Funciones para actualizar la cesta

//Brocha
function actualizarCestaSumarBrocha() {
    document.getElementById("numBrocha").innerHTML = cantidadBrocha;
    document.getElementById("imgBrocha").innerHTML += imagenBrocha;
    let suma = parseInt(document.getElementById("total").innerHTML) + herramientas[0].precio;
    document.getElementById("total").innerHTML = suma;
}
function actualizarCestaQuitarBrocha() {
    document.getElementById("numBrocha").innerHTML = cantidadBrocha;
    let valorBrocha = document.getElementById("imgBrocha").innerHTML;
    document.getElementById("imgBrocha").innerHTML = valorBrocha.replace(imagenBrocha.toString(), "");
    let resta = parseInt(document.getElementById("total").innerHTML) - herramientas[0].precio;
    document.getElementById("total").innerHTML = resta;
}
//Llave
function actualizarCestaSumarLlave() {
    document.getElementById("numLlave").innerHTML = cantidadLlave;
    document.getElementById("imgLlave").innerHTML += imagenLlave;
    let suma = parseInt(document.getElementById("total").innerHTML) + herramientas[1].precio;
    document.getElementById("total").innerHTML = suma;
}
function actualizarCestaQuitarLlave() {
    document.getElementById("numLlave").innerHTML = cantidadLlave;
    let valorLlave = document.getElementById("imgLlave").innerHTML;
    document.getElementById("imgLlave").innerHTML = valorLlave.replace(imagenLlave.toString(), "");
    let resta = parseInt(document.getElementById("total").innerHTML) - herramientas[1].precio;
    document.getElementById("total").innerHTML = resta;
}
//Martillo
function actualizarCestaSumarMartillo() {
    document.getElementById("numMartillo").innerHTML = cantidadMartillo;
    document.getElementById("imgMartillo").innerHTML += imagenMartillo;
    let suma = parseInt(document.getElementById("total").innerHTML) + herramientas[2].precio;
    document.getElementById("total").innerHTML = suma;
}
function actualizarCestaQuitarMartillo() {
    document.getElementById("numMartillo").innerHTML = cantidadMartillo;
    let valorMartillo = document.getElementById("imgMartillo").innerHTML;
    document.getElementById("imgMartillo").innerHTML = valorMartillo.replace(imagenMartillo.toString(), "");
    let resta = parseInt(document.getElementById("total").innerHTML) - herramientas[2].precio;
    document.getElementById("total").innerHTML = resta;
}
//Tronco
function actualizarCestaSumarTronco() {
    document.getElementById("numTronco").innerHTML = cantidadTronco;
    document.getElementById("imgTronco").innerHTML += imagenTronco;
    let suma = parseInt(document.getElementById("total").innerHTML) + herramientas[3].precio;
    document.getElementById("total").innerHTML = suma;
}
function actualizarCestaQuitarTronco() {
    document.getElementById("numTronco").innerHTML = cantidadTronco;
    let valorTronco = document.getElementById("imgTronco").innerHTML;
    document.getElementById("imgTronco").innerHTML = valorTronco.replace(imagenTronco.toString(), "");
    let resta = parseInt(document.getElementById("total").innerHTML) - herramientas[3].precio;
    document.getElementById("total").innerHTML = resta;
}

//Creamos lo que contendrá el div
let mostrarHerramientasBrocha = 
    `<div class="principal">
    <h3>${herramientas[0].nombre}</h3>
    <img width = 40px height = 40px src="./iconos/Copia de brocha.svg" alt="Brocha" />
    <p>${herramientas[0].precio}€</p>
    <button onclick="añadirBrocha()">comprar</button>
    <button onclick="quitarBrocha()">quitar</button>
    </div>`;
let mostrarHerramientasLlave =
    `<div class="principal">
    <h3>${herramientas[1].nombre}</h3>
    <img width = 40px height = 40px src="./iconos/Copia de llave.svg" alt="Brocha" />
    <p>${herramientas[1].precio}€</p>
    <button onclick="añadirLlave()">comprar</button>
    <button onclick="quitarLlave()">quitar</button>
    </div>`
let mostrarHerramientasMartillo =
    `<div class="principal">
    <h3>${herramientas[2].nombre}</h3>
    <img width = 40px height = 40px src="./iconos/Copia de martillo.svg" alt="Brocha" />
    <p>${herramientas[2].precio}€</p>
    <button onclick="añadirMartillo()">comprar</button>
    <button onclick="quitarMartillo()">quitar</button>
    </div>`
let mostrarHerramientasTronco =
    `<div class="principal">
    <h3>${herramientas[3].nombre}</h3>
    <img width = 40px height = 40px src="./iconos/Copia de tronco.svg" alt="Brocha" />
    <p>${herramientas[3].precio}€</p>
    <button onclick="añadirTronco()">comprar</button>
    <button onclick="quitarTronco()">quitar</button>
    </div>`
//Mostramos el div de herramientas
document.getElementById("brocha").innerHTML = mostrarHerramientasBrocha;
document.getElementById("llave").innerHTML = mostrarHerramientasLlave;
document.getElementById("martillo").innerHTML = mostrarHerramientasMartillo;
document.getElementById("tronco").innerHTML = mostrarHerramientasTronco;

