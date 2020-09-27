
let nombre = window.prompt("Escribe tu nombre");
let edad = parseInt(window.prompt("Escribe tu edad"));
let div1 = document.getElementById("div1");

if (edad < 18) {
    div1.innerHTML = `"Hola ${nombre}, eres menor de edad"`
} else {
    div1.innerHTML = `"Hola ${nombre}, eres mayor de edad"`
}