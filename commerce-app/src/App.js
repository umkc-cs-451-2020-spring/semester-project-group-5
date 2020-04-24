import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Login from './components/login';
import SignUp from './components/signup';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
