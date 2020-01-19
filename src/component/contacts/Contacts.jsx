import React from 'react';
import data from '../../staticData/contacts';

const Contacts = () => (
  <>
    <div className="contacts">
      <h4>{data.title}</h4>
      <p>{data.description}</p>
      <p id="reg-number">
        Номер регистрации:
        {' '}
        {data.registrationNumber}
      </p>
      <span id="email">
        <a href="mailto:contact@ressup.org">{data.email}</a>
      </span>
    </div>
  </>
);

export default Contacts;
