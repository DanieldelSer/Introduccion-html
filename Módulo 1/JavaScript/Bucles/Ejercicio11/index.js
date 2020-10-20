
let num = window.prompt("Escribe un numero")
let numAlReves = "";

for (let i = num.length; i > 0; i--) {
    numAlReves = numAlReves + num.substring(i, i-1)
}
console.log(numAlReves)