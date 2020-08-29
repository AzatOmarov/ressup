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
  const [currentPage, setCurrenPage] = useState('1');

  useEffect(() => {
    if(currentPage == 2){
      document.getElementById('deineMeinung').style.display = 'block'
    } else {
      document.getElementById('deineMeinung').style.display = 'none'
    }
  }, [currentPage]);

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
            <Link to='/' onClick={() => setCurrenPage('2')}>
              <img src={logo} alt="logo" style={{ zIndex: '1' }} className='img-fluid ml-3 pl-1' role="button" />
            </Link>
          </div>

          <div className='d-flex ml-3 mr-3 flex-wrap justify-content-between'>
            <div className="navigation">
              <Navbar>
                <div className={isHovered ? 'navigation-links-hovered' : 'navigation-links'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                  <Link 
                  to="/about" 
                  className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}
                  onClick={() => setCurrenPage('2')}
                  >О нас</Link>
                  <Link onClick={() => setCurrenPage('2')} to="/projects" className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>Проекты</Link>
                  <Link onClick={() => setCurrenPage('2')} to="/stories" className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>Истории</Link>
                  <Link onClick={() => setCurrenPage('2')} to="/join" className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>Участие</Link>
                  <Link onClick={() => setCurrenPage('2')} to="/contacts" className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}>Контакты</Link>
                  <Link to="/" />
                </div>
              </Navbar>
              {!isQuestionarePage ? (
                <div className="navigation__deineMeinung" role="link">
                  <Link to='/questionaire' onClick={() => setCurrenPage('1')}>
                    <img src={deineMeinung} alt="deineMeinung" id='deineMeinung' />
                  </Link>
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
