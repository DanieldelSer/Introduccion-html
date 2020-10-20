
let num1 = parseInt(window.prompt(`Escribe un número`));
let multiplicacion = 1;
let resultado = factorial(num1)

alert(resultado)

function factorial(num1) {
    for (i = 1; i <= num1; i++) {
        multiplicacion *= i;
    }
    return multiplicacion;
}

