import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import login from './components/login';
import mainpage from './components/mainpage';


export default function App() {
  return (
    <div className="Site">
      <div className="Site-Content">
        <Router>
            <Switch>
                <Route exact path="/" component={login} />
                <Route exact path="/linkedin" component={LinkedInPopUp} />
                <Route exact path="/mainpage" component={mainpage} />
            </Switch>
        </Router>
    </div>
    <div className="Site-Footer" style={{marginTop: "5%"}}>
  </div>
</div>

  );
}

