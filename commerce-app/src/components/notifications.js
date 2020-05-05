import React, {useState, useEffect} from 'react';
import {
  Button,
  Card,
  Col,
  Row,
} from 'react-bootstrap';
import userTracker from '../utils/user-tracker';
import {theFrontApi} from '../api';
import './notifications.css';
import Axios from 'axios';

function NotificationCard(props) {
  return (
    <Card className='my-4'>
      <Card.Body>
        <Row>
          <Col xs={11}>
            <Card.Title>{props.notification.title}</Card.Title>
          </Col>
          <Col xs={1}>
            <Button onClick={props.onClick}>X</Button>
          </Col>
        </Row>
        {props.notification.message}
      </Card.Body>
    </Card>
  );
}

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [user, setUser] = userTracker();

  function renderCard(notification) {
    return (
      <NotificationCard
        notification={notification}
        onClick={() => setRead(notification.id)}
      />
    );
  }

  async function getNotifications() {
    let resp = await theFrontApi.getNotificationsWithParams(user().id, {read: false});
    setNotifications(resp.data.notifications);
  }

  function setRead(notificationID) {
    theFrontApi.updateNotification(user().id, notificationID, {read: true})
      .then(() => {
        window.location.reload();
      })
  }

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <div className='Notifications' >
      {notifications.map((notification) => renderCard(notification))}
    </div>
  );
}