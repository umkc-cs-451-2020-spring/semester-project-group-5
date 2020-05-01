import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Login from './components/login';
import SignUp from './components/signup';
import Dashboard from './components/dashboard';
import Account from './components/account';
import CommcerceNav from './components/navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <CommcerceNav/>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/account" exact component={Account}/>
      </Switch>
    </Router>
  );
}

export default App;
