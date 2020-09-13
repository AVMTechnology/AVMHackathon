import React from 'react';
import {
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './index.css';
import './mainPage.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header';

function MainPage() {
  return (
    <div className="main">
      <Container>
        <Header />

        <Row className='columnRow mainPageContainerText'>
          <Col xs={7}>
            <h1 className='title'>VR-платформа для выбора траектории обучения и учета успеваемости учащихся</h1>
          </Col>

          <Col xs={8}>
            <div className='subtitle'>Самарский областной центр детско-юношеского технического творчества.</div>
          </Col>

          <Col>
            <Link className='enterBtn' to='/login'>Войти</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainPage;
