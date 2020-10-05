/*
Escribe un programa que pida valores. Si introduce un valor negativo, mostrar un mensaje diciendo que se ignoran los valores negativos.Seguir pidiendo hasta que el usuario introduzca un 0, entonces mostrar la suma de los valores introducidos.
*/


let num;
let suma = 0;
const inicio = "Mete un num";
const negativo = "El numero no puede ser negativo. ";

do {
    num = parseInt(prompt(inicio));
    if (num < 0) {
        alert(negativo);
        continue;
    } else {
        suma += num;
        //suma=suma+num;
    }
} while (num != 0);

alert(`La suma de los numeros introducidos es ${suma}.`);
//--------------------------------------------------------
/*while (num !== 0){
    num = parseInt(prompt(inicio));
    if (num < 0) {
        alert(negativo);
    } else {
        suma += num;
        //suma=suma+num;
    }
}
alert(`La suma de los numeros introducidos es ${suma}.`);*/
