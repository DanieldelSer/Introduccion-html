
const url = "https://api.magicthegathering.io/v1/sets";

fetch(url)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
        listaSets = datos.sets;
        //Ordenamos los sets por orden alfabético
        function compare(a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }
        listaSets.sort(compare);
        for (let i = 0; i < datos.sets.length; i++) {
            let opcionSet = `<option>${datos.sets[i].name}</option>`
            selectSet.innerHTML += opcionSet;
            console.log(datos.sets[i].name)
        }
        console.log(datos)
    });

let cartasSet = document.getElementById("div2");

function obtenerCartas() {
    let nombreSetSeleccionado = document.getElementById("selectSet").value;
    fetch(`https://api.magicthegathering.io/v1/cards?setName=${nombreSetSeleccionado}`)
        .then(function (respuesta) {
            return respuesta.json();
        }
        )
        .then(function (datos) {
            for (let i = 0; i < datos.cards.length; i++) {
                let carta = datos.cards[i];
                let setSeleccionado = `
                <div class="card">
                <img src="${carta.imageUrl}" alt="${carta.name}" style="width:100%"/>
                <div class="container">
                <h2>${carta.name}</h2>
                <p>${carta.text}</p>
                </div>
                </div>
                `;
                cartasSet.innerHTML += setSeleccionado;
            }
        }
        );cartasSet.innerHTML = "";
}