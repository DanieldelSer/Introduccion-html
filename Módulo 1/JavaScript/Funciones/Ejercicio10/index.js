
let figura;

do {
    figura = prompt("Introduce la figura de la que deseas calcular su area.\n1.-Círculo: \'c\'\n2.-Cuadrado: \'q\'\n3.-Triángulo: \'t\'");
    switch (figura) {
        case "t":
            escribirResultado(calcularAreaTriangulo());
            break;
        case "c":
            escribirResultado(calcularAreaCirculo());
            break;
        case "q":
            escribirResultado(calcularAreaCuadrado());
            break;
        default:
            despedida();
            break;
    }

} while (figura.toLowerCase() == "t" || figura.toLowerCase() == "c" || figura.toLowerCase() == "q");

function calcularAreaTriangulo() {
    let base = prompt("Introduce la base del triángulo:");
    let altura = prompt("Introduce la altura del triángulo:");
    return parseInt((base * altura) / 2);
}

function calcularAreaCirculo() {
    let radio = prompt("Introduce el radio del círculo:");
    return parseInt(Math.pow(radio, 2) * Math.PI);
}

function calcularAreaCuadrado() {
    let lado = prompt("Introduce el lado del cuadrado:");
    return parseInt(Math.pow(lado, 2));
}

function escribirResultado(resultado) {
    alert(`El resultado es ${resultado}.`);
}

function despedida() {
    alert("Hasta luego!");
}