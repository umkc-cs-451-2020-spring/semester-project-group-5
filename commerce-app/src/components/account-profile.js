import React, {useState, useEffect} from 'react';
import {
  Card,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import userTracker from '../utils/user-tracker';
import { theFrontApi }  from '../api';

function AccountCard(props) {
  return (
    <Card className='my-4'>
      <Card.Body className='p-4' style={{color: '#636363'}}>
        <Row>
          <Col>{`Account *****${props.account.account_number % 10_000}`}</Col>
          <Col className='text-center'>{props.account.name}</Col>
          <Col className='text-center'>Settings</Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default function AccountProfile(props){
  const [user, setUser] = userTracker();
  const [accounts, setAccounts] = useState([]);

  async function getAccounts() {
    let resp = await theFrontApi.getAccountIndex(user().id);
    setAccounts(resp.data.accounts);
  }

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <div className='AccountInfo' >
      <h5>Accounts</h5>
      <Row>
        <Col xs={{span: 3, offset: 9}}>
          <Button block size='lg'>Add Account</Button>
        </Col>
      </Row>
      {accounts.map((account) => <AccountCard account={account} />) }
    </div>
  );
}