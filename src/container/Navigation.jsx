import React, { useState, useEffect } from 'react';
import { string, bool, number } from 'prop-types';
import logo from '../assets/img/logo.svg';
import deineMeinung from '../assets/img/mein.png';
import Footer from './footer/Footer';

const paths = ['/', '/impressum', '/questionaire'];

function Navigation(props) {
  const { isQuestionarePage: nIsQuestionarePage, children } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isQuestionarePage, setIsQuestionarePage] = useState(false);
  const [currentPage, setCurrenPage] = useState('1');
  const [active, setActive] = useState(null);

  const { pathname } = props.history.location;

  useEffect(() => {
    const elm = document.getElementById('deineMeinung')
    if (currentPage == 2 && elm) {
      elm.style.display = 'block'
    }
    if (currentPage == 1 && elm) {
      elm.style.display = 'block'
    }
  }, [currentPage]);

  const authenticate = () => {
    if (userName && userName === 'admin' && password && password === 'ressup') {
      localStorage.setItem('isAdmin', true);
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
    isAuthenticated || localStorage.getItem('isAdmin') ? (
      <div id='main' className='container-fluid'>
        <div className='app'>

          <div>
            <div className='app__logo'>
              <a onClick={() => setActive('/')} href='/' >
                <img src={logo} alt="logo" style={{ zIndex: '1' }} role="button" className='img-fluid' />
              </a>
            </div>
          </div>

          <div className='app__wrapper'>
            <div className='app__wrapper__navigation'>
              <nav className='navbar pt-0 pl-0'>
                <ul className='navbar-nav'>
                  <li className='nav-item'><a onClick={() => setActive('about')} href="/about" className={`nav-link ${paths.some(i => i == pathname) ? 'inactive' : pathname == '/about' ? 'active' : ''}`}  >О нас</a></li>
                  <li className='nav-item'><a onClick={() => setActive('projects')} href="/projects" className={`nav-link ${paths.some(i => i == pathname) ? 'inactive' : pathname == '/projects' ? 'active' : ''}`} >Проекты</a></li>
                  <li className='nav-item'><a onClick={() => setActive('stories')} href="/stories" className={`nav-link ${paths.some(i => i == pathname) ? 'inactive' : pathname == '/stories' ? 'active' : ''}`} >Истории</a></li>
                  <li className='nav-item'><a onClick={() => setActive('join')} href="/join" className={`nav-link ${paths.some(i => i == pathname) ? 'inactive' : pathname == '/join' ? 'active' : ''}`} >Участие</a></li>
                  <li className='nav-item'><a onClick={() => setActive('contacts')} href="/contacts" className={`nav-link ${paths.some(i => i == pathname) ? 'inactive' : pathname == '/contacts' ? 'active' : ''}`} >Контакты</a></li>
                  {!isQuestionarePage ? (
                    <a href='/questionaire' onClick={() => setCurrenPage(1)} className='nav-item nav-link'>
                      <img src={deineMeinung} alt="deineMeinung" id='deineMeinung' />
                    </a>
                  ) : null}
                </ul>
              </nav>
            </div>
            <div className='app__wrapper__childs'>
              {children}
            </div>

          </div>
        </div>
        <div className='row'>
          <Footer />
        </div>

      </div>
    ) : formInput
  );
}

Navigation.propTypes = {
  nIsQuestionarePage: bool,
  description: string,
  index: number,
};


export default Navigation;
