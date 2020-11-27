import { useState } from "react";


const Footer = (props) => {
    const [stock, setStock] = useState(props.stock);
    const borrarStock = () => {
        setStock(stock - 1);
    }
    if (stock > 0) {
        return (
            <div>
                <img src={props.img} alt="" />
                <h1>{props.titulo}</h1>
                <h2>Autor: {props.autor}</h2>
                <h3>Editorial: {props.editorial}</h3>
                <p>{props.descripcion}</p>
                <p>Stock: {stock}</p>
                <button onClick={borrarStock}>Comprar</button>
            </div>
        )} else {
        return (
            <div>
                <img src={props.img} alt="" />
                <h1>{props.titulo}</h1>
                <h2>Autor: {props.autor}</h2>
                <h3>Editorial: {props.editorial}</h3>
                <p>{props.descripcion}</p>
                <p>No quedan copias</p>
                <button onClick={borrarStock}>Comprar</button>
            </div>
        )};
};

export default Footer;