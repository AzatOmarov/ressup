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

  // useEffect(() => {
  //   if (currentPage == 2) {
  //     document.getElementById('deineMeinung').style.display = 'block'
  //   } else {
  //     document.getElementById('deineMeinung').style.display = 'none'
  //   }
  // }, [currentPage]);

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
            <nav className='navbar'>
              <div className='navbar-nav'>
                <a
                  href="/about"
                  className='nav-item nav-link'
                  onClick={() => setCurrenPage('2')}>О нас</a>
                <a onClick={() => setCurrenPage('2')} href="/projects" className='nav-item nav-link'>Проекты</a>
                <a onClick={() => setCurrenPage('2')} href="/stories" className='nav-item nav-link'>Истории</a>
                <a onClick={() => setCurrenPage('2')} href="/join" className='nav-item nav-link'>Участие</a>
                <a onClick={() => setCurrenPage('2')} href="/contacts" className='nav-item nav-link'>Контакты</a>
                <a href="/" />
              </div>
              {/* {!isQuestionarePage ? (
                <div className="navigation__deineMeinung" role="link">
                  <Link to='/questionaire' onClick={() => setCurrenPage('1')}>
                    <img src={deineMeinung} alt="deineMeinung" id='deineMeinung' />
                  </Link>
                </div>
              ) : null} */}
              <div
                className="d-flex justify-content-center"
                style={{
                  left: '30px', color: '#232227', flex: '0 1 80%',
                }}
              >
                {children}
              </div>
          </nav>
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
