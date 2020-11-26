import { useState } from "react";
import sistemaSolar from './sistemasolar'

const Planetas = (props) => {
    // const [numPlaneta, setNumPlaneta] = useState(sistemaSolar)
    // function borrarPlaneta(num) {
    //      setNumPlaneta(numPlaneta.splice(num, num + 1))
    //  }
    return (
        <div key={props.nombre} className="card">
            <img src={props.imagen} alt="" />
            <h1>{props.nombre}</h1>
            <p>{props.color}</p>
            <p>{props.temperatura}</p>
            <button>Borrar</button>
        </div>
    );
};

export default Planetas;