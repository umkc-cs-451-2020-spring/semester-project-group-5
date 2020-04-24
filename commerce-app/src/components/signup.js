import React from "react";
import { Button, FormGroup, FormControl, FormLabel, Row, Col } from "react-bootstrap";
import "./signup.css";

function handleSubmit(event) {
  event.preventDefault();
}

let STATES = [
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
  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
      <FormGroup controlId="email" bsSize="large" className="mb-4">
          {/* <FormLabel>Email</FormLabel> */}
          <FormControl
            type="email"
            placeholder="Email"
          />
        </FormGroup>
        <Row>
          <Col>
            <FormGroup controlId="firstName" bsSize="large" className="mb-4">
              {/* <FormLabel>First Name</FormLabel> */}
              <FormControl
                type="text"
                placeholder="First Name"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup controlId="lastName" bsSize="large" className="mb-4">
              {/* <FormLabel>Last Name</FormLabel> */}
              <FormControl
                type="text"
                placeholder="Last Name"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <FormGroup controlId="username" bsSize="large" className="mb-4">
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl
                autoFocus
                type="text"
                placeholder="Username"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormControl as="select">
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
          />
        </FormGroup>
        <FormGroup controlId="passwordConfirmation" bsSize="large" className="mb-4">
          {/* <FormLabel>Password Confirmation</FormLabel> */}
          <FormControl
            type="password"
            placeholder="Password Confirmation"
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