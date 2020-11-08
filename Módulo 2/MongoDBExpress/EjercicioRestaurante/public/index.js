mostrarMenus();
function mostrarMenus() {
    document.getElementById("div1").innerHTML = "";
    fetch("/api/menus")
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            let mostrar = "";
            for (let i = 0; i < datos.length; i++) {
                mostrar += `
            <div>
                <p>Número de Menú: ${datos[i].numero}</p>
                <p>Primer Plato: ${datos[i].primer}</p>
                <p>Segundo Plato: ${datos[i].segundo}</p>
                <p>Postre: ${datos[i].postre}</p>
                <p>Precio: ${datos[i].precio}€</p>
                <hr>
            </div>
        `;
            }
            document.getElementById("div1").innerHTML = mostrar;
        });
};


function anyadirMenu() {
    document.getElementById("div1").innerHTML = "";
    const numero = document.getElementById("numero").value;
    const primer = document.getElementById("primerPlato").value;
    const segundo = document.getElementById("segundoPlato").value;
    const postre = document.getElementById("postre").value;
    const precio = document.getElementById("precio").value;
    const menu = {
        numero,
        primer,
        segundo,
        postre,
        precio
    }
    fetch("/api/nuevoMenu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(menu),
      })
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            mostrarMenus();
        });
};

function modificarMenu() {
    const numero = document.getElementById("nuevoNumero").value;
    const primer = document.getElementById("nuevoPrimerPlato").value;
    const segundo = document.getElementById("nuevoSegundoPlato").value;
    const postre = document.getElementById("nuevoPostre").value;
    const precio = document.getElementById("nuevoPrecio").value;
    let menu = {
        numero,
        primer,
        segundo,
        postre,
        precio
    }
    fetch("/api/editarMenu", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(menu),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (datos) {
        console.log(datos);
        mostrarMenus();
      });
  }

  function borrarMenu() {
    let menu = {numero : document.getElementById("nuevoNumero").value};
    fetch("/api/borrarMenu", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(menu),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (datos) {
        mostrarMenus();
      });
  }