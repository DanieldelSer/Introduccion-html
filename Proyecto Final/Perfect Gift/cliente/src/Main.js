import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal'
import swal from 'sweetalert'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
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
                    swal(`El evento no ha sido modificado`, {
                        icon: "info",
                        button: false,
                        timer: "1500"
                    });
                }
            });
    };

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
                    alert("Evento creado con éxito");
                    setMcreateEventShow(false)
                    fetch(`http://localhost:3000/events/${username}`)
                        .then(function (res) {
                            return res.json();
                        })
                        .then(function (datos) {
                            console.log(datos)
                            setData(datos);
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
                setData(datos);
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

    useEffect(() => {
        fetch(`http://localhost:3000/events/${username}`)
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                console.log(datos)
                setData(datos);
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
                <div className="datos" key={event.eventName}>
                    <Link to={`/Main/${event.eventName}`}><h3><span>{event.eventName}</span></h3>
                        <p><span>{event.description}</span></p></Link>
                    <button type="button" className="btn btn-outline-danger btn-lg naranja" onClick={() => deleteAlert(event._id)}>Eliminar</button>
                    <hr></hr>
                </div>
            </item>
        );
    });

    const showGuestEvents = dataGuest.map((eventGuest) => {
        if (eventGuest.state === "Pendiente") {
            return (
                <item>
                    <div className="datos" key={eventGuest.eventName}>
                        <hr></hr>
                        <h3>Anfitrión: <span>{eventGuest.user}</span></h3>
                        <h5><span>{eventGuest.eventName}</span></h5>
                        <p>Invitación:<span>{eventGuest.state}</span></p>
                        <button type="button" className="btn btn-outline-primary btn-lg" onClick={() => decisionAlert(eventGuest._id, "Aceptar")}>Aceptar</button>
                        <button type="button" className="btn btn-outline-danger btn-lg" onClick={() => decisionAlert(eventGuest._id, "Rechazar")}>Rechazar</button>
                    </div>
                </item>
            );
        } else {
            return (
                <item>
                    <div className="datos" key={eventGuest.eventName}>
                        <hr></hr>
                        <h3>Anfitrión:<span>{eventGuest.user}</span></h3>
                        <h4><span>{eventGuest.eventName}</span></h4>
                        <p>Invitación:<span>{eventGuest.state}</span></p>
                    </div>
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
                    <div>
                        <h3>Mis Eventos</h3>
                        <hr></hr>
                        <Carousel itemsToShow={3}>
                            {showEvents}
                        </Carousel>
                    </div>
                </Tab>
                <Tab eventKey="home" title="Mis Invitaciones">
                    <div>
                        <h3>Mis Invitaciones</h3>
                        <Carousel itemsToShow={3}>
                            {showGuestEvents}
                        </Carousel>
                        <hr></hr>
                    </div>
                </Tab>
                <Tab eventKey="contact" title="Cuenta">
                    <h1>tab3</h1>
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
                                    <input type="text" id="description" onChange={manageChangeDescription}></input>
                                    <label>Descripción del evento</label>
                                </div>
                                <button type="button" className="btn btn-outline-primary btn-lg naranjaModal" data-toggle="modal" data-target="#modalLogin" onClick={createEvent}>Crear Evento</button>
                            </form>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
};

export default Main;