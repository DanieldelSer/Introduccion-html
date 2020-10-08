

function preguntarAnyo() {
    let anyo;
    do {
        anyo = parseInt(window.prompt("Escribe un año"));
        if ((anyo % 4 === 0 && anyo % 100 !== 0) || anyo % 400 === 0) {
            console.log(anyo + " es bisisesto");
            alert(anyo + " es bisisesto");
            document.getElementById("div1").innerHTML = anyo;
        } else {
            alert(anyo + " no es bisisesto");
            console.log(anyo + " no es bisisesto");
            document.getElementById("div1").innerHTML = anyo;
        }
    } while (anyo !== 0)
}

preguntarAnyo()