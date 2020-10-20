
let persona = {
    nombre: "Daniel",
    edad: "37"
}
console.log(persona)

persona.altura = "1,70cm"

document.getElementById("div1").innerHTML = `
<p>${persona.nombre}</p>
<p>${persona.edad}</p>
<p>${persona.altura}</p>`