
let coche = {
    Color:"Rojo",
    Marca:"Ford",
    Modelo:"Focus",
    motor:{
        Cilindros:4,
        Capacidad:2.2
    }
}

document.getElementById("div1").innerHTML = `
<p>${coche.Color}</p>
<p>${coche.Marca}</p>
<p>${coche.Modelo}</p>
<p>Cilindros-${coche.motor.Cilindros}</p>
<p>Capacidad-${coche.motor.Capacidad}</p>`;