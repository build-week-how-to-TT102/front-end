import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//importing components
import Main from './Components/Main';
import Homepage from './Components/HomePage/Homepage'
import LogIn from './Components/LogIn';
//import SubmitPost from './Components/SubmitPost';

import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>

            <Route exact path={'/'}>
              <Main/> {/*Only routing, no props*/}
            </Route>

            <Route exact path={'/Homepage'}>
              <Homepage/> {/*Only routing, no props*/}
            </Route>

            <Route path={'/Login'}>
              <LogIn/>
            </Route>

            {/*<Route path={'/SubmitPost'}>
              <SubmitPost/>
              </Route>*/}

          </Switch>
        </Router>
      
      </div>
    </>
  );
}

export default App;
