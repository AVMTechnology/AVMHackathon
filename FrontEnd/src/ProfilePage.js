import React, { useState, useEffect } from 'react';
import {
  Link,
  useHistory,
} from "react-router-dom";
import axios from 'axios';

import photo from './photo.png';
import cube from './cube.svg';
import './index.css';
import './profile.css';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header';

function ProfilePage() {
  let history = useHistory();

  const user = localStorage.getItem('user');
  const userParsed = JSON.parse(user);
  const firstname = !!userParsed.Firstname ? userParsed.Firstname : 'Имя';
  const secondname = !!userParsed.Secondname ? userParsed.Secondname : 'Фамилия';
  const score = !!userParsed.Score ? userParsed.Score : 159;

  console.log('user', JSON.parse(user));

  return (
    <div className="otherPage">
      <Container>
        <Header showMain={true} profile={true} />

        <div style={{ paddingTop: '4em' }}>
          <Row className='columnRow profileRow'>
            <Col xs={6}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
              }}>
                <img src={photo} style={{ maxWidth: '85px', marginRight: '22px' }} />
                <div className='bluetext'>{ `${firstname} ${secondname}` }</div>
              </div>
            </Col>

            <Col xs={6}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <div className='bluetext' style={{ marginRight: 20 }}>баллов: { score }</div>
                |
                <div style={{ marginLeft: 20 }}>Магазин</div>
              </div>
            </Col>
          </Row>

          <Row className='' style={{ justifyContent: 'space-between' }}>
            <Col xs={6} className='profileCol left'>
              <div className='interesy'>
                <div>
                  <div className='bluetext'>Мои интересы</div>

                  <div style={{ color: '#85878A', paddingTop: 10 }}>
                    <div style={{ marginBottom: '6px' }}>Робототехника</div>
                    <div style={{ marginBottom: '6px' }}>Конструирование</div>
                    <div>Программирование</div>
                  </div>
                </div>

                <img src={cube} />
              </div>
            </Col>

            <Col xs={6} className='profileCol right'>
              <div className='bluetext'>Мой курс</div>
              <div style={{ color: '#85878A', paddingTop: 10 }}>Пилот квадрокоптера</div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link className='enterBtn' to='/traectory' style={{ display: 'inline-flex', marginTop: '2em' }}>МОЯ ТРАЕКТОРИЯ</Link>
              </div>
            </Col>
          </Row>

          <Row className='columnRow profileRow' style={{ marginTop: '4em' }}>
            <Col xs={12}>
              <div className='bluetext'>Расписание</div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default ProfilePage;
