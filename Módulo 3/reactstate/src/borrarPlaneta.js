
function Borrar (planeta){

    planeta.splice();
    return (<>
            <button onClick={Borrar}>Borrar Planeta</button>
            </>)
}

export default Borrar;