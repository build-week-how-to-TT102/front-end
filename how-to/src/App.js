import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//importing components
import Main from './Components/Main';
import Login from './Components/Login';
//import SubmitPost from './Components/SubmitPost';

import './App.css';
import Homepage from './Components/Homepage'

function App() {
  return (
<<<<<<< HEAD
    <>
      <div className="App">
        <Router>
          <Switch>

            <Route exact path={'/'}>
              <Main/> {/*Only routing, no props*/}
            </Route>

            <Route path={'/Login'}>
              <Login/>
            </Route>

            {/*<Route path={'/SubmitPost'}>
              <SubmitPost/>
              </Route>*/}

          </Switch>
        </Router>
      
      </div>
    </>
=======
    <div className="App">
      <Homepage />
    </div>
>>>>>>> e77736883c027f6746225387d9e61dd04eb0b430
  );
}

export default App;
