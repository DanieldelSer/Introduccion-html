import { BrowserRouter, Link, Route, useParams } from "react-router-dom";
import { useState } from "react";
import './App.css';

const Operaciones = () => {
  let { num1 } = useParams();
  let { num2 } = useParams();
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  console.log(num1, num2);

  return (
    <>
      <p>{num1 + num2}</p>
      <p>{num1 - num2}</p>
      <p>{num1 * num2}</p>
      <p>{num1 / num2}</p>
      <p>{num1 % num2}</p>
    </>
  );
};

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const sumar1 = () => {
    setNum1(num1 + 1);
  };
  const restar1 = () => {
    setNum1(num1 - 1);
  };
  const sumar2 = () => {
    setNum2(num2 + 1);
  };
  const restar2 = () => {
    setNum2(num2 - 1);
  };

  return (
    <BrowserRouter>
      <p>{num1}</p>
      <button onClick={sumar1}>Sumar</button>
      <button onClick={restar1}>Restar</button>
      <p>{num2}</p>
      <button onClick={sumar2}>Sumar</button>
      <button onClick={restar2}>Restar</button>
      <Link to={`/operaciones/${num1}/${num2}`}>Operaciones</Link>
      <Route exact path="/operaciones/:num1/:num2">
        <Operaciones />
      </Route>
    </BrowserRouter>
  );

}

export default App;
