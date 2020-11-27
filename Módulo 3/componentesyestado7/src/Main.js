import { useState } from "react";

const Main = (props) => {
    const [tripulante, setTripulante] = useState(props.tripulantes);
    const sumarTripulane = () => {
        setTripulante(tripulante + 1);
    }
    return (
        <div>
            <h1>{props.nombre}</h1>
            <p>Eslora: {props.eslora}</p>
            <p>Tripulantes: {tripulante}</p>
            <button onClick={sumarTripulane}>Añadir Tripulante</button>
        </div>
    );
};

export default Main;