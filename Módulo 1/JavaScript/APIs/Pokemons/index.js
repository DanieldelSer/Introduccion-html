
let url = "https://pokeapi.co/api/v2/";
let selectPokemons = document.getElementById("listaPokemons");
let listaPokemons;

fetch(url + "type")
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
        listaPokemons = datos.results;
        for (let i = 0; i < datos.results.length; i++) {
            let opcionPokemon = `<option>${datos.results[i].name}</option>`;
            selectPokemons.innerHTML += opcionPokemon;
            console.log(listaPokemons)
        }
    })

let clasePokemon = document.getElementById("pokemons");

function obtenerPokemons(){
    let nombrePokemonSeleccionado = document.getElementById("listaPokemons").value;
    let pokemonSeleccionado;
    for (let i = 0; i < listaPokemons.length; i++) {
        if (listaPokemons[i].name === nombrePokemonSeleccionado) {
            pokemonSeleccionado = listaPokemons[i]
            break;
        }
    }
        fetch(pokemonSeleccionado.url)
            .then(function (respuesta) {
                return respuesta.json();
            }
            )
            .then(function (datos) {
                for (let i = 0; i < 3; i++){
                let x = Math.round(Math.random() * datos.pokemon.length + 0)
                let nombrePokemons = `<li>${datos.pokemon[x].pokemon.name}</li>`
                clasePokemon.innerHTML += nombrePokemons
                }
            }
            );
    clasePokemon.innerHTML = "";
}