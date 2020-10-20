
let num1;
let num2;
let resultado;

do {
    num1 = parseInt(window.prompt(`Escribe un número`));
    num2 = parseInt(window.prompt(`Escribe un número`));
    resultado = dividir(num1, num2);
    alert(resultado);
} while (num2 !== 0);

function dividir(num1, num2) {
    return num1 / num2;
}

