
fetch("/almacen")
.then(function (res) {
    return res.json();
})
.then(function (datos) {
    let impresion = "";
    for (let i = 0; i < datos.armarios.length; i++) {
        impresion += `
        <article>
            <img src="${datos.armarios[i].img}" alt="${datos.armarios[i].nombre}"/>
            <div class="datos">
            <h3>${datos.armarios[i].nombre}</h3>
            </h5>${datos.armarios[i].precio}€</h5>
            <p>${datos.armarios[i].descripccion}</p>        
        </div>
        </article>`;
        document.getElementById("mostrarArmarios").innerHTML = impresion;
    };
    for (let i = 0; i < datos.mesas.length; i++) {
        let impresion1 = "";
        impresion1 += `
        <article>
            <img src="${datos.mesas[i].img}" alt="${datos.mesas[i].nombre}"/>
            <div class="datos">
            <h3>${datos.mesas[i].nombre}</h3>
            </h5>${datos.mesas[i].precio}€</h5>
            <p>${datos.mesas[i].descripccion}</p>        
        </div>
        </article>`;
        document.getElementById("mostrarArmarios").innerHTML += impresion1;
    };
    for (let i = 0; i < datos.sillas.length; i++) {
        let impresion2 = "";
        impresion2 +=`
        <article>
            <img src="${datos.sillas[i].img}" alt="${datos.sillas[i].nombre}"/>
            <div class="datos">
            <h3>${datos.sillas[i].nombre}</h3>
            </h5>${datos.sillas[i].precio}€</h5>
            <p>${datos.sillas[i].descripccion}</p>        
        </div>
        </article>`;
        document.getElementById("mostrarArmarios").innerHTML += impresion2;
    };
});

let muebleDepartamento = "";

function mostrarDepartamento() {
document.getElementById("mostrarSillas").innerHTML = "";
document.getElementById("mostrarMesas").innerHTML = "";
document.getElementById("mostrarArmarios").innerHTML = "";
muebleDepartamento = document.getElementById("selectTipo").value;
fetch("/almacen/" + muebleDepartamento)
    .then(function (res) {
        return res.json();
    })
    .then(function (datos) {
        let impresion = "";
        for (let i = 0; i < datos.length; i++) {
            impresion += `
       <article>
            <img src="${datos[i].img}" alt="${datos[i].nombre}"/>
            <div class="datos">
            <h3>${datos[i].nombre}</h3>
            </h5>${datos[i].precio}€</h5>
            <p>${datos[i].descripccion}</p>
            <button onclick="eliminar('${datos[i].nombre}',${datos[i].precio})" class="inputsBoton">Eliminar</button>        
        </div>
        </article>`;
            document.getElementById("mostrarArmarios").innerHTML = impresion;
        };
    });
};

function eliminar(nombre, precio) {
let opcion = document.getElementById("selectTipo").value;
console.log('opcion', opcion)
if (opcion !== 'armarios' && opcion !== 'sillas' && opcion !== 'mesas') {
    alert("Falta el tipo de mueble");
    return;
}
let mueble = {
    nombre,
    precio,
    opcion,
};
fetch("/almacen", {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(mueble),
})
    .then(function (res) {
        return res.json();
    })
    .then(function (datos) {
        let mostrar = "";
        document.getElementById("mostrarArmarios").innerHTML = "";
        for (let i = 0; i < datos.length; i++) {
            mostrar += `
            <article>
                <img src="${datos[i].img}" alt="${datos[i].nombre}"/>
                <div class="datos">
                <h3>${datos[i].nombre}</h3>
                </h5>${datos[i].precio}€</h5>
                <p>${datos[i].descripccion}</p>
                <button onclick="eliminar('${datos[i].nombre}',${datos[i].precio})" class="inputsBoton">Eliminar</button>        
                </div>
            </article>`;
            document.getElementById("mostrarArmarios").innerHTML = mostrar;
        }
    });
};