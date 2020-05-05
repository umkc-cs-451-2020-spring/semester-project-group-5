import React, {useState} from 'react';
import {
  Form,
  FormGroup,
  FormLabel, 
  FormControl,
  Col,
  Button
} from 'react-bootstrap';
import userTracker from '../utils/user-tracker';
import StatesOptions from './states';
import {theFrontApi} from '../api';
import renderSuccessfulPut from './render-success';
import FormErrors from './form-errors';

export default function UserInfo() {
  const [user, setUser] = userTracker();
  const [isChanged, setIsChanged] = useState(false);
  const [wasUpdated, setWasUpdated] = useState();
  const [errors, setErrors] = useState();
  const [email, setEmail] = useState(user().email);
  const [username, setUsername] = useState(user().username);
  const [state, setState] = useState(user().state);

  function changeAttribute(event, stateSetter) {
    stateSetter(event.target.value);
    setIsChanged(true);
  }

  function submitForm() {
    let payload = {
      email: email,
      username: username,
      state: state,
    };

    // This is gross, plz no judge
    theFrontApi.updateUser(user().id, payload)
      .then((resp) => {
        if (resp.status == 204) {
          setWasUpdated(true);
          setUser({...user(), ...payload});
          setIsChanged(false);
          setErrors(false);
        }
      })
      .catch((error) => {
        if (error.response.status === 422) {
          setErrors(error.response.data.errors);
        }
      });
  }

  return (
    <div className='PersonalInfo'>
    <h5>Personal Info</h5>
      {wasUpdated ? renderSuccessfulPut() : null}
      <FormErrors errors={errors}/>
      <Form className='mt-4'>
        <Form.Row className='mb-3'>
          <FormGroup as={Col} xs={12} md={6}>
            <FormLabel>First Name</FormLabel>
            <FormControl
              disabled
              size='lg'
              type='text'
              value={user().first_name}
            />
          </FormGroup>
          <FormGroup as={Col} xs={12} md={6}>
            <FormLabel>Last Name</FormLabel>
            <FormControl
              disabled
              size='lg'
              type='text'
              value={user().last_name}
            />
          </FormGroup>
        </Form.Row>
        <Form.Row className='mb-3'>
          <FormGroup as={Col} xs={12} md={6}>
            <FormLabel>Email</FormLabel>
            <FormControl
              size='lg'
              type='email'
              value={email}
              onChange={e => changeAttribute(e, setEmail)}
            />
          </FormGroup>
          <FormGroup as={Col} xs={12} md={6}>
            <FormLabel>Username</FormLabel>
            <FormControl
              size='lg'
              type='text'
              value={username}
              onChange={e => changeAttribute(e, setUsername)}
            />
          </FormGroup>
        </Form.Row>
        <Form.Row className='mb-3'>
          <FormGroup as={Col} xs={12} md={{span: 6}}>
            <FormLabel>State</FormLabel>
            <FormControl as='select' size='lg' onChange={e => changeAttribute(e, setState)}>
              <StatesOptions selected={user().state} />
            </FormControl>
          </FormGroup>
        </Form.Row>
        <Form.Row className='pt-2'>
          <Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 4}}>
            <Button disabled={!isChanged} onClick={submitForm} block size='lg'>Update</Button>
            {/* <Button block size='lg'>Update</Button> */}
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}