import React, {useState, useEffect} from 'react';
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
import { useHistory } from 'react-router-dom';
import renderSuccessfulPut from './render-success';
import TriggerConfigCardBody from './trigger-config-card-body';
import FormErrors from './form-errors';
import { theFrontApi } from '../api';

const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

export default function TriggerConfig(props) {
  const [bound, setBound] = useState();
  const [isActive, setIsActive] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [wasUpdated, setWasUpdated] = useState(false);
  const [errors, setErrors] = useState(false);
  
  function setVars() {
    // if trigger has an id, that means the trigger exists on the db
    if (props.trigger.id) {
      setBound(props.trigger.bound);
      setIsActive(true);
    }
  }

  function createOrUpdateTrigger() {
    if (props.trigger.id) {
      return theFrontApi.updateTrigger(props.trigger.id, {bound: bound});
    } else {
      let payload = {
        bound: bound,
        account_number: props.account_number,
        trigger_type: props.type
      }
      return theFrontApi.createTrigger(payload);
    }
  }

  function onSubmit() {
    let resp;
    if (isActive) {
      resp = createOrUpdateTrigger();
    } else {
      resp = theFrontApi.deleteTrigger(props.trigger.id);
    }

    // handle the response if it comes back successful, otherwise set the errors state
    resp
      .then((response) => {
        setWasUpdated(true);
        setIsChanged(false);
        setErrors(false);
      })
      .catch((error) => {
        setErrors(error.response.data);
      });
  }

  return (
    <div className='TriggerConfig'>
      {wasUpdated ? renderSuccessfulPut() : null}
      <FormErrors errors={errors} />
      <Card className='my-4'>
        <Card.Header>{props.title}</Card.Header>
        {props.isLoading ? 
          loadingMessage : 
          <TriggerConfigCardBody
            noBounds={props.noBounds}
            onSubmit={onSubmit}
            isActiveState={[isActive, setIsActive]}
            boundState={[bound, setBound]}
            isChangedState={[isChanged, setIsChanged]}
            setVars={setVars}
          />}
      </Card>
    </div>
  );
}