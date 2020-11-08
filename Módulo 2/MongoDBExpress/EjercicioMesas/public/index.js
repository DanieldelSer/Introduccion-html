
fetch("/api/mesas")
    .then(function (res) {
        return res.json();
    })
    .then(function (datos) {
        let mostrar = "";
        for (let i = 0; i < datos.length; i++) {
            mostrar +=
                `
            <div>
                <p>Tamaño:${datos[i].tamaño}</p>
                <p>Color:${datos[i].color}</p>
                <p>Material:${datos[i].material}</p>
                <p>Nº de patas${datos[i].patas}</p>
            </div>
            `;   
        }
        document.getElementById("div1").innerHTML = mostrar;
    });