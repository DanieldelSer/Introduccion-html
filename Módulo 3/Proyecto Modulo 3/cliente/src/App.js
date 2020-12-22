import { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Main from "./Main";
// import Login from "./Login";
import CrearCategoria from "./CrearCategoria";
import CrearEvento from "./CrearEvento";
import BuscarEvento from "./BuscarEvento";
import ModificarEvento from "./ModificarEvento";


import UserContext from "./context/UserContext";

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const usuario = {
      username,
      password
  };
  
  const RegisterUser = () => {
      
      fetch("http://localhost:3000/usuarios/nuevoUsuario/", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
      })
      .then(function (res) {
          return res.json();
      })
      .then(function (datos) {
          if (datos === false) {
              alert("Ese nombre de usuario esta registrado");
          } else {
              alert("Registro realizado con éxito");
          }
      });
      
  };
  
  const login = () => {
      
      fetch("http://localhost:3000/usuarios", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
      })
      .then(function (res) {
          return res.json();
      })
      .then(function (datos) {
          console.log(datos);
          if (datos.length > 0) {
          } else {
              alert("Usuario o contraseña incorrecto")
          }
      });
      
  };
  
  const manageChangeLogin = (e) => {
      setUsername(e.target.value);
  };
  const manageChangePass = (e) => {
      setPassword(e.target.value);
  };
  
  return (
      <>
          <div id="container" key={username}>
              <h1>Remember Me</h1>
              <input type="hidden" id="userhidden"></input>
              <input type="hidden" id="_idhidden"></input>
              <div className="login-box" id="login-box">
                  <h2>Login</h2>

                  <div className="user-box">
                      <input type="text" id="username" onChange={manageChangeLogin}></input>
                      <label>Username</label>
                  </div>
                  <div className="user-box">
                      <input type="password" id="password" onChange={manageChangePass}></input>
                      <label>Password</label>
                  </div>
                  <div className="buttons">
                      <button onClick={login}><Link to="/Main">Login</Link></button>
                      <button onClick={RegisterUser}><Link to="/CrearCategoria">Registrarse</Link></button>
                  </div>
              </div>
          </div>
      </>
  )
};

function App() {

  const userData = {
    name: "Daniel"
  }


  return (
    <UserContext.Provider value={userData}>
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/main">
          <Main />
        </Route>
        <Route exact path="/crearcategoria">
          <CrearCategoria
            username="Daniel" />
        </Route>
        <Route exact path="/crearevento">
          <CrearEvento 
          username="Daniel"/>
        </Route>
        <Route exact path="/buscarevento">
          <BuscarEvento 
          username="Daniel"/>
        </Route>
        <Route exact path="/modificarevento">
          <ModificarEvento />
        </Route>
      </div>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
