function registrarCliente() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const dni = document.getElementById("dni").value;

  const cliente = {
    nombre,
    apellido,
    dni,
  };
  fetch("/registro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cliente),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

function editarCliente() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const dni = document.getElementById("dni").value;

  const cliente = {
    nombre,
    apellido,
    dni,
  };

  fetch("/editarcliente", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cliente),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

function reservar() {
  const dni = document.getElementById("dniReserva").value;
  const numero = document.getElementById("numero").value;
  const checkin = document.getElementById("fechaCheckIn").value;
  const reserva = {
    dni,
    numero,
    checkin,
  };
  fetch("/checkin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reserva),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

function checkout() {
  const dni = document.getElementById("dniCheckOut").value;
  const checkout = document.getElementById("fechaCheckOut").value;

  const finReserva = {
    dni,
    checkout,
  };
  fetch("/checkout", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(finReserva),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
