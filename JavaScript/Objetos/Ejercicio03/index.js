
let num = {}



let num1 = parseInt(window.prompt(`Escribe un número`))

if (num1 < 100) {
    num.verde = num1
    document.getElementById("div1").style.color = "green";
    div1.innerHTML = num.verde
} else if (num1 >= 100 && num1 <= 200) {
    num.amarillo = num1
    document.getElementById("div1").style.color = "yellow";
    div1.innerHTML = num.amarillo
} else {
    num.rojo = num1
    document.getElementById("div1").style.color = "red";
    div1.innerHTML = num.rojo
}
