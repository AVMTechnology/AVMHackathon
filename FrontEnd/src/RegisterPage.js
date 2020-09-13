import React, { useState, useEffect } from 'react';
import {
  Link,
  useHistory,
} from "react-router-dom";
import axios from 'axios';

import logo from './logo.svg';
import './index.css';
import './loginPage.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header';

function RegisterPage() {
  let history = useHistory();

  const [_name, _setName] = useState('');
  const [_surname, _setSurname] = useState('');
  const [_login, _setLogin] = useState('');
  const [_password, _setPassword] = useState('');

  const handleChangeName = (e) => {
    const value = e.target.value;
    _setName(value);
  }

  const handleChangeSurname = (e) => {
    const value = e.target.value;
    _setSurname(value);
  }

  const handleChangeLogin = (e) => {
    const value = e.target.value;
    _setLogin(value);
  }

  const handleChangePassword = (e) => {
    const value = e.target.value;
    _setPassword(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.clear();

    const res = await axios({
      method: 'get',
      url: `https://avmtechnology.ru/Hackathon_deti/Register.php?Username=${_login}&Password=${_password}&Firstname=${_name}&Secondname=${_surname}`,
    })

    history.push("/login");

    console.log('DATA', res);
  }

  return (
    <div className="otherPage">
      <Container>
        <Header showMain={true} />

        <Row className='columnRow loginPageContent'>
          <Col xs={12}>
            <form className='form loginForm' onSubmit={handleSubmit}>
              <div className='formTitle'>Регистрация</div>

              <input type='text' className='input' placeholder='Имя' value={_name} onChange={handleChangeName} />
              <input type='text' className='input' placeholder='Фамилия' value={_surname} onChange={handleChangeSurname} />
              <input type='text' className='input' placeholder='Логин' value={_login} onChange={handleChangeLogin} />
              <input type='password' className='input' placeholder='Пароль' value={_password} onChange={handleChangePassword} />

              <input type='submit' className='enterBtn enterBtnSubmit' value='Зарегистрироваться' />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RegisterPage;
