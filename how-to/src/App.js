import React from 'react';
import { BrowserRouter as Router, Route, Switch };
//importing components
import Main from './Components/Main';
import Login from './Components/Login';
import SubmitPost from './Components/SubmitPost';

import './App.css';

function App() {
  return (
    <>
      <h1>How-To</h1>
        <h2>Life Hacks</h2>
          <div className="App">
            <Router>
              <Switch>

                <Route exact path={'/'}>
                  <Main/> {/*Only routing, no props*/}
                </Route>

                <Route path={'/Login'}>
                  <Login/>
                </Route>

                <Route path={'/SubmitPost'}>
                  <SubmitPost/>
                </Route>

              </Switch>
            </Router>
          
          </div>
    </>
  );
}

export default App;
