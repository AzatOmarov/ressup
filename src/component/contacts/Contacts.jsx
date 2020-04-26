import React from 'react';
import { Button } from 'reactstrap';
import data from '../../staticData/contacts';
import Footer from '../../container/footer/Footer';

const style = {
  bottom: '-56%',
};

const Contacts = () => (
  <>
    <div className="contacts">
      <h4>{data.title}</h4>
      <p>{data.howToContactUs}</p>
      <span id="email">
        <a href="mailto:contact@ressup.org">{data.email}</a>
      </span>
      <p className="or">{data.or}</p>
      <div className="user-data">
        <p>{data.yourEmail}</p>
        <input type="text" />
        <p>{data.yourName}</p>
        <input type="text" />
        <p id="message-name">{data.yourMessage}</p>
        <textarea id="message-field" type="text" />
        <Button
          type="submit"
          block
          size="sm"
          color="info"
        >
         Отправить
        </Button>
      </div>
    </div>
    <Footer style={style} />
  </>
);

export default Contacts;
