
let num1 = parseInt(window.prompt(`Escribe un número`));
let num2 = parseInt(window.prompt(`Escribe un número`));
let suma = sumar(num1, num2);

function sumar(num1, num2) {
    return num1 + num2
}

document.getElementById("div1").innerHTML = suma;