
let nombre = window.prompt("Escribe tu nombre");
let edad = parseInt(window.prompt("Escribe tu edad"));
let div1 = document.getElementById("div1");

edad < 18 ? div1.innerHTML = `"Hola ${nombre}, eres menor de edad"` : div1.innerHTML = `"Hola ${nombre}, eres mayor de edad"`;