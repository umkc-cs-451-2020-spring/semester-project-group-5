import React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Link } from  "react-router-dom";
import './login.css';

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            // value={email}
            // onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            // value={password}
            // onChange={e => setPassword(e.target.value)}
            type="password"
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