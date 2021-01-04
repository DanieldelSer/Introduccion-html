import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Login from "./Login";
import Main from "./Main";
import Register from "./Register";
import Event from "./Event";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/Register">
          <Login />
          <Register />
        </Route>
        <Route exact path="/Main/:user">
          <Main
          //user={user} 
          />
        </Route>
        <Route exact path="/Main/:user/:event">
          <Event />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
