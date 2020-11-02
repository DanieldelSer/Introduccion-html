
fetch("/cesta")
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
            <p>${datos[i].cantidad}</p>
            <button onclick="eliminar('${datos[i].nombre}',${datos[i].precio})" class="inputsBoton">Eliminar</button>        
        </div>
        </article>`;
            document.getElementById("mostrarArmarios").innerHTML = impresion;
        };
    });

function eliminar(nombre, precio) {
    let mueble = {
        nombre,
        precio,
    };
    fetch("/cesta", {
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
}

function eliminarCesta() {
    
    fetch("/cesta", {
        method: "DELETE",
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            let mostrar = datos.mensaje;
            document.getElementById("mostrarArmarios").innerHTML = "";
            document.getElementById("mostrarArmarios").innerHTML = mostrar;
            
        });
}