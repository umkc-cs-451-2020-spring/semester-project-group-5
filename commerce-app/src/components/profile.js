import React, {useState, useEvent} from 'react';
import {
  Button,
  Card,
  Col,
  Row,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import userTracker from '../utils/user-tracker';
import UserInfo from './user-info';
import AccountProfile from './account-profile';
import './profile.css';
import { theFrontApi } from '../api';

export default function Profile() {
  return (
    <div className="Profile" >
      <div className='container'>
        <Card>
          <Card.Body>
            <ListGroup variant='flush'>
              <ListGroupItem className='py-5'>
                <UserInfo />
              </ListGroupItem>
              <ListGroupItem className='py-5'>
                <AccountProfile />
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}