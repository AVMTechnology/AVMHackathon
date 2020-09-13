import React, { useState, useEffect } from 'react';
import {
  Link,
  useHistory,
} from "react-router-dom";
import axios from 'axios';

import photo from './photo.png';
import traektoria from './traektoria.png';
import cube from './cube.svg';
import robot from './robot.png';
import './index.css';
import './profile.css';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

import Header from './Header';

function TraectoryPage() {
  let history = useHistory();

  const user = localStorage.getItem('user');
  const userParsed = JSON.parse(user);
  const score = !!userParsed.Score ? userParsed.Score : 159;
  const radio = !!userParsed.Radio ? userParsed.Radio : 33;
  const law = !!userParsed.Law ? userParsed.Law : 75;
  const control = !!userParsed.Control ? userParsed.Control : 63;
  const ux = !!userParsed.UX ? userParsed.UX : 85;
  const knowledge = !!userParsed.Knowledge ? userParsed.Knowledge : 85;

  console.log('userParsed', userParsed);

  return (
    <div className="otherPage">
      <Container>
        <Header showMain={true} profile={true} />

        <div style={{ paddingTop: '4em' }}>
          <Row className='' style={{ justifyContent: 'space-between' }}>
            <Col xs={5} className=''>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={robot} style={{ marginLeft: 25, maxWidth: '250px' }} />
                <div className='bluetext'>Робби</div>
              </div>
            </Col>

            <Col xs={7} className='profileCol right'>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div className='bluetext'>Достижения</div>
                <div className='bluetext'>баллы: { score }</div>
              </div>

              <div style={{ paddingTop: 15 }}>
                <ProgressBar now={radio} label={`Радиосвязь ${radio}%`} variant="custom" />
                <ProgressBar now={ux} label={`Состав устройства ${ux}%`} variant="custom" />
                <ProgressBar now={control} label={`Управление квадрокоптером ${control}%`} variant="custom" />
                <ProgressBar now={knowledge} label={`Программирование ${knowledge}%`} variant="custom" />
                <ProgressBar now={law} label={`Правовая информация ${law}%`} variant="custom" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <img
        src={traektoria}
        style={{
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '4em',
        }}
      />
    </div>
  );
}

export default TraectoryPage;
