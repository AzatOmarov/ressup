import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Row, Col, Navbar,
} from 'reactstrap';
import logo from '../assets/img/logo.svg';


const Navigation = () => (
  <Container>
    <Row>
      <Col xs={12} sm={12} md={8} lg={8} style={{ float: 'right' }} />
      <Col xs={12} sm={12} md={4} lg={4} style={{ float: 'left' }}>
        <img src={logo} alt="logo" width="30%" />
      </Col>
    </Row>
    <Row className="navbar-row">
      <Navbar className="navbar-light bg-light">
        <div className="nav-links">
          <NavLink to="/" className="link">Home</NavLink>
          <NavLink to="/stories" className="link">Stories</NavLink>
          <NavLink to="/about" className="link">About</NavLink>
        </div>
      </Navbar>
    </Row>

  </Container>
);

export default Navigation;


// <Row>
//       <Col xs={12} sm={12} md={8} lg={8} style={{ float: 'right' }} />
//       <Col xs={12} sm={12} md={4} lg={4} style={{ float: 'left' }}>
//         <img src={logo} alt="logo" width="30%" />
//       </Col>
//     </Row>
//     <div className="container">
//       <ul className="nav nav-tabs">
//         <li className="nav-item">
//           <a href="#" className="nav-link active">Item One</a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav-link">Item Two</a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav-link">Item Three</a>
//         </li>
//       </ul>

//     </div>
