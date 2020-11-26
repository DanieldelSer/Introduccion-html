import { useState } from "react";


const Main = (props) => {
    const [stock, setStock] = useState(props);
    const borrarStock = () => {
        setStock(stock-1);
    }
    return (
        <div>
            <img src={props.img} alt="" />
            <h1>{props.titulo}</h1>
            <h2>Autor: {props.autor}</h2>
            <h3>Editorial: {props.editorial}</h3>
            <p>{props.descripcion}</p>
            <p>Stock: {props.stock}</p>
            <button onClick={borrarStock}>Comprar</button>
        </div>
    );
};

export default Main;