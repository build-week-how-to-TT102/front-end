import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//importing components
import Main from './Components/Main';
import Homepage from './Components/HomePage/Homepage.js'
import Register from "./Components/Register";
import SubmitPost from "./Components/SubmitPost";
import MyContextProvider from "./ContextAPI/MyContextProvider"
import Signin from "./Components/Signin"

import "./App.css";

function App() {
  const [id, setId] = useState("")

  return (
    <>
      <div className="App">
        
          <Router>
            <MyContextProvider.Provider value={{id, setId}}>
              <Switch>
                <Route exact path={"/"}>
                  <Main/>
                </Route>

                <Route path={'/homepage'}>
                  <Homepage />
                </Route>

                <Route path={'/Login'}> 
                  <Signin />
                </Route>

                <Route path={'/register'}>
                  <Register />
                </Route>

                <Route path={"/SubmitPost"}>
                  <SubmitPost />
                </Route>
                
              </Switch>
            </MyContextProvider.Provider>
          </Router>
          
      </div>
    </>
  );
}

export default App;

