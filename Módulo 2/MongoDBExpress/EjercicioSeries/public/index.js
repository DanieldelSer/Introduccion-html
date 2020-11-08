
mostrarSeries();
function mostrarSeries() {
    document.getElementById("div1").innerHTML = "";
    fetch("/api/series")
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            let mostrar = "";
            for (let i = 0; i < datos.length; i++) {
                mostrar += `
            <div>
                <p>Titulo: ${datos[i].titulo}</p>
                <p>Plataforma: ${datos[i].plataforma}</p>
                <p>Nota: ${datos[i].nota}</p>
                <hr>
            </div>
        `;
            }
            document.getElementById("div1").innerHTML = mostrar;
        });
};

function buscarSerie() {
    document.getElementById("div1").innerHTML = "";
    const titulo = document.getElementById("titulo").value;
    fetch(`/api/serie/${titulo}`)
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            let mostrar = "";
            for (let i = 0; i < datos.length; i++) {
                mostrar += `
            <div>
                <p>Titulo: ${datos[i].titulo}</p>
                <p>Plataforma: ${datos[i].plataforma}</p>
                <p>Nota: ${datos[i].nota}</p>
                <hr>
            </div>
        `;
            }
            document.getElementById("div1").innerHTML = mostrar;
        });
};

function anyadirSerie() {
    document.getElementById("div1").innerHTML = "";
    const titulo = document.getElementById("titulo").value;
    const plataforma = document.getElementById("selectPlataforma").value;
    const nota = document.getElementById("selectNota").value;
    const serie = {
        titulo,
        plataforma,
        nota
    }
    fetch("/api/nuevaSerie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serie),
      })
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            mostrarSeries();
        });
};