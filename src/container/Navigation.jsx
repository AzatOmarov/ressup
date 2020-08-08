import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import { string, bool, number } from 'prop-types';
import logo from '../assets/img/logo.svg';
import deineMeinung from '../assets/img/mein.png';
import Footer from './footer/Footer';


function Navigation(props) {
  const { isQuestionarePage: nIsQuestionarePage, children } = props;
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
  }, [nIsQuestionarePage, window.location.pathname, isQuestionarePage, userName, password]);

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
          onChange={(e) => { e.preventDefault(); setUserName(e.target.value); }}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => { e.preventDefault(); setPassword(e.target.value); }}
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
    // isAuthenticated ? (
    <div id='main' className={"container-fluid"}>
      <div className="d-flex flex-column justify-content-between" style={{ flex: '1' }}>
        <div className="d-flex flex-wrap flex-column">
          
          <div className='d-flex align-self-start mb-4'>
            <img src={logo} alt="logo" style={{zIndex: '1'}} className='img-fluid ml-3 pl-1' onClick={() => redirect('')} role="button" />
          </div>

          <div className='d-flex ml-3 mr-3 flex-wrap justify-content-between'>
          <div className="navigation">
            <Navbar>
              <div className={isHovered ? 'navigation-links-hovered' : 'navigation-links'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <Link to="/about" onClick={() => localStorage.setItem('pathname', 'x')} className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>О нас</Link>
                <Link to="/projects" onClick={() => localStorage.setItem('pathname', 'x')} className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>Проекты</Link>
                <Link to="/stories" onClick={() => localStorage.setItem('pathname', 'x')} className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>Истории</Link>
                <Link to="/join" onClick={() => localStorage.setItem('pathname', 'x')} className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>Участие</Link>
                <Link to="/contacts" onClick={() => localStorage.setItem('pathname', 'x')} className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>Контакты</Link>
                <Link to="/" />
              </div>
            </Navbar>
            {!isQuestionarePage ? (
              <div className="navigation__deineMeinung" role="link" onClick={(e) => { e.stopPropagation(); e.preventDefault(); redirect('questionaire'); }}>
                <img src={deineMeinung} alt="deineMeinung" />
              </div>
            ) : null}
          </div>
          <div
            className="d-flex justify-content-center"
            style={{
              left: '30px', color: '#232227', flex: '0 1 86%',
            }}
          >
            {children}
          </div>
        </div>  
        </div>

        <Footer />
        
      </div>
    </div>
    // ) : formInput
  );
}

Navigation.propTypes = {
  nIsQuestionarePage: bool,
  description: string,
  index: number,
};


export default Navigation;
