import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import login from './components/login';


export default function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className="Site">
      <div className="Site-Content">
        <Router>
            <Switch>
                <Route exact path="/" component={login} />
            </Switch>
        </Router>
    </div>
    <div className="Site-Footer" style={{marginTop: "5%"}}>
  </div>
</div>

  );
}

