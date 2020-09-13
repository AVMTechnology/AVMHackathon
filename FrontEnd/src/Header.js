import React from 'react';
import {
  Link
} from "react-router-dom";

import logo from './logo.svg';
import person from './person.svg';
import './header.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header({ showMain, profile }) {
  return (
    <Row className='header'>
      <Col xs={3}><Link to='/'><img src={logo} className='logo' /></Link></Col>

      <Col xs={9} className='nav'>
        { !!showMain && (
          <Link className='navLink' to='/'>
            Главная
          </Link>
        )}

        <Link className='navLink' to='/'>
          Курсы
        </Link>

        <Link className='navLink' to='/'>
          О платформе
        </Link>

        <Link className='navLink' to='/'>
          Контакты
        </Link>

        { !!profile && (
          <Link className='navLink' to='/profile'>
            <img src={person} style={{ maxWidth: '25px' }} />
          </Link>
        )}
      </Col>
    </Row>
  );
}

export default Header;
