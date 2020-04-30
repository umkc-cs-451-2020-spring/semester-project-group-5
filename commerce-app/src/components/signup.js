import React, {useState} from "react";
import { Button, FormGroup, FormControl, FormLabel, Row, Col } from "react-bootstrap";
import { useHistory } from  "react-router-dom";
import { theFrontApi } from '../api';
import "./signup.css";

const STATES = [
  "AK",
  "AL",
  "AR",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DC",
  "DE",
  "FL",
  "GA",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VA",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY"
]

function SignUp() {
  let history = useHistory();
  const [errors, setErrors] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  function renderFormErrors() {
    if (errors) {
      return(
        <div className='alert alert-danger' role='alert'>
          <ul>
            {Object.keys(errors).map(key => <li>{key + ': ' + errors[key][0]}</li> )}
          </ul>
        </div>
      )
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let payload = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      username: username,
      state: state,
      password: password,
      password_confirmation: passwordConfirmation,
    };

    theFrontApi.createUser(payload)
      .then((resp) => {
        if (resp.status === 201 ) {
          theFrontApi.login({email: email, password: password});
          history.push('/dashboard');
        }
      })
      .catch((error) => {
        if (error.response.status === 422){
          setEmail('');
          setFirstName('');
          setLastName('');
          setUsername('');
          setState('');
          setPassword('');
          setPasswordConfirmation('');
          
          setErrors(error.response.data.errors);
        }
      });
  }

  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
        {renderFormErrors()}
      <FormGroup controlId="email" bsSize="large" className="mb-4">
          {/* <FormLabel>Email</FormLabel> */}
          <FormControl
            autoFocus
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <Row>
          <Col>
            <FormGroup controlId="firstName" bsSize="large" className="mb-4">
              {/* <FormLabel>First Name</FormLabel> */}
              <FormControl
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup controlId="lastName" bsSize="large" className="mb-4">
              {/* <FormLabel>Last Name</FormLabel> */}
              <FormControl
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup controlId="username" bsSize="large" className="mb-4">
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormControl as="select" onChange={e => setState(e.target.value)}>
              <option selected dissabled>-- Select State --</option>
              { STATES.map(state => <option>{state}</option>) }
            </FormControl>
          </Col>
        </Row>
        <FormGroup controlId="password" bsSize="large" className="mb-4">
          {/* <FormLabel>Password</FormLabel> */}
          <FormControl
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="passwordConfirmation" bsSize="large" className="mb-4">
          {/* <FormLabel>Password Confirmation</FormLabel> */}
          <FormControl
            type="password"
            placeholder="Password Confirmation"
            value={passwordConfirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}
          />
        </FormGroup>
        <Button block bsSize="large" type="submit">
          Create Account
        </Button>
      </form>
    </div>
  );
}

export default SignUp;