function enviar() {
  let mostrar = "";
  let nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;
  let apellidos = document.getElementById("apellidos").value;
  let persona = {
    nombre: nombre,
    edad: edad,
    apellidos: apellidos,
  };
  fetch("/personas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(persona),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      for (let i = 0; i < datos.length; i++) {
        mostrar += `<h1>${datos[i].nombre}</h1>
                      <p>${datos[i].apellidos}</p>
                      <p>${datos[i].edad}</p>`;
        document.getElementById("div1").innerHTML = mostrar;
      }
    });
}