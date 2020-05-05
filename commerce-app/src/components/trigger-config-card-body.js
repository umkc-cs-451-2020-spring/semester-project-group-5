import React, {useEffect} from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from 'react-bootstrap';

export default function TriggerConfigCardBody(props) {
  const [bound, setBound] = props.boundState;
  const [isActive, setIsActive] = props.isActiveState;
  const [isChanged, setIsChanged] = props.isChangedState;

  function changeBound(newBound) {
    setBound(newBound.target.value);
    setIsChanged(true);
  }

  function unlockTrigger(event) {
    setIsActive(!isActive);
    setIsChanged(true);
  }

  useEffect(() => {
    props.setVars();
  },[]);

  function bounds() {
    return (
      <FormGroup as={Row}>
        <FormLabel column xs={2}>Boundary</FormLabel>
        <Col xs={10}>
          <FormControl
            disabled={!isActive}
            size='lg'
            type='text'
            value={bound}
            onChange={e => changeBound(e)}
          />
        </Col>
      </FormGroup>
    );
  }

  return (
    <Card.Body className='p-4'>
      <Form>
        {props.noBounds ? <div></div> : bounds() }
        <FormGroup as={Row}>
          <FormLabel column xs={2}>Active</FormLabel>
          <Col xs={10}>
            <label className='switch'>
              <input type='checkbox' checked={isActive} onChange={e => unlockTrigger(e)}/>
              <span class="slider round"></span>
            </label>
          </Col>
        </FormGroup>
        <Col xs={{span: 4, offset: 4}} >
            <Button block size='lg' disabled={!isChanged} onClick={props.onSubmit}>Update</Button>
        </Col>
      </Form>
    </Card.Body>
  );
}