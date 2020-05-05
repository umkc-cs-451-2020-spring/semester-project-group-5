import React, {useState, useEffect} from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  ListGroup,
  ListGroupItem,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from 'react-bootstrap';
import TriggerConfig from './trigger-config';
import FormErrors from './form-errors';
import renderSuccessfulPut from './render-success';
import userTracker from '../utils/user-tracker';
import './account-settings.css';
import { theFrontApi } from '../api';
import Account from './account';

const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

function AccountCardBody(props) {
  const [name, setName] = useState();
  const [user, setUser] = userTracker();
  const [isChanged, setIsChanged] = useState(false);

  function changeName(event) {
    setName(event.target.value);
    setIsChanged(true);
  }

  function updateAccount() {
    theFrontApi.updateAccount(user().id, { account_number: props.account.account_number, name: name})
      .then((resp) => {
        setIsChanged(false);
        props.setWasUpdated(true);
      })
      .catch((error) => {
        props.setErrors(error.response.data);
      })
  }

  useEffect(() => {
    setName(props.account.name);
  }, []);
  
  return (
    <Card.Body>
      <Form>
        <FormGroup>
          <FormLabel>Account Number</FormLabel>
          <FormControl 
            disabled
            size='lg'
            type='text'
            value={props.account.account_number}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Opened</FormLabel>
          <FormControl 
            disabled
            size='lg'
            type='date'
            value='2020-01-01'
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormControl
            size='lg'
            type='text'
            value={name}
            onChange={(e) => {changeName(e)}}
          />
        </FormGroup>
        <Col xs={{span: 4, offset: 4}}>
          <Button 
            disabled={!isChanged}
            block size='lg'
            onClick={updateAccount}
          >
              Update
          </Button>
        </Col>
      </Form>
    </Card.Body>
  );
}

function AccountConfig(props) {
  const [wasUpdated, setWasUpdated] = useState(false);
  const [errors, setErrors] = useState(false);

  return (
    <div className='AccountConfig' >
      {wasUpdated ? renderSuccessfulPut() : null}
      <FormErrors errors={errors} />
      <Card>
        {props.isLoading ?
        loadingMessage :
        <AccountCardBody
          account={props.account}
          setErrors={setErrors}
          setWasUpdated={setWasUpdated}
        />}
      </Card>
    </div>
  );
}

export default function AccountSettings(props) {
  const account_number = props.match.params.account_number;
  const [account, setAccount] = useState();
  const [user, setUser] = userTracker();
  const [accountIsLoading, setAccountIsLoading] = useState(true);
  const [triggersAreLoading, setTriggersAreLoading] = useState(true);
  const [lowAccountBalanceConfig, setLowAccountBalanceConfig] = useState({type: 'lowAccountBalanceTrigger'});
  const [largeWithdrawalConfig, setLargeWithdrawalConfig] = useState({type: 'largeWithdrawalTrigger'});
  const [outOfStateTransactionConfig, setOutOfStateTransactionConfig] = useState({type: 'outOfStateTransactionTrigger'});

  async function getAccount() {
    let resp = await theFrontApi.getAccount(user().id, {account_number: account_number});
    setAccount(resp.data);
    setAccountIsLoading(false);
  }

  // This function is horribly inefficient and there is definitly
  // better ways to do this, but I am running out of time and don't care
  async function getTriggerConfigs() {
    let payload = {account_number: account_number};
    let resp = await theFrontApi.getTriggers(payload);
    resp.data.triggers.forEach((trigger) => {
      switch(trigger.trigger_type) {
        case 'LowAccountBalanceTrigger':
          setLowAccountBalanceConfig(trigger);
          break;
        case 'LargeWithdrawalTrigger':
          setLargeWithdrawalConfig(trigger);
          break;
        case 'OutofStateTransactionTrigger':
          setOutOfStateTransactionConfig(trigger);
          break;
      }
    });
    setTriggersAreLoading(false);
  }

  useEffect(() => {
    getAccount();
    getTriggerConfigs();
  }, []);

  return (
    <div className='AccountSettings'>
      <div className='container'>
        <Card>
          <Card.Body>
            <ListGroup variant='flush'>
              <ListGroupItem className='py-5'>
                <AccountConfig account={account} isLoading={accountIsLoading}/>
              </ListGroupItem>
              <ListGroupItem className='py-5'>
                <TriggerConfig
                  type='LowAccountBalanceTrigger'
                  account_number={account_number}
                  trigger={lowAccountBalanceConfig}
                  isLoading={triggersAreLoading}
                  title='Low Account Balance'
                />
                <TriggerConfig
                  type='LargeWithdrawalTrigger'
                  account_number={account_number}
                  trigger={largeWithdrawalConfig}
                  isLoading={triggersAreLoading}
                  title='Large Withdrawal'
                />
                <TriggerConfig
                  type='OutofStateTransactionTrigger'
                  account_number={account_number}
                  trigger={outOfStateTransactionConfig}
                  isLoading={triggersAreLoading}
                  title='Out of State Transaction'
                  noBounds={true}
                />
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}