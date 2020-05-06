import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Login from './components/login';
import SignUp from './components/signup';
import Dashboard from './components/dashboard';
import Account from './components/account';
import AccountSettings from './components/account-settings';
import Profile from './components/profile';
import Notifications from './components/notifications';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Redirect} from 'react-router-dom';
import CommcerceNav from './components/navbar';
import userTracker from './utils/user-tracker';

function App() {
  let history = createBrowserHistory();
  const [user, setUser] = userTracker();

  const UnauthorizedRequest = () => {
    return (
      <div className="Error400" >
        Error 403: Whoa there Bud... I don't think you're supposed to be here
      </div>
    );
  }

  const ResourceNotFound = () => {
    return(
      <div classNmae="Error400" >
        Error 404: Not sure what you were looking for, but you won't find it here...
      </div>
    );
  }

  const PrivateRoute = ({component: Component, ...rest}) => (
    <Route render={(props) => {
      return (
      user()
        ? <Component {...props} />
        : <Redirect to='/login' />
     );
    }} />
  )

  return (
    <Router history={history}>
      <CommcerceNav/>
      <Switch>
        <Route path='/403' exact component={UnauthorizedRequest} />
        <Route path='/404' exact component={ResourceNotFound} />
        <Route path='/login' exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <PrivateRoute path="/notifications" component={Notifications}/>
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/account/:account_number" component={Account} />
        <PrivateRoute path="/account/:account_number/settings" component={AccountSettings} />
        <PrivateRoute path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
