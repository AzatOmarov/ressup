import React from 'react';
import locale from '../../utils/locale';
import facebook from '../../assets/img/facebook.svg';
import instagram from '../../assets/img/instagram.svg';

export const t = (key, def = '') => locale(`Footer.${key}`, def);

function Footer(props) {
  return (
    <div className="container2">
      <div className="container2__social-media">
        <a href="https://www.facebook.com/groups/1458851604344781/" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/cats_of_instagram/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
      <div className="container2__established">
        <div className="policy">
          <p>Политика конфиденциальности</p>
          <p>Импрессум</p>
        </div>
        <p>
          <span className="copyright">
            <i className="fa fa-copyright" aria-hidden="true" />
          </span>
          {' '}
          2020 Ressup
        </p>
      </div>
    </div>
  );
}

export default Footer;
