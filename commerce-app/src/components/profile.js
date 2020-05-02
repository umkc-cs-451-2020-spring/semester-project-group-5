import React from 'react';
import {
  Button,
  Card,
  Form,
  FormGroup,
  FormLabel, 
  FormControl,
  Col,
  Row,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import './profile.css';

export default function Profile() {
  return (
    <div className="Profile" >
      <div className='container'>
        <Card>
          <Card.Body>
            <ListGroup variant='flush'>
              <ListGroupItem className='py-5'>
                <h5>Personal Info</h5>
                <Form className='mt-4'>
                  <Form.Row className='mb-3'>
                    <FormGroup as={Col} xs={12} md={6}>
                      <FormLabel>First Name</FormLabel>
                      <FormControl
                        disabled
                        size='lg'
                        type='text'
                        value='Michael'
                      />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} md={6}>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl
                        disabled
                        size='lg'
                        type='text'
                        value='Homer'
                      />
                    </FormGroup>
                  </Form.Row>
                  <Form.Row className='mb-3'>
                    <FormGroup as={Col} xs={12} md={6}>
                      <FormLabel>Email</FormLabel>
                      <FormControl
                        size='lg'
                        type='email'
                        value='yeet@yeet.com'
                      />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} md={6}>
                      <FormLabel>Username</FormLabel>
                      <FormControl
                        size='lg'
                        type='text'
                        value='mikel_homeless'
                      />
                    </FormGroup>
                  </Form.Row>
                  <Form.Row className='mb-3'>
                    <FormGroup as={Col} xs={12} md={{span: 6}}>
                      <FormLabel>State</FormLabel>
                      <FormControl as='select' size='lg'>
                      </FormControl>
                    </FormGroup>
                  </Form.Row>
                  <Form.Row className='pt-2'>
                    <Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 4}}>
                      <Button block size='lg'>Update</Button>
                    </Col>
                  </Form.Row>
                </Form>
              </ListGroupItem>
              <ListGroupItem className='py-5'>
                <h5>Accounts</h5>
                <Row>
                  <Col xs={{span: 3, offset: 9}}>
                    <Button block size='lg'>Add Account</Button>
                  </Col>
                </Row>
                <Card className='mt-4 mb-4'>
                  <Card.Body className='p-4' style={{color: '#636363'}}>
                    <Row>
                      <Col>Account *****3456</Col>
                      <Col className='text-center'>Primary Savings</Col>
                      <Col className='text-center'>Settings</Col>
                    </Row>
                  </Card.Body>
                </Card>
                <Card className='my-4'>
                  <Card.Body className='p-4' style={{color: '#636363'}}>
                    <Row>
                      <Col>Account *****3456</Col>
                      <Col className='text-center'>Primary Savings</Col>
                      <Col className='text-center'>Settings</Col>
                    </Row>
                  </Card.Body>
                </Card>
                <Card className='my-4'>
                  <Card.Body className='p-4' style={{color: '#636363'}}>
                    <Row>
                      <Col>Account *****3456</Col>
                      <Col className='text-center'>Primary Savings</Col>
                      <Col className='text-center'>Settings</Col>
                    </Row>
                  </Card.Body>
                </Card>
              </ListGroupItem>
              <ListGroupItem>

              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}