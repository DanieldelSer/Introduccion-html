function enviar() {
    let mostrar = "";
    let name = document.getElementById("name").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;
    let persona = {
      name: name,
      apellidos: apellidos,
      edad: edad
    };
    fetch("/personas", {
      method: "PUT",
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
          mostrar += `<h1>${datos[i].name}</h1>
                      <p>${datos[i].apellidos}</p>
                      <p>${datos[i].edad}</p>`;
          document.getElementById("div1").innerHTML = mostrar;
        }
      });
  }