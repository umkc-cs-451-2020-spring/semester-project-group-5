import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Login from './components/login';
import SignUp from './components/signup';
import Dashboard from './components/dashboard';
import Account from './components/account';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        {/* <Route path='/dashboard' exact component={Dashboard} /> */}
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/account/:account_number" exact component={Account} />
        <Route path="/signup" exact component={SignUp} /> 
        <Route path="/" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
