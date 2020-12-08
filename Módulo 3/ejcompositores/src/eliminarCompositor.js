import { useState } from "react";

const EliminarCompositor = (props) => {
    const [texto, setTexto] = useState('');
    // const manageChange
    const cambiarTexto = (e) => {
        setTexto(e.target.value);
    };
    const borrar = () => {
        props.borrarCompositor(texto)
    };
    return (
        <>
            <input type="text" value={texto} onChange={cambiarTexto} />
            <button onClick={borrar}>Borrar Compositor</button>
        </>

    )
};

export default EliminarCompositor;