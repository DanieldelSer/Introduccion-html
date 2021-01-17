import { Redirect } from "react-router-dom";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
//import './Login.css';

const Login = (props) => {

    const [mloginShow, setMloginShow] = useState(false);
    const [mpassShow, setMpassShow] = useState(false);


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameCreate, setUsernameCreate] = useState('');
    const [passwordCreate, setPasswordCreate] = useState('');
    const [email, setEmail] = useState('');


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

    if (props.logeado) {
        return <Redirect to="/Main" />
    } else {
        return (
            <>
                <div>
                    <div class="encabezado">
                        <div class="gris"><div className="text"><em>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </em></div></div>
                        <div class="orange"></div>
                    </div>
                    {/* <div className="background-diagonal"> */}
                    <div className="container">

                        <div className="centrar">
                            <div class="title">
                                <div class="title-word">Perfect</div>
                                <div class="title-word">Gift</div>
                            </div>
                            <div className=" ">
                                <button type="button" className="btn btn-outline-primary btn-lg naranja" data-toggle="modal" data-target="#modalLogin" onClick={() => setMloginShow(true)}>Iniciar Sesión</button>
                                <button type="button" className="btn btn-outline-primary btn-lg naranja" data-toggle="modal" data-target="#modalRegister" onClick={() => setMpassShow(true)}>Crear Cuenta</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Modal
                        size="sm"
                        show={mloginShow}
                        onHide={() => setMloginShow(false)}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header className="classModal">
                            <Modal.Title id="contained-modal-title-vcenter">
                                Iniciar Sesión
                                </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="classModal">
                            <input type="text" id="username" className="inputModal" onChange={manageChangeLogin} placeholder="Nombre de Usuario"></input>
                            <input type="password" id="password" className="inputModal" onChange={manageChangePass} placeholder="Contraseña"></input>
                            <button type="button" className="btn btn-outline-primary btn-lg naranjaModal" data-toggle="modal" data-target="#modalLogin" onClick={() => { props.login(username, password) }}>Iniciar Sesión</button>
                        </Modal.Body>
                    </Modal>
                </div>
                <div>
                    <Modal
                        size="sm"
                        show={mpassShow}
                        onHide={() => setMpassShow(false)}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header >
                            <Modal.Title id="contained-modal-title-vcenter">
                                Iniciar Sesión en Perfect Gift
                                    </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <input type="text" id="usernameCreate" placeholder="Nombre" onChange={manageChangeLoginCreate}></input>
                            <input type="text" id="email" placeholder="Email" onChange={manageChangeEmail}></input>
                            <input type="password" id="passwordCreate" placeholder="Contraseña" onChange={manageChangePassCreate}></input>
                            <button type="button" className="btn btn-outline-primary btn-lg naranjaModal" data-toggle="modal" onClick={() => { props.registerUser(usernameCreate, passwordCreate, email) }}>Crear Cuenta</button>
                        </Modal.Body>
                    </Modal>
                </div>
            </>
        )
    }
};

export default Login;