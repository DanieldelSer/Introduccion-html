
let num1 = parseInt(window.prompt("Escribe un número"));
let num2 = parseInt(window.prompt("Escribe un número"));
let num3 = comparar(num1, num2)

function comparar(num1, num2) {
    if (num1>num2){
        return true;
    }else {
        return false;
    }
}

num3
 ? console.log(`El primer número es más grande`) 
 : console.log(`El primer número no es más grande`)
