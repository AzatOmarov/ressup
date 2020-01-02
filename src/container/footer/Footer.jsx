import React from 'react';
import { Row, Col } from 'reactstrap';
import locale from '../../utils/locale';
import fityLinks from '../../utils/staticLinks';

export const t = (key, def = '') => locale(`Footer.${key}`, def);

const footer = (
  <>
    <div className="footer" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
      <Row style={{ paddingLeft: '10px' }}>
        <Col>
          <p style={{ paddingLeft: '0px' }}>{t('about')}</p>
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">{t('aboutMedMee')}</a>
          <br />
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">{t('howWorks')}</a>
        </Col>
        <Col>
          <p style={{ paddingLeft: '0px' }}>{t('legal')}</p>
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">{t('imprint')}</a>
          <br />
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">{t('privacy')}</a>
          <br />
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">{t('termsOfUse')}</a>
          <br />
        </Col>
        <Col style={{ paddingLeft: '0px' }}>
          <p style={{ paddingLeft: '0px' }}>{t('contacts')}</p>
          <a href="mailto:contact@medmee.co">{t('faq')}</a>
          <br />
          <a href="mailto:contact@medmee.co">{t('press')}</a>
        </Col>
      </Row>
    </div>
  </>
);

function Footer(props) {
  const { facebook, instagram } = fityLinks;
  return (
    <footer>
      <div className="container">
        <div className="container__social-media">
          <a href="google.com" target="_blank">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="google.com" target="_blank">
            <img src={instagram} alt="facebook" />
          </a>
        </div>
        <div className="container__established">
          <i className="fa fa-copyright" aria-hidden="true" />
          {' '}
          2019 Ressup
        </div>
      </div>
    </footer>
  );
}

export default Footer;
