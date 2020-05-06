import React, {useState} from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Link, useHistory } from  "react-router-dom";
import { theFrontApi } from '../api';
import userTracker from '../utils/user-tracker';
import './login.css';

export default function Login(props) {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = userTracker();
  let history = useHistory();

  function invalidLoginAlert() {
    if (error) {
      return (
        <div className='alert alert-danger' role='alert'>
          Email or password is incorrect
        </div>
      );
    }
  }

  /* This function is absolutly disgusting, but hey, it works and with as little time
     we have left, that's all we can ask for
  */
  function handleSubmit(event) {
    event.preventDefault();

    theFrontApi.login({ email: email, password: password })
      .then((resp) => {
        if (resp.status == 201) {
          setUser(resp.data.user);
          history.push('/');
        }
      })
      .catch((error) => {
        if (error.response.status == 401) {
          setError(true);
          setEmail('');
          setPassword('');
        }
      });
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        {invalidLoginAlert()}
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button block bsSize="large" type="submit">
          Login
        </Button>
        <div block className="d-flex justify-content-center">
          <Link className="commerce-text" to="/signup">Create Account</Link>
        </div>
      </form>
    </div>
  );
}