
let valor = 0;

let sumavalores= 0

do{
    valor=parseInt(window.prompt("introduce un numero"))
    if(valor < 0) {
        window.alert("Se ignoran valores negativos")
    }else {
        sumavalores = sumavalores + valor;
    }
}while(valor !==0)

console.log(`La suma de valores es ${sumavalores}`);