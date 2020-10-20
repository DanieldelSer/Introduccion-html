
let string = []
let frase = "";

for (let i = 0; i < 3; i++) {
    string.push(window.prompt("Escribe una palabra"))
}

frase += `<p>${string[1]}</p>`;
frase += `<p>${string[2]}</p>`;
frase += `<p>${string[0]}</p>`;

document.getElementById("div1").innerHTML = frase;