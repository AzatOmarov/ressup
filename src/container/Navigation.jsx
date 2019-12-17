import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import logo from '../assets/img/logo.svg';


const Navigation = () => (
  <nav>
    <Row>
      <Col xs={12} sm={12} md={8} lg={8}>
        <div className="nav-links">
          <NavLink to="/" className="link">Home</NavLink>
          <NavLink to="/stories" className="link">Stories</NavLink>
          <NavLink to="/about" className="link">About</NavLink>
        </div>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4}>
        <img src={logo} alt="logo" width="30%" />
      </Col>

    </Row>
  </nav>
);

export default Navigation;
