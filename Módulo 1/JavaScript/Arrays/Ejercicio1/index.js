
let array = [2, 5, 7, 8, 56, 14, 36, 456, 87, 125];
let mensaje = ""

for (let i = 0; i < array.length; i++) {
    mensaje += `<p>${array[i]}</p>`
}

document.getElementById("div1").innerHTML = mensaje