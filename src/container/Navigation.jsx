/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import logo from '../assets/img/logo.svg';
import deineMeinung from '../assets/img/mein.png';


function Navigation(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isQuestionarePage, setIsQuestionarePage] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/questionaire' && !props.isQuestionarePage) {
      setIsQuestionarePage(true);
      setIsAuthenticated(true);
      props.setIsQuestionarePage(true);
    }
    if (window.location.pathname !== '/questionaire') {
      setIsQuestionarePage(false);
      props.setIsQuestionarePage(false);
    }
  }, [props.isQuestionarePage, window.location.pathname, isQuestionarePage, userName, password]);

  const redirect = (to) => {
    const { location } = window;
    const { origin } = location;
    location.href = `${origin}/${to}`;
    if (to === 'questionaire') props.setIsQuestionarePage(true);
  };

  const authenticate = () => {
    if (userName && userName === 'admin' && password && password === 'ressup') {
      return true;
    }
    return false;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (authenticate()) setIsAuthenticated(true);
  };

  const formInput = (
    <div className="container">
      <div className="login">
        <p>Please enter your name and password below</p>
        <input
          type="text"
          name="userName"
          value={userName}
          placeholder="Name"
          onChange={(e) => {e.preventDefault(); setUserName(e.target.value)}}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => {e.preventDefault(); setPassword(e.target.value)}}
        />
        <button
          type="submit"
          label="submit"
          onClick={onSubmit}
        >
          submit
        </button>
      </div>
    </div>
  );

  return (
    isAuthenticated ? (
      <div className="container">
        <div className="navigation">
          <img src={logo} alt="logo" className="navigation__logo" onClick={() => redirect('')} role="button" />
          <Navbar>
            <div className={isHovered ? 'navigation-links-hovered' : 'navigation-links'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <Link to="/about" className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>О нас</Link>
              <Link to="/projects" className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>Наши проекты</Link>
              <Link to="/stories" className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>Истории</Link>
              <Link to="/join" className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>Участие</Link>
              <Link to="/contacts" className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>Контакты</Link>
              <Link to="/" />
            </div>
          </Navbar>
          {!isQuestionarePage ? (
            <div className="navigation__deineMeinung" role="link" onClick={(e) => { e.stopPropagation(); e.preventDefault(); redirect('questionaire'); }}>
              <img src={deineMeinung} alt="deineMeinung" />
            </div>
          ) : null}
        </div>
        {props.children}
      </div>
    ) : formInput
  );
}

export default Navigation;
