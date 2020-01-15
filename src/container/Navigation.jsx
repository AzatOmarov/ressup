import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row, Col, Navbar,
} from 'reactstrap';
import logo from '../assets/img/logo.svg';

const Navigation = ({ children }) => (
  <div className="container">
    <div className="navigation">
      <img src={logo} alt="logo" className="navigation__logo" />
      <Navbar className="navbar-light bg-light">
        <div className="navigation-links" style={{ width: '-webkit-fill-available' }}>
          <Link to="/about" className="navigation-links__link-item">О Нас</Link>
          <Link to="/story-list" className="navigation-links__link-item">Наши Проекты</Link>
          <Link to="/story-list" className="navigation-links__link-item">Истории</Link>
          <Link to="/story-list" className="navigation-links__link-item">Опросник</Link>
          <Link to="/story-list" className="navigation-links__link-item">Контакты</Link>
          <Link to="/" className="navigation-links__link-item" />
        </div>
      </Navbar>

    </div>
    {children}

  </div>
);

export default Navigation;
