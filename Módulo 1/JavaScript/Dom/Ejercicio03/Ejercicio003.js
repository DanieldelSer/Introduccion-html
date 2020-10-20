
let nombre = window.prompt("Escribe tu nombre");
let edad = parseInt(window.prompt("Escribe tu edad"));
let div1 = document.getElementById("div1");

switch (edad < 18) {
    case true:
        div1.innerHTML = `"Hola ${nombre}, eres menor de edad"`
        break;
    default:
        div1.innerHTML = `"Hola ${nombre}, eres mayor de edad"`
        break;
}