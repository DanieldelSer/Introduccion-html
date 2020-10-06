
let url = "https://randomuser.me/api/"

fetch(url)
    .then(function cogerRespuesta(respuesta) {
        return respuesta.json();
    })
    .then(function cogerDatos(datos) {
        let persona = `
    <div>
        <img src=${datos.results[0].picture.medium} alt=""/>
        <p>Nombre: ${datos.results[0].name.title} ${datos.results[0].name.first} ${datos.results[0].name.last}
        <p>Dirección: ${datos.results[0].location.street.name} ${datos.results[0].location.street.number}</p>
        <p>Ciudad: ${datos.results[0].location.city}</p>
        <p>Comunidad: ${datos.results[0].location.state}</p>
        <p>Pais: ${datos.results[0].location.country}</p>
    </div>
    `;
        document.getElementById("persona").innerHTML = persona;
    });