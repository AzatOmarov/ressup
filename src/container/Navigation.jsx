import React, { useState, useEffect } from 'react';
import { string, bool, number } from 'prop-types';
import logo from '../assets/img/logo.svg';
import deineMeinung from '../assets/img/mein.png';
import Footer from './footer/Footer';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';


const paths = ['/', '/impressum', '/questionaire'];

function Navigation(props) {
  const { isQuestionarePage: nIsQuestionarePage, children } = props;
  // const [isHovered, setIsHovered] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isQuestionarePage, setIsQuestionarePage] = useState(false);
  const [currentPage, setCurrenPage] = useState('1');
  const [pathname, setPathname] = useState('');


  useEffect(() => {
    const elm = document.getElementById('deineMeinung')
    if (currentPage == 2 && elm) {
      elm.style.display = 'block'
    }
    if (currentPage == 1 && elm) {
      elm.style.display = 'block'
    }
  }, [currentPage]);

  useEffect(() => {
      if(props.history.location.pathname !== pathname) setPathname(props.history.location.pathname);
  }, [props.history.location.pathname])

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
              <Link to='/' >
                <img src={logo} alt="logo" style={{ zIndex: '1' }} role="button" className='img-fluid' />
              </Link>
            </div>
          </div>

          <div className='app__wrapper'>
            <div className='app__wrapper__navigation'>
              <nav className='navbar pt-0 pl-0'>
                <ul className='navbar-nav'>
                  <li className='nav-item'><Link to="/about" className={`nav-link ${paths.some(i => i == pathname) ? 'inactive' : pathname == '/about' ? 'active' : ''}`}  >О нас</Link></li>
                  <li className='nav-item'><Link to="/projects" className={`nav-link ${paths.some(i => i == pathname) ? 'inactive' : pathname == '/projects' ? 'active' : ''}`} >Проекты</Link></li>
                  <li className='nav-item'><Link to="/stories" className={`nav-link ${paths.some(i => i == pathname) ? 'inactive' : pathname == '/stories' ? 'active' : ''}`} >Истории</Link></li>
                  <li className='nav-item'><Link to="/join" className={`nav-link ${paths.some(i => i == pathname) ? 'inactive' : pathname == '/join' ? 'active' : ''}`} >Участие</Link></li>
                  <li className='nav-item'><Link to="/contacts" className={`nav-link ${paths.some(i => i == pathname) ? 'inactive' : pathname == '/contacts' ? 'active' : ''}`} >Контакты</Link></li>
                  {!isQuestionarePage ? (
                    <Link to='/questionaire' onClick={() => setCurrenPage(1)} className='nav-item nav-link'>
                      <img src={deineMeinung} alt="deineMeinung" id='deineMeinung' />
                    </Link>
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


export default withRouter(Navigation);
