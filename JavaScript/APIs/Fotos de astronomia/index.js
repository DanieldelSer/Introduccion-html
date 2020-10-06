function fotoNasa() {
    let anyo = document.getElementById("input").value;
    let mes = document.getElementById("input1").value;
    let dia = document.getElementById("input2").value;

    let url = `https://api.nasa.gov/planetary/apod?api_key=P3jmENjSUXp1h8yI0AYb4kBQ4IWgSh2HAa2poYWq&date=${anyo}-${mes}-${dia}`;

    fetch(url)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            let mostrar = `
    <div>
        <p>Fecha:${datos.date}</p>
        <p>Título:${datos.title}</p>
        <img src=${datos.url} alt""/>
        <p>Descripción:${datos.explanation}</p>
    </div>
    `;
            document.getElementById("foto").innerHTML = mostrar;
        });
}