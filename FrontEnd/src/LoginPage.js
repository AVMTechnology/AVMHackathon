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

function LoginPage() {
  let history = useHistory();

  const [_login, _setLogin] = useState('');
  const [_password, _setPassword] = useState('');

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


    let data = {
      login: _login,
      password: _password,
    }

    localStorage.clear();

    const res = await axios({
      method: 'get',
      url: `https://avmtechnology.ru/Hackathon_deti/Login.php?Username=${_login}&Password=${_password}`,
    })

    localStorage.setItem('user', JSON.stringify(res.data));

    history.push("/profile");
    
    console.log('res', res);

  }

  return (
    <div className="otherPage">
      <Container>
        <Header showMain={true} />

        <Row className='columnRow loginPageContent'>
          <Col xs={12}>
            <form className='form loginForm' onSubmit={handleSubmit}>
              <div className='formTitle'>Войти</div>

              <input type='text' className='input' placeholder='Логин' value={_login} onChange={handleChangeLogin} />
              <input type='password' className='input' placeholder='Пароль' value={_password} onChange={handleChangePassword} />

              <input type='submit' className='enterBtn enterBtnSubmit' value='Войти' />
              <Link className='registerLink' to='/register'>Зарегистрироваться</Link>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
