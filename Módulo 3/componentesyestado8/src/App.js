import { useState } from "react";
import './App.css';

function App() {
  let arrayBotones = [null, null, null, null, null, null, null, null, null];


  let [camBoton, setCamBoton] = useState(arrayBotones[0]);
  let [camBoton1, setCamBoton1] = useState(arrayBotones[1]);
  let [camBoton2, setCamBoton2] = useState(arrayBotones[2]);
  let [camBoton3, setCamBoton3] = useState(arrayBotones[3]);
  let [camBoton4, setCamBoton4] = useState(arrayBotones[4]);
  let [camBoton5, setCamBoton5] = useState(arrayBotones[5]);
  let [camBoton6, setCamBoton6] = useState(arrayBotones[6]);
  let [camBoton7, setCamBoton7] = useState(arrayBotones[7]);
  let [camBoton8, setCamBoton8] = useState(arrayBotones[8]);

  let [num, setNum] = useState(0);



  return (
    <div className="App">
      <h1>Movimientos: {num}</h1>

      <button onClick={() => {
        if (camBoton === "X" && camBoton1 === "X" && camBoton2 === "X") {
          alert("Jugador 1 ha ganado");
        } else {
          setNum(num + 1)
          if (camBoton === null) {
            if (num % 2 === 0) {
              camBoton = "X"
              return setCamBoton(camBoton = "X");
            } else {
              camBoton = "O";
              return setCamBoton(camBoton = "O");
            }
          }
        }
      }}>{camBoton}</button>

      <button onClick={() => {
        setNum(num + 1)
        if (camBoton1 === null) {
          if (num % 2 === 0) {
            camBoton1 = "X"
            return setCamBoton1(camBoton1 = "X");
          } else {
            camBoton1 = "O";
            return setCamBoton1(camBoton1 = "O");
          }
        }
      }}>{camBoton1}</button>

      <button onClick={() => {
        setNum(num + 1)
        if (camBoton2 === null) {
          if (num % 2 === 0) {
            camBoton2 = "X"
            return setCamBoton2(camBoton2 = "X");
          } else {
            camBoton2 = "O";
            return setCamBoton2(camBoton2 = "O");
          }
        }
      }}>{camBoton2}</button>

      <br></br>

      <button onClick={() => {
        setNum(num + 1)
        if (camBoton3 === null) {
          if (num % 2 === 0) {
            camBoton3 = "X"
            return setCamBoton3(camBoton3 = "X");
          } else {
            camBoton3 = "O";
            return setCamBoton3(camBoton3 = "O");
          }
        }
      }}>{camBoton3}</button>

      <button onClick={() => {
        setNum(num + 1)
        if (camBoton4 === null) {
          if (num % 2 === 0) {
            camBoton4 = "X"
            return setCamBoton4(camBoton4 = "X");
          } else {
            camBoton4 = "O";
            return setCamBoton4(camBoton4 = "O");
          }
        }
      }}>{camBoton4}</button>

      <button onClick={() => {
        setNum(num + 1)
        if (camBoton5 === null) {
          if (num % 2 === 0) {
            camBoton5 = "X"
            return setCamBoton5(camBoton5 = "X");
          } else {
            camBoton5 = "O";
            return setCamBoton5(camBoton5 = "O");
          }
        }
      }}>{camBoton5}</button>

      <br></br>

      <button onClick={() => {
        setNum(num + 1)
        if (camBoton6 === null) {
          if (num % 2 === 0) {
            camBoton6 = "X"
            return setCamBoton6(camBoton6 = "X");
          } else {
            camBoton6 = "O";
            return setCamBoton6(camBoton6 = "O");
          }
        }
      }}>{camBoton6}</button>

      <button onClick={() => {
        setNum(num + 1)
        if (camBoton7 === null) {
          if (num % 2 === 0) {
            camBoton7 = "X"
            return setCamBoton7(camBoton7 = "X");
          } else {
            camBoton7 = "O";
            return setCamBoton7(camBoton7 = "O");
          }
        }
      }}>{camBoton7}</button>

      <button onClick={() => {
        setNum(num + 1)
        if (camBoton8 === null) {
          if (num % 2 === 0) {
            camBoton8 = "X"
            return setCamBoton8(camBoton8 = "X");
          } else {
            camBoton8 = "O";
            return setCamBoton8(camBoton8 = "O");
          }
        }
      }}>{camBoton8}</button>
      <br></br>
      <button onClick={()=>{
        setNum(num=0)
        return (
               setCamBoton(camBoton = null),
               setCamBoton1(camBoton1 = null),
               setCamBoton2(camBoton2 = null),
               setCamBoton3(camBoton3 = null),
               setCamBoton4(camBoton4 = null),
               setCamBoton5(camBoton5 = null),
               setCamBoton6(camBoton6 = null),
               setCamBoton7(camBoton7 = null),
               setCamBoton8(camBoton8 = null)
        );
      }}>Volver a empezar</button>
    </div>
  );
}

export default App;
