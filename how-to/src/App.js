import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//importing components
import Main from './Components/Main';
import Login from './Components/LogIn';
import Homepage from './Components/HomePage/Homepage.js'
import Register from "./Components/Register";
import SubmitPost from "./Components/SubmitPost";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={"/"}>
              <Main/>
            </Route>

            <Route path={'/homepage'}>
              <Homepage />
            </Route>

            <Route exact path={'/Homepage'}>
              <Homepage/> {/*Only routing, no props*/}
            </Route>

            <Route path={'/Login'}>
              <LogIn/>
            </Route>

            <Route path={'/register'}>
              <Register />
            </Route>

            <Route path={"/submit"}>
              <SubmitPost />
            </Route>

          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
