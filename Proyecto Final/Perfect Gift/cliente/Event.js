import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal'
import swal from 'sweetalert'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Carousel from 'react-elastic-carousel'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faChevronCircleRight, faGift, faUserFriends, faTrash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import moment from 'moment';

moment.locale('es');

const Event = (props) => {

    const { event } = useParams();
    console.log(props.user[0].username);
    const today = moment().format('YYYY-MM-DD');

    const [maddGuestShow, setMaddGuestShow] = useState(false);
    const [mcreateGiftShow, setMcreateGiftShow] = useState(false);

    const [data, setData] = useState([]);
    const [guests, setGuests] = useState([]);
    const [gifts, setGifts] = useState([]);

    const username = props.user[0].username;
    const [eventName, setEventName] = useState('');
    const [guestName, setGuestName] = useState('');
    const [guestEmail, setGuestEmail] = useState('');
    // const [guestAwardName, setGuestAwardName] = useState('');
    const [description, setDescription] = useState('');
    const [giftRank, setGiftRank] = useState('');
    const [giftPrice, setGiftPrice] = useState('');

    const eventGuest = {
        username,
        eventName,
        guestName,
        guestEmail
    };

    const sendEmail = {
        username,
        guestName,
        guestEmail
    };

    const newGift = {
        username,
        eventName,
        description,
        giftRank,
        giftPrice
    };

    const removeGift = {
        username,
        eventName
    };

    const removeGuest = {
        username,
        eventName
    };

    const newMsn = {
        username: guestName,
        guestName: username,
        userText: `Te ha invitado al evento ${event}`,
        today
    };

    useEffect(() => {
        fetch(`http://localhost:3000/events/${username}/${event}`)
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
                setData(res)
                setEventName(res[0].eventName)
            });
        fetch(`http://localhost:3000/guests/${username}/${event}`)
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
                console.log(res);
                setGuests(res)
            });
        fetch(`http://localhost:3000/gifts/${username}/${event}`)
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
                console.log(res);
                setGifts(res)
            });
    }, []);

    const deleteAlert = (_id, info) => {
        swal({
            title: "Eliminar",
            text: `Estás seguro que deseas eliminar este ${info}?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteGuest(_id)
                    deleteGift(_id)
                    swal(`El ${info} se ha eliminado con éxito`, {
                        icon: "success",
                        button: false,
                        timer: "1500"
                    });
                } else {
                    swal(`El ${info} no ha sido eliminado`, {
                        icon: "info",
                        button: false,
                        timer: "1500"
                    });
                }
            });
    };

    const createAlert = (info) => {
        swal(info, {
            icon: "success",
            button: false,
            timer: "1500"
        });
    }

    const manageChangeGuestName = (e) => {
        setGuestName(e.target.value);
    };
    const manageChangeGuestEmail = (e) => {
        setGuestEmail(e.target.value);
    };
    // const manageChangeGuestAwardName = (e) => {
    //     setGuestAwardName(e.target.value);
    // };
    const manageChangeGiftDescription = (e) => {
        setDescription(e.target.value);
    };
    const manageChangeGiftRank = (e) => {
        setGiftRank(e.target.value);
    };
    const manageChangeGiftPrice = (e) => {
        setGiftPrice(e.target.value);
    };

    const addGuest = () => {

        fetch("http://localhost:3000/guests/newGuest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(eventGuest),
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                if (datos === false) {
                    alert("Ese invitado ya está añadido");
                } else {
                    createAlert("Invitado");
                    //console.log(datos);
                    setMaddGuestShow(false)
                    setGuests(datos);
                    // fetch(`http://localhost:3000/send-email/`, {
                    //     method: "POST",
                    //     headers: {
                    //         "Content-Type": "application/json",
                    //     },
                    //     body: JSON.stringify(sendEmail),
                    // })
                    //     .then(function (res) {
                    //         return res.json();
                    //     })
                    //     .then(function (datos) {

                    //     })
                }
            });
    };

    const createGift = () => {

        fetch(`http://localhost:3000/gifts/newGift/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newGift),
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                if (datos === false) {
                    alert("El regalo ya esta creado");
                } else {
                    createAlert("Regalo Creado");
                    console.log(datos);
                    setGifts(datos);
                    setMcreateGiftShow(false)
                }
            });
    };
    const sendMsn = () => {

        fetch(`http://localhost:3000/msn/newMsn/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMsn),
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {

            });
    };

    const deleteGift = (_id) => {
        fetch(`http://localhost:3000/gifts/deleteGift/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(removeGift),
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                console.log(datos);
                setGifts(datos)
            });
    };

    const deleteGuest = (_id) => {
        fetch(`http://localhost:3000/guests/deleteGuest/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(removeGuest),
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                console.log(datos);
                setGuests(datos)
            });
    };

    const showEvent = data.map((eventPrint) => {
        return (
            <div className="username" key={eventPrint.eventName}>
                <h3>{eventPrint.eventName}</h3>
                <p><span>{eventPrint.description}</span></p>
                <p><span>{eventPrint.date}</span></p>
            </div>
        );
    });

    const showGuests = guests.map((guest) => {
        return (
            <item>
                <div className="tarjeta" key={guest.guestName}>
                    <div className="cabecera">
                        <div className="foto">
                            <FontAwesomeIcon icon={faUserFriends} size="3x" className="faPlus2" />
                        </div>
                        <div className="nombre">
                            <h3>{guest.guestName}</h3>
                        </div>
                    </div>
                    <div className="texto">
                        <p className="texto">Aceptar: <span>{guest.state}</span></p>
                    </div>
                    <div className="footer">
                        <div>
                            <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id={`tooltip-bottom`}>
                                        <strong>Eliminiar</strong>.
                                        </Tooltip>
                                }
                            >
                                <p variant="secondary"><FontAwesomeIcon icon={faTrash} size="2x" className="faPlus" onClick={() => { deleteAlert(guest._id, "invitado") }} style={{ color: '#C0C0C0' }} /></p>
                            </OverlayTrigger>
                        </div>
                    </div>
                    <hr></hr>
                </div>
            </item>
        );
    });

    const showGifts = gifts.map((gift) => {
        return (
            <item>
                <div className="tarjeta" key={gift.description}>
                    <div className="cabecera">
                        <div className="foto">
                            <FontAwesomeIcon icon={faGift} size="3x" className="faPlus2" />
                        </div>
                        <div className="nombre">
                            <h3>{gift.description}</h3>
                        </div>
                    </div>
                    <div className="texto">
                        <h5>Asignado: <span>{gift.state}</span></h5>
                        <p className="texto">Rango: <span>{gift.rank}</span></p>
                        <p className="texto">Precio: <span>{gift.price}€</span></p>
                    </div>
                    <div className="footer">
                        <div>
                            <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id={`tooltip-bottom`}>
                                        <strong>Eliminiar</strong>.
                                        </Tooltip>
                                } >
                                <p variant="secondary"><FontAwesomeIcon icon={faTrash} size="2x" className="faPlus" onClick={() => { deleteAlert(gift._id, "regalo") }} style={{ color: '#C0C0C0' }} /></p>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </item>
        );
    });

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link to={`/Main`}><div className="imgNav">
                            <img src="../LogoPG.png" alt="Perfect Gift"></img>
                        </div></Link>
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
                                            Añadir <strong>Invitado</strong>.
                                        </Tooltip>
                                    }
                                >
                                    <p variant="secondary"><FontAwesomeIcon icon={faUserFriends} size="3x" className="faPlus" onClick={() => setMaddGuestShow(true)} style={{ color: '#C0C0C0' }} /></p>
                                </OverlayTrigger>
                            </div>
                            <div>
                                <OverlayTrigger
                                    key='bottom'
                                    placement='bottom'
                                    overlay={
                                        <Tooltip id={`tooltip-bottom`}>
                                            Crear <strong>Regalo</strong>.
                                        </Tooltip>
                                    }
                                >
                                    <p variant="secondary"><FontAwesomeIcon icon={faGift} size="3x" className="faPlus" onClick={() => setMcreateGiftShow(true)} style={{ color: '#C0C0C0' }} /></p>
                                </OverlayTrigger>
                            </div>
                            <div>
                                <OverlayTrigger
                                    key='bottom'
                                    placement='bottom'
                                    overlay={
                                        <Tooltip id={`tooltip-bottom`}>
                                            <strong>Menú Principal</strong>.
                                        </Tooltip>
                                    }
                                >
                                    <Link to={`/Main`}><p variant="secondary"><FontAwesomeIcon icon={faChevronCircleRight} size="3x" className="faPlus" style={{ color: '#C0C0C0' }} /></p></Link>
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
            <div className="justify-content-center">
                {showEvent}
            </div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="justify-content-center">
                <Tab eventKey="profile" title="Invitados">
                    <div className="centrartab">
                        <hr></hr>
                        <h3 className="username">Invitados</h3>
                        <hr></hr>
                        <Carousel itemsToShow={3} itemPadding={[10, 50]}>
                            {showGuests}
                        </Carousel>
                        <hr></hr>
                    </div>
                </Tab>
                <Tab eventKey="home" title="Regalos">
                    <div className="centrartab">
                        <hr></hr>
                        <h3 className="username">Regalos</h3>
                        <hr></hr>
                        <Carousel itemsToShow={3} itemPadding={[10, 50]}>
                            {showGifts}
                        </Carousel>
                        <hr></hr>
                    </div>
                </Tab>
            </Tabs>
            <div className="justify-content-center">
                <Modal
                    size="sm"
                    show={maddGuestShow}
                    onHide={() => setMaddGuestShow(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <div>
                        <div className="login-box">
                            <h2>Añadir Invitado</h2>
                            <form>
                                <div className="user-box">
                                    <input type="text" onChange={manageChangeGuestName}></input>
                                    <label>Nombre del invitado</label>
                                </div>
                                <div className="user-box">
                                    <input type="text" onChange={manageChangeGuestEmail}></input>
                                    <label>Email del invitado</label>
                                </div>
                                <button type="button" className="btn btn-outline-primary btn-lg naranjaModal" data-toggle="modal" data-target="#modalLogin" onClick={() => { addGuest(); sendMsn(); }}>Añadir</button>
                            </form>
                        </div>
                    </div>
                </Modal>
                <Modal
                    size="sm"
                    show={mcreateGiftShow}
                    onHide={() => setMcreateGiftShow(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <div>
                        <div className="login-box">
                            <h2>Crear Regalo</h2>
                            <form>
                                {/* <div className="user-box">
                                    <input type="text" onChange={manageChangeGuestAwardName}></input>
                                    <label>Asignar regalo</label>
                                </div> */}
                                <div className="user-box">
                                    <input type="text" onChange={manageChangeGiftDescription}></input>
                                    <label>Nombre</label>
                                </div>
                                <div className="user-box">
                                    <input type="text" onChange={manageChangeGiftPrice}></input>
                                    <label>Precio</label>
                                </div>
                                <div className="user-box">
                                    <select className="user-box" onChange={manageChangeGiftRank}>
                                        <option>Nivel de importancia</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <button type="button" className="btn btn-outline-primary btn-lg naranjaModal" data-toggle="modal" data-target="#modalLogin" onClick={() => createGift()}>Crear</button>
                            </form>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
};


export default Event;