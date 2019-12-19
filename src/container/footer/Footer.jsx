import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import locale from '../../utils/locale';

export const t = (key, def = '') => locale(`Footer.${key}`, def);

const footer = (
  <>
    <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
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
  return (
    <footer>
      <Container fluid={!!props.fluid} style={{ maxWidth: '100%', paddingTop: '60px', paddingBottom: '60px' }}>
        <Row>
          <Col xs={12} sm={12} md={2} lg={2} style={{ paddingLeft: '4em' }}>
            <p style={{ paddingLeft: '0px' }}>{t('about')}</p>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">{t('aboutMedMee')}</a>
            <br />
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">{t('howWorks')}</a>

          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <Row>
              <Col style={{ paddingRight: '0px' }}>
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
          </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
