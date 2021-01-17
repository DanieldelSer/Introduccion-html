import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal'
import swal from 'sweetalert'
import './App.css';

const Event = (props) => {

    const { event } = useParams();
    console.log(props.user[0].username);

    const [maddGuestShow, setMaddGuestShow] = useState(false);
    const [mcreateGiftShow, setMcreateGiftShow] = useState(false);

    const [data, setData] = useState([]);
    const [guests, setGuests] = useState([]);
    const [gifts, setGifts] = useState([]);

    const [username, setUsername] = useState(props.user[0].username);
    const [eventName, setEventName] = useState('');
    const [guestName, setGuestName] = useState('');
    const [guestEmail, setGuestEmail] = useState('');
    const [guestAwardName, setGuestAwardName] = useState('');
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
        guestAwardName,
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
    const manageChangeGuestAwardName = (e) => {
        setGuestAwardName(e.target.value);
    };
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
            <div className="datos" key={eventPrint.eventName}>
                <h3><span>{eventPrint.eventName}</span></h3>
                <p><span>{eventPrint.description}</span></p>
                <hr></hr>
            </div>
        );
    });

    const showGuests = guests.map((guest) => {
        return (
            <div className="datos" key={guest.guestName}>
                <h3><span>{guest.guestName}</span></h3>
                <p>Aceptar: <span>{guest.state}</span></p>
                <div className="mostrarMasEventosButton">
                    <button type="button" className="btn btn-outline-danger btn-lg" onClick={() => { deleteAlert(guest._id, "invitado") }}>Eliminar</button>
                </div>
                <hr></hr>
            </div>
        );
    });

    const showGifts = gifts.map((gift) => {
        return (
            <div className="datos" key={gift.description}>
                <h3><span>{gift.description}</span></h3>
                <h3>Asignado: <span>{gift.guestAwardName}</span></h3>
                <p>Rango: <span>{gift.rank}</span></p>
                <p>Precio: <span>{gift.price}€</span></p>
                <div className="mostrarMasEventosButton">
                    <button type="button" className="btn btn-outline-danger btn-lg" onClick={() => { deleteAlert(gift._id, "regalo") }}>Eliminar</button>
                </div>
                <hr></hr>
            </div>
        );
    });

    return (
        <>
            {showEvent}
            <div className="mostrarMasEventosButton">
                <button type="button" className="btn btn-outline-primary btn-lg" data-toggle="modal" data-target="#modalAddGuest" onClick={() => setMaddGuestShow(true)}>Añadir Invitado</button>
                <button type="button" className="btn btn-outline-primary btn-lg" data-toggle="modal" data-target="#modalCreateGift" onClick={() => setMcreateGiftShow(true)}>Crear Regalo</button>
                <hr></hr>
                <div className="events">
                    <div>
                        <h3>Invitados</h3>
                        <hr></hr>
                        {showGuests}
                    </div>
                    <div>
                        <h3>Regalos</h3>
                        <hr></hr>
                        {showGifts}
                    </div>
                </div>
                <Link to={`/Main`}><button type="button" className="btn btn-outline-primary btn-lg">Menú principal</button></Link>
                <Modal
                    size="sm"
                    show={maddGuestShow}
                    onHide={() => setMaddGuestShow(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header >
                        <Modal.Title id="contained-modal-title-vcenter">
                            Añadir Invitado
                                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" placeholder="Nombre del invitado" onChange={manageChangeGuestName}></input>
                        <input type="text" placeholder="Email del invitado" onChange={manageChangeGuestEmail}></input>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalAddGuest" onClick={() => addGuest()}>Añadir Invitado</button>
                    </Modal.Body>
                </Modal>
                <Modal
                    size="sm"
                    show={mcreateGiftShow}
                    onHide={() => setMcreateGiftShow(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header >
                        <Modal.Title id="contained-modal-title-vcenter">
                            Crear Regalo
                                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" placeholder="Asignar regalo" onChange={manageChangeGuestAwardName}></input>
                        <input type="text" placeholder="Descripcion" onChange={manageChangeGiftDescription}></input>
                        <select onChange={manageChangeGiftRank}>
                            <option>Nivel de importancia</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <input type="text" placeholder="Precio" onChange={manageChangeGiftPrice}></input>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalAddGuest" onClick={() => createGift()}>Crear Regalo</button>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
};


export default Event;