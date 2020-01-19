import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row, Col, Navbar,
} from 'reactstrap';
import logo from '../assets/img/logo.svg';
import deineMeinung from '../assets/img/deineMeinung.svg';


class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,
    };
  }

  onMouseEnter = () => {
    this.setState({ isHovered: true });
  }

  onMouseLeave = () => {
    this.setState({ isHovered: false });
  }

  render() {
    const { isHovered } = this.state;
    console.info(this.state);
    return (
      <div className="container">
        <div className="navigation">
          <img src={logo} alt="logo" className="navigation__logo" />
          <Navbar>
            <div className={isHovered ? 'navigation-links-hovered' : 'navigation-links'} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
              <Link to="/about" className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>О нас</Link>
              <Link to="/projects" className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>Наши проекты</Link>
              <Link to="/story-list" className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>Истории</Link>
              {/* <Link to="/join" className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>Опросник</Link> */}
              <Link to="/join" className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>Участие</Link>
              <Link to="/contacts" className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>Контакты</Link>
              <Link to="/" />
            </div>
          </Navbar>
          <div className="navigation__deineMeinung">
            {/*
        TODO: add onClick button to redirect to Home
        */}
            <img src={deineMeinung} alt="deineMeinung" />
          </div>
        </div>
        {this.props.children}

      </div>
    );
  }
}

export default Navigation;
