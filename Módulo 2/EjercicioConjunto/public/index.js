
fetch("/almacen")
    .then(function (res) {
        return res.json();
    })
    .then(function (datos) {
        let impresion = "";
        for (let i = 0; i < datos.armarios.length; i++) {
            impresion += `
           <div>
                <div id="img">
                   <img src="${datos.armarios[i].img}" alt="${datos.armarios[i].nombre}"/>
                </div>
                <div id="datos">
                 <h3>${datos.armarios[i].nombre}</h3>
                   </h5>${datos.armarios[i].precio}€</h5>
                   <p>${datos.armarios[i].descripccion}</p>
                </div>           
            </div>`;
            document.getElementById("mostrarArmarios").innerHTML = impresion;
        };
        let impresion1 = "";
        for (let i = 0; i < datos.mesas.length; i++) {
            impresion1 += `
            <div>
                <div id="img">
                   <img src="${datos.mesas[i].img}" alt="${datos.mesas[i].nombre}"/>
                </div>
                <div id="datos">
                 <h3>${datos.mesas[i].nombre}</h3>
                   </h5>${datos.mesas[i].precio}€</h5>
                   <p>${datos.mesas[i].descripccion}</p>
                </div>           
            </div>`;
            document.getElementById("mostrarMesas").innerHTML = impresion1;
        };
        let impresion2 = "";
        for (let i = 0; i < datos.sillas.length; i++) {
            impresion2 +=
                `
            <div>
                <div id="img">
                   <img src="${datos.sillas[i].img}" alt="${datos.sillas[i].nombre}"/>
                </div>
                <div id="datos">
                 <h3>${datos.sillas[i].nombre}</h3>
                   </h5>${datos.sillas[i].precio}€</h5>
                   <p>${datos.sillas[i].descripccion}</p>
                </div>           
            </div>
         `
            document.getElementById("mostrarSillas").innerHTML = impresion2;
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
           <div>
                <div id="img">
                   <img src="${datos[i].img}" alt="${datos[i].nombre}"/>
                </div>
                <div id="datos">
                 <h3>${datos[i].nombre}</h3>
                   </h5>${datos[i].precio}€</h5>
                   <p>${datos[i].descripccion}</p>
                </div>           
            </div>`;
                document.getElementById("mostrarArmarios").innerHTML = impresion;
            };
        });
};

function anyadir() {
    let mostrar = "";
    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;
    let img = document.getElementById("img").value;
    let precio = document.getElementById("precio").value;
    let opcion = document.getElementById("opcion").value;
    let mueble = {
        nombre,
        descripcion,
        img,
        precio,
    };
    fetch("/almacen", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(mueble),
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            document.getElementById("mostrarSillas").innerHTML = "";
            document.getElementById("mostrarMesas").innerHTML = "";
            document.getElementById("mostrarArmarios").innerHTML = "";
            for (let i = 0; i < datos.length; i++) {
                mostrar += `
                <div>
                     <div id="img">
                        <img src="${datos[i].img}" alt="${datos[i].nombre}"/>
                     </div>
                     <div id="datos">
                      <h3>${datos[i].nombre}</h3>
                        </h5>${datos[i].precio}€</h5>
                        <p>${datos[i].descripccion}</p>
                     </div>           
                 </div>`;
                document.getElementById("mostrarArmarios").innerHTML = impresion;
            }
        });
}