
fetch("/personas")
    .then(function (res) {
        return res.json();
    })
    .then(function (datos) {
        let mostrar = "";
        for (let i = 0; i < datos.length; i++) {
            mostrar += `<h1>${datos[i].name}</h1>
                        <p>${datos[i].apellido}</p>
                        <p>${datos[i].edad}</p>`;
        }
        document.getElementById("div1").innerHTML = mostrar;
    });
