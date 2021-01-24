import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal'
import swal from 'sweetalert'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSignOutAlt, faCalendarAlt, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Carousel from 'react-elastic-carousel'
import React, { Component } from 'react';


const Main = (props) => {

    console.log(props.user[0].username);
    const [mcreateEventShow, setMcreateEventShow] = useState(false);
    const [data, setData] = useState([]);
    const [dataGuest, setDataGuest] = useState([]);

    const username = props.user[0].username;
    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');

    const [pass, setPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [repeatNewPass, setRepeatNewPass] = useState('');

    const event = {
        username,
        eventName,
        description
    };

    const removeEvent = {
        username,
    }

    const deleteAlert = (_id) => {
        swal({
            title: "Eliminar",
            text: "Estás seguro que deseas eliminar ese evento?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteEvent(_id)
                    swal("El evento se ha borrado con éxito", {
                        icon: "success",
                        button: false,
                        timer: "1500"
                    });
                } else {
                    swal("El evento no ha sido eliminado", {
                        icon: "info",
                        button: false,
                        timer: "1500"
                    });
                }
            });
    };

    const decisionAlert = (_id, decision) => {
        swal({
            title: decision,
            text: `Estás seguro que deseas ${decision} este evento?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    decisionEvent(_id, decision)
                    swal("El evento ha sido aceptado", {
                        icon: "success",
                        button: false,
                        timer: "1500"
                    });
                } else {
                    swal(`El ${decision} no ha sido modificado`, {
                        icon: "info",
                        button: false,
                        timer: "1500"
                    });
                }
            });
    };

    const createEventAlert = () => {
        swal({
            text: `Crear evento?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    createEvent()
                    swal("El evento ha sido creado", {
                        icon: "success",
                        button: false,
                        timer: "1500"
                    });
                } else {
                    swal(`El evento no ha sido creado`, {
                        icon: "info",
                        button: false,
                        timer: "1500"
                    });
                }
            });
    };

    const modifyPassAlert = () => {
        swal({
            text: `Modificar contraseña?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    changePass()
                    setPass('');
                    setNewPass('');
                    setRepeatNewPass('');
                    swal("La contraseña ha sido modificada", {
                        icon: "success",
                        button: false,
                        timer: "1500"
                    });
                } else {
                    swal(`La contraseña no ha sido modificada`, {
                        icon: "info",
                        button: false,
                        timer: "1500"
                    });
                }
            });
    };

    const errorAlert = () => {
        swal({
            text: "Las contraseñas no coinciden ",
            icon: "warning",
            button: "Aceptar",
        });
    }

    const createEvent = () => {

        fetch("http://localhost:3000/events/newEvent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(event),
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                if (datos === false) {
                    alert("Ese nombre de evento esta creado");
                } else {
                    setMcreateEventShow(false)
                    fetch(`http://localhost:3000/events/${username}`)
                        .then(function (res) {
                            return res.json();
                        })
                        .then(function (datos) {
                            console.log(datos)
                            setData(datos.reverse());
                        })
                }
            });
    };

    const deleteEvent = (_id) => {
        fetch(`http://localhost:3000/events/deleteEvent/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(removeEvent),
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                setData(datos.reverse());
                // setBoolean(!boolean)
            });
    };

    const decisionEvent = (_id, decision) => {
        const decisionGuest = {
            _id,
            username,
            decision
        };
        fetch(`http://localhost:3000/guests/decisionEvent`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(decisionGuest),
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                setDataGuest(datos);
            });
    };

    const changePass = () => {
        const password = {
            username,
            newPass
        };
        fetch(`http://localhost:3000/users/changepass`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(password),
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                setDataGuest(datos);
            });
    };

    useEffect(() => {
        fetch(`http://localhost:3000/events/${username}`)
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                console.log(datos.length)
                setData(datos.reverse());
            })
        fetch(`http://localhost:3000/guests/${username}`)
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                //console.log(datos);
                setDataGuest(datos);
            })
    }, [username]);

    //onClick={() => { deleteEvent(event._id) }}

    const showEvents = data.map((event) => {
        return (
            <item>
                <div className="tarjeta" key={event.eventName}>
                    <Link to={`/Main/${event.eventName}`}>
                        <div className="cabecera">
                            <div className="foto">
                                <FontAwesomeIcon icon={faCalendarAlt} size="3x" className="faPlus" />
                            </div>
                            <div className="nombre">
                                <h1>{event.eventName}</h1>
                            </div>
                        </div>
                        <div className="texto">
                            <p className="texto">{event.description}</p>
                        </div></Link>
                    <div className="footer">
                        <button type="button" className="btn btn-outline-danger btn-lg naranja" onClick={() => deleteAlert(event._id)}>Eliminar</button>
                    </div>
                </div>
                <hr></hr>
            </item >
        );
    });

    const showGuestEvents = dataGuest.map((eventGuest) => {
        if (eventGuest.state === "Pendiente") {
            return (
                <item>
                    <div className="tarjeta" key={eventGuest.eventName}>
                        <div className="cabecera">
                            <div className="foto">
                                <FontAwesomeIcon icon={faMailBulk} size="3x" className="faPlus2" />
                            </div>
                            <div className="nombre">
                                <h1>Anfitrión: {eventGuest.user}</h1>
                            </div>
                        </div>
                        <div className="texto">
                            <h3 className="texto">{eventGuest.eventName}</h3>
                            <p className="texto">Invitación: {eventGuest.state}</p>
                        </div>
                        <div className="footer">
                            <button type="button" className="btn btn-outline-primary btn-lg naranja" onClick={() => decisionAlert(eventGuest._id, "Aceptar")}>Aceptar</button>
                            <button type="button" className="btn btn-outline-danger btn-lg naranjaGris" onClick={() => decisionAlert(eventGuest._id, "Rechazar")}>Rechazar</button>
                        </div>
                    </div>
                    <hr></hr>
                </item>
            );
        } else {
            return (
                <item>
                    <div className="tarjeta" key={eventGuest.eventName}>
                        <div className="cabecera">
                            <div className="foto">
                                <FontAwesomeIcon icon={faMailBulk} size="3x" className="faPlus2" />
                            </div>
                            <div className="nombre">
                                <h1>Anfitrión: {eventGuest.user}</h1>
                            </div>
                        </div>
                        <div className="texto">
                            <h3 className="texto">{eventGuest.eventName}</h3>
                            <p className="texto">Invitación: {eventGuest.state}</p>
                        </div>
                    </div>
                    <hr></hr>
                </item>
            );
        }

    });

    const manageChangeEventName = (e) => {
        setEventName(e.target.value);
    };
    const manageChangeDescription = (e) => {
        setDescription(e.target.value);
    };
    const manageChangePass = (e) => {
        setPass(e.target.value);
    };
    const manageChangeNewPass = (e) => {
        setNewPass(e.target.value);
    };
    const manageChangeRepeatNewPass = (e) => {
        setRepeatNewPass(e.target.value);
    };

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <div>
                            <h1 className="username">{username}</h1>
                        </div>
                        <div className="navIcons">
                            <div>
                                <OverlayTrigger
                                    key='bottom'
                                    placement='bottom'
                                    overlay={
                                        <Tooltip id={`tooltip-bottom`}>
                                            Crear <strong>Evento</strong>.
                                        </Tooltip>
                                    }
                                >
                                    <p variant="secondary"><FontAwesomeIcon icon={faPlus} size="3x" className="faPlus" onClick={() => setMcreateEventShow(true)} style={{ color: '#C0C0C0' }} /></p>
                                </OverlayTrigger>
                            </div>
                            <div>
                                <OverlayTrigger
                                    key='bottom'
                                    placement='bottom'
                                    overlay={
                                        <Tooltip id={`tooltip-bottom`}>
                                            <strong>Salir</strong>.
                                        </Tooltip>
                                    }
                                >
                                    <Link to={`/`}><p variant="secondary"><FontAwesomeIcon icon={faSignOutAlt} size="3x" className="faPlus" onClick={() => { props.back() }} style={{ color: '#C0C0C0' }} /></p></Link>
                                </OverlayTrigger>
                            </div>
                        </div>
                    </ul>
                </nav>
            </header>
            <hr></hr>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="justify-content-center">
                <Tab eventKey="profile" title="Mis Eventos">
                    <div className="centrartab">
                        <hr></hr>
                        <h3 className="username">Mis Eventos</h3>
                        <hr></hr>
                        <Carousel itemsToShow={3} itemPadding={[10, 50]}>
                            {showEvents}
                        </Carousel>
                        <hr></hr>
                    </div>
                </Tab>
                <Tab eventKey="home" title="Mis Invitaciones">
                    <div className="centrartab">
                        <hr></hr>
                        <h3 className="username">Mis Invitaciones</h3>
                        <hr></hr>
                        <Carousel itemsToShow={3} itemPadding={[10, 50]}>
                            {showGuestEvents}
                        </Carousel>
                        <hr></hr>
                    </div>
                </Tab>
                <Tab eventKey="contact" title="Cuenta">
                    <div className="centrartab">
                        <hr></hr>
                        <h3 className="username">Modificar contraseña</h3>
                        <hr></hr>
                        <div className="tarjeta2">
                            <div className="cabecera2">
                                <label>Contraseña</label>
                                <input type="password" value={pass} onChange={manageChangePass}></input>
                                <label>Nueva contraseña</label>
                                <input type="password" value={newPass} onChange={manageChangeNewPass}></input>
                                <label>Repetir contraseña</label>
                                <input type="password"  value={repeatNewPass} onChange={manageChangeRepeatNewPass}></input>
                            </div>
                            <button type="button" className="btn btn-outline-danger btn-lg naranja" onClick={() => {
                                if (newPass === repeatNewPass) {
                                    modifyPassAlert();
                                } else {
                                    errorAlert();
                                }
                            }}>Modificar</button>
                        </div>
                    </div>
                </Tab>
            </Tabs>



            <div>
                <Modal
                    size="sm"
                    show={mcreateEventShow}
                    onHide={() => setMcreateEventShow(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    {/* <Modal.Body>
                        <input type="text" id="eventName" onChange={manageChangeEventName} placeholder="Nombre del evento"></input>
                        <input type="text" id="description" onChange={manageChangeDescription} placeholder="Descripción del evento"></input>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalCreateEvent" onClick={createEvent}>Crear Evento</button>
                    </Modal.Body> */}
                    <div>
                        <div className="login-box">
                            <h2>Crear Evento</h2>
                            <form>
                                <div className="user-box">
                                    <input type="text" id="eventName" onChange={manageChangeEventName} ></input>
                                    <label>Nombre del evento</label>
                                </div>
                                <div className="user-box">
                                    <textarea type="text area" id="description" onChange={manageChangeDescription}></textarea>
                                    <label>Descripción del evento</label>
                                </div>
                                <button type="button" className="btn btn-outline-primary btn-lg naranjaModal" data-toggle="modal" data-target="#modalLogin" onClick={() => createEventAlert()}>Crear Evento</button>
                            </form>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
};

export default Main;