import Header from './component/Header/Header';
import React, { useState } from 'react';
import RegistrationForm from './component/RegistrationForm/RegistrationForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import RegistrationForm2 from './component/RegistrationForm/RegistrationForm2';
// import LoginForm from './component/Loginform/Loginform';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <RegistrationForm />
            </Route>
          </Switch>
          {/* <Header /> */}
      {/* <LoginForm/> */}
        </div>
      </div>
    </Router>
  )
}


export default App