import React from 'react';
import locale from '../../utils/locale';
import facebook from '../../assets/img/facebook.svg';
import instagram from '../../assets/img/instagram.svg';
import { Link } from 'react-router-dom';
import CopyrightIcon from '@material-ui/icons/Copyright';

export const t = (key, def = '') => locale(`Footer.${key}`, def);


function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container__social-media">
        <a href="https://www.facebook.com/groups/1458851604344781/" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/cats_of_instagram/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
      <div className="footer-container__established">
        <div className="footer-links">
          <div className="footer-links__policy">Политика конфиденциальности</div>
          <div className="footer-links__impressum">
          <Link to="/impressum" 
          // className={isHovered ? 'navigation-links-hovered__link-item' : 'navigation-links__link-item'}
          >
            Импрессум</Link>
            {/* <a
              className="fill"
              href={'www.ya.ru'}
            >
              Импрессум
              </a> */}
          </div>
        </div>
        <div className="company">
          <CopyrightIcon color='inherit' className='mr-1' style={{color: '#232227'}} />
          <span className="company__name">2020 Ressup</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
