
// fetch("/productos")
//     .then(function (res) {
//         return res.json();
//     })
//     .then(function (datos) {
//         let mostrarMenu = "";
//         for (let i = 0; i < datos.menus.length; i++) {
//             mostrarMenu += `<option class="menu" value=${datos.menus[i].nombre}>${datos.menus[i].nombre}</option>`
//         };
//         document.getElementById("menu").innerHTML = mostrarMenu;
//         let mostrarHamburguesas = "";
//         for (let i = 0; i < datos.hamburguesas.length; i++) {
//             mostrarHamburguesas += `<option class="hamburguesa" value=${datos.hamburguesas[i].nombre}>${datos.hamburguesas[i].nombre}</option>`
//         };
//         document.getElementById("hamburguesa").innerHTML = mostrarHamburguesas;
//         let mostrarPatatas = "";
//         for (let i = 0; i < datos.patatas.length; i++) {
//             mostrarPatatas += `<option class="patata" value=${datos.patatas[i].nombre}>${datos.patatas[i].nombre}</option>`
//         };
//         document.getElementById("patata").innerHTML = mostrarPatatas;
//         let mostrarBebidas = "";
//         for (let i = 0; i < datos.bebidas.length; i++) {
//             mostrarBebidas += `<option class="bebida" value=${datos.bebidas[i].nombre}>${datos.bebidas[i].nombre}</option>`
//         };
//         document.getElementById("bebida").innerHTML = mostrarBebidas;
//     });

function pedirMenu() {
    fetch("/productos")
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            let mostrarMenu = "";
            for (let i = 0; i < datos.menus.length; i++) {
                mostrarMenu += `<option class="menu" value=${datos.menus[i].nombre}>${datos.menus[i].nombre}</option>`
            };
            document.getElementById("menu").innerHTML = mostrarMenu;
        })
}
