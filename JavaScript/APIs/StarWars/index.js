
const url = `https://swapi.dev/api/`
let selectPlanetas = document.getElementById("listaPlanetas");
let listaPersonajes = document.getElementById("personajes");
let listaPlanetas;

//Obtenemos la lista de canales en un dropdown(etiqueta select)
fetch(url + "planets/")
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
        listaPlanetas = datos.results;
        for (let i = 0; i < datos.results.length; i++) {
            let opcionPlaneta = `<option>${datos.results[i].name}</option>`
            selectPlanetas.innerHTML += (opcionPlaneta);
            //console.log(datos.results[i].name)
        }
        //console.log(datos)
    });

// mostrar un alert con el nombre del planeta seleccionado
// function botonAlert () {
//     alert("El planeta selecionado es: " + document.getElementById("listaPlanetas").value)
// }


let planetaPersonajes = document.getElementById("personajes");

function obtenerResidentesPlaneta() {
    let nombrePlanetaSeleccionado = document.getElementById("listaPlanetas").value;
    let planetaSeleccionado;
    for (let i = 0; i < listaPlanetas.length; i++) {
        if (listaPlanetas[i].name === nombrePlanetaSeleccionado) {
            planetaSeleccionado = listaPlanetas[i]
            break;
        }
    }
    for (let i = 0; i < planetaSeleccionado.residents.length; i++) {
        fetch(planetaSeleccionado.residents[i])
            .then(function (respuesta) {
                return respuesta.json();
            })
            .then(function (datos) {
                let nombrePersonajes = `<li>${datos.name}</li>`
                planetaPersonajes.innerHTML += nombrePersonajes
            });
            
    }planetaPersonajes.innerHTML = "";
}
//  function obtenerPersonasPlaneta() {
//      document.getElementById("listaPlanetas").value)
//  }