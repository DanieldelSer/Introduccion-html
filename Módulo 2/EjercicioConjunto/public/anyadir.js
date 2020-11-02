let muebleDepartamento = "";

function mostrarDepartamento() {
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
      }
    });
}

function anyadir() {
  let nombre = document.getElementById("nombre").value;
  let descripcion = document.getElementById("descripcion").value;
  let img = document.getElementById("img").value;
  let precio = document.getElementById("precio").value
  let opcion = document.getElementById("selectTipo").value;
  console.log (precio)
  if (
    nombre.length != 0 &&
    descripcion.length != 0 &&
    img.length != 0 &&
    precio.length != 0
  ) {
    let mueble = {
      nombre,
      descripcion,
      img,
      precio,
      opcion,
    };
    fetch("/almacen", {
      method: "POST",
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
  } else {
    document.getElementById("mostrarArmarios").innerHTML =
      "<h3>Faltan campos por rellenar</h3>";
  }
}

function eliminar(nombre, precio) {
  let opcion = document.getElementById("selectTipo").value;
  /* console.log("opcion", opcion); */
  if (opcion !== "armarios" && opcion !== "sillas" && opcion !== "mesas") {
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
}