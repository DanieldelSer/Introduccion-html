import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const userLogin = {
        username,
        password
    };
    const [usernameCreate, setUsernameCreate] = useState('');
    const [passwordCreate, setPasswordCreate] = useState('');
    const [email, setEmail] = useState('');
    const userCreate = {
        usernameCreate,
        passwordCreate,
        email
    };

    const registerUser = () => {

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
            body: JSON.stringify(userLogin),
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
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
    const manageChangeLoginCreate = (e) => {
        setUsernameCreate(e.target.value);
    };
    const manageChangePassCreate = (e) => {
        setPasswordCreate(e.target.value);
    };
    const manageChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div>
            <input type="text" id="username" onChange={manageChangeLogin}></input>
            <input type="password" id="password" onChange={manageChangePass}></input>
            <Link to={`/Main/${username}`}><button onClick={login}>Login</button></Link>


            <div className="container">
                <div className="row"><div className="col align-self-center">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Crear Cuenta
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <input type="text" id="usernameCreate" placeholder="Nombre" onChange={manageChangeLoginCreate}></input>
                                    <input type="text" id="email" placeholder="Email" onChange={manageChangeEmail}></input>
                                    <input type="password" id="passwordCreate" placeholder="Contraseña" onChange={manageChangePassCreate}></input>
                                    <Link to={`/Main/${usernameCreate}`}><button onClick={registerUser}>Crear Cuenta</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Login;