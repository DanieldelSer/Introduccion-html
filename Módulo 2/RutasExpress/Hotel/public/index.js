
function registrarCliente() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const cliente = {
        nombre,
        apellido,
        dni
    };

    fetch("/clientes/nuevoCliente/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            console.log(datos);
        });
}

function editarCliente() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const cliente = {
        nombre,
        apellido,
        dni
    };
    fetch("/clientes/editarCliente/", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            console.log(datos);
        });
}

function reservar() {
    document.getElementById("reservas").innerHTML = "";
    const dni = document.getElementById("dni").value;
    fetch(`/clientes/${dni}`)
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            if (datos.length === 0) {
                alert(`El cliente no está registrado ${dni}`);
            } else {
                const numero = document.getElementById("habitaciones").value;
                fetch(`/habitaciones/${numero}`)
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function (datos) {
                        if (datos[0].estado === "ocupada") {
                            alert(`La habitación ${numero} está ocupada`)
                        } else {
                            reservarHabitacion();
                            mostrarReservas();
                        }
                    })
            }
        });
}

let numeroHabitacion = "";

function mostrarHabitacion() {
    const dni1 = document.getElementById("dni").value;
    fetch(`/reservas/${dni1}`)
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            numeroHabitacion = datos[0].numero;
        });
}

function mostrarReservas() {
    fetch("/reservas")
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            let mostrar = "";
            for (let i = 0; i < datos.length; i++) {
                mostrar += `
        <div>
            <p>Nombre: ${datos[i].nombre}</p>
            <p>Apellido: ${datos[i].apellido}</p>
            <p>DNI: ${datos[i].dni}</p>
            <p>Nº de Habitación: ${datos[i].numero}</p>
            <p>fecha Check In: ${datos[i].fechaCheckIn}</p>
            <p>fecha Check Out: ${datos[i].fechaCheckOut}</p>
            <hr>
        </div>
        `;
            }
            document.getElementById("reservas").innerHTML = mostrar;
        });
}

function checkOut() {
    const dni = document.getElementById("dni").value;
    let hoy = new Date();
    hoy = hoy.getFullYear().toString() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getDate();
    const finReserva = {
        dni,
        hoy
    }
    let objOutHabitacion = {
        numeroHabitacion
    }
    fetch("/reservas/editarReserva", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(finReserva),
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            mostrarReservas();
        });
    fetch("/habitaciones/checkOutHabitacion", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(objOutHabitacion),
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            return datos;
        });
}

function salir(){
    mostrarHabitacion();
    checkOut();
}

function reservarHabitacion() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const numero = document.getElementById("habitaciones").value;
    const fechaCheckIn = document.getElementById("fechaCheckIn").value;
    const fechaCheckOut = document.getElementById("fechaCheckOut").value;
    const reserva = {
        nombre,
        apellido,
        dni,
        numero,
        fechaCheckIn,
        fechaCheckOut
    };
    const objInHabitacion = {
        numero
    }

    fetch("/reservas/nuevaReserva", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reserva),
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            return datos;
        });
    fetch("/habitaciones/checkInHabitacion", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(objInHabitacion),
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            return datos;
        });
}