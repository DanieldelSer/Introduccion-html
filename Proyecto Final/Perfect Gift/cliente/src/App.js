import { BrowserRouter, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';
import Login from "./Login";
import Main from "./Main";
import Register from "./Register";
import Event from "./Event";
import Msn from "./Msn";
import swal from 'sweetalert'



function App() {

  const [user, setUser] = useState([])
  const [logeado, setLogeado] = useState(false)

  ///////////////// Componente Login //////////////////////////////
  const login = (username, password) => {

    const userLogin = {
      username,
      password
    };
    console.log(userLogin);

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (datos) {
        if (datos.length > 0) {
          setUser(datos)
          console.log(datos[0].username);
          setLogeado(true)
        } else {
          errorAlert()
        }
      });
  };

  const errorAlert = () => {
    swal({
      text: "Usuario o contraseña incorrecto",
      icon: "warning",
      button: "Aceptar",
    });
  }

  const createAcountAlert = () => {
    swal({
      text: "Ese nombre de usuario ya existe",
      icon: "warning",
      button: "Aceptar",
    });
  };

  const registerUser = (usernameCreate, passwordCreate, email) => {

    const userCreate = {
      usernameCreate,
      passwordCreate,
      email
    };

    fetch("http://localhost:3000/users/newUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreate),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (datos) {
        if (datos === false) {
          createAcountAlert()
          console.log(datos);
          //alert("Ese nombre de usuario ya existe");
        } else {
          setUser(datos.ops)
          setLogeado(true)
        }
      });
  };

  const back = (info) => {
    setLogeado(false);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Login
            login={login}
            registerUser={registerUser}
            logeado={logeado}
          />
        </Route>
        <Route exact path="/Register">
          <Login />
          <Register />
        </Route>
        <Route exact path="/Main">
          <Main
            back={back}
            user={user}
            logeado={logeado}
          />
        </Route>
        <Route exact path="/Main/:event">
          <Event
            user={user}
            back={back}
          />
        </Route>
        <Route exact path="/msn">
          <Msn
            user={user}
            back={back}
          />
        </Route>
      </div>

    </BrowserRouter>
  );
}

export default App;
