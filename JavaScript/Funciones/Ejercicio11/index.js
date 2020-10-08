
let moneda;

function cambioMoneda(event) {
    //moneda = event.target.value;
    moneda = document.getElementById("cambio").value;
}

function cogerEuros() {
    cambioMoneda()
    let euros = parseFloat(document.getElementById("euros").value);
    cambio(euros, moneda);
}

function cambio(importe, moneda) {
    let divisa;
    switch (moneda) {
        case "libras":
            divisa = importe * 0.86;
            break;
        case "yenes":
            divisa = importe * 129.852;
            break;
        case "dolares":
            divisa = importe * 1.28611;
            break;
    }
    console.log(importe + "€" + " son " + divisa + moneda);
}