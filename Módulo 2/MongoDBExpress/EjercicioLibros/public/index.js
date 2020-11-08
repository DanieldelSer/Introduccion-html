mostrarLibros();
function mostrarLibros() {
  document.getElementById("div1").innerHTML = "";
  fetch("/api/libros")
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      let mostrar = "";
      for (let i = 0; i < datos.length; i++) {
        mostrar += `
            <div>
                <p>Titulo: ${datos[i].titulo}</p>
                <p>Estado: ${datos[i].estado}</p>
                <hr>
            </div>
        `;
      }
      document.getElementById("div1").innerHTML = mostrar;
    });
}

function buscarLibro() {
  document.getElementById("div1").innerHTML = "";
  const titulo = document.getElementById("titulo").value;
  fetch(`/api/libros/${titulo}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      let mostrar = "";
      for (let i = 0; i < datos.length; i++) {
        mostrar += `
            <div>
                <p>Titulo: ${datos[i].titulo}</p>
                <p>Estado: ${datos[i].estado}</p>
                <hr>
            </div>
        `;
      }
      document.getElementById("div1").innerHTML = mostrar;
    });
}

function anyadir() {
    const titulo = document.getElementById("titulo").value;
    const libro = {
      titulo,
    };
  
    fetch(`/api/nuevoLibro/${titulo}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(libro),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (datos) {
        console.log(datos);
        mostrarLibros();
      });
  }

  function cambiarEstado() {
    const titulo = document.getElementById("titulo").value;
    fetch(`/api/editarLibro/${titulo}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (datos) {
        console.log(datos);
        mostrarLibros();
      });
  }

  function borrar() {
    const titulo = document.getElementById("titulo").value;
    fetch(`/api/borrarLibro/${titulo}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (datos) {
        console.log(datos);
        mostrarLibros();
      });
  }