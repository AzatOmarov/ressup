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
      userName: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onMouseEnter = () => {
    this.setState({ isHovered: true });
  }

  onMouseLeave = () => {
    this.setState({ isHovered: false });
  }

  redirectToLandingPage = () => {
    const { location } = window;
    const { origin } = location;
    location.href = `${origin}/`;
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { userName, password } = this.state;
  }

  isAuthenticated = () => {
    const { userName, password } = this.state;
    if (userName && userName === 'admin' && password && password === 'admin') {
      return true;
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  render() {
    const { isHovered, userName, password } = this.state;
    const isAuthenticatedUser = this.isAuthenticated();
    const formInput = (
      <div className="container">
        <div className="login">
          <p>Please enter your name and password below</p>
          <input
            type="name"
            name="userName"
            value={userName}
            placeholder="Name"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button
            type="submit"
            label="submit"
            onClick={this.onSubmit}
          >
          submit
          </button>
        </div>
      </div>
    );

    return (
      <div className="container">
        { isAuthenticatedUser ? (
          <div className="container">
            <div className="navigation">
              <img src={logo} alt="logo" className="navigation__logo" onClick={this.redirectToLandingPage} />
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
                <img src={deineMeinung} alt="deineMeinung" />
              </div>
            </div>
    );
            { this.props.children }
          </div>
        ) : formInput }
      </div>
    );
  }
}

export default Navigation;
