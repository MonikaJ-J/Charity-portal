import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './scss/main.scss';
import Home from "./components/Home";
import Donate from "./components/Donate";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import Register from "./components/Register";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Start</Link>
            </li>
            <li>
              <Link to="/oddaj-rzeczy">Oddaj rzeczy</Link>
            </li>
            <li>
              <Link to="/logowanie">Zaloguj</Link>
            </li>
            <li>
              <Link to="/rejestracja">Załóż konto</Link>
            </li>
            <li>
              <Link to="/wylogowano">Wylogowano</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/oddaj-rzeczy" component={Donate}></Route>
          <Route path="/logowanie" component={LogIn}></Route>
          <Route path="/rejestracja" component={Register}></Route>
          <Route path="/wylogowano" component={LogOut}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
