import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Row, Col, Navbar,
} from 'reactstrap';
import logo from '../assets/img/logo.svg';

const Navigation = () => (
  <div className="container">

    <div className="navigation">
      <Row>
        <Col xs={12} sm={12} md={8} lg={8} style={{ float: 'right' }} />
        <Col xs={12} sm={12} md={4} lg={4} style={{ float: 'left' }}>
          <img src={logo} alt="logo" className="navigation__logo" />
        </Col>
      </Row>
      <Row className="navigation__menu">
        <Navbar className="navbar-light bg-light">
          <div className="navigation-links">
            <NavLink to="/" className="navigation-links__link-item">Домой</NavLink>
            <NavLink to="/stories" className="navigation-links__link-item">Наши Проекты</NavLink>
            <NavLink to="/about" className="navigation-links__link-item">О Нас</NavLink>
          </div>
        </Navbar>
      </Row>
    </div>

  </div>
);

export default Navigation;
