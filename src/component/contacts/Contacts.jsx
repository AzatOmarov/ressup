import React, { useState } from 'react';
import data from '../../staticData/contacts';


function Contacts() {
  const [message, setMessage] = useState('');
  const [contacts, setContacts] = useState('');
  const [company, setCompany] = useState('');
  const [isAgreed, setIsAgreed] = useState('');
  const [isAgreedCon, setIsAgreedCon] = useState('');

  const setIsAgreedConverted = (checked) => {
    if (checked) {
      setIsAgreedCon('cогласен');
    } else setIsAgreedCon('не согласен');
    setIsAgreed(checked);
  };

  const returnCheckBox = (name, cb, checked, label) => (
    <>
      <input
        type="checkbox"
        className="custom-control-input"
        name={name}
        id={name}
        onChange={(e) => { cb(e.target.checked); }}
        checked={checked}
      />
      <label className="custom-control-label" htmlFor={name}>{label}</label>
    </>
  );

  const onClick = () => {
    setTimeout(() => {
      setMessage('');
      setContacts('');
      setCompany('');
      setIsAgreed(false);
      setIsAgreedCon('');
    }, 2000);
  };


  return (
    <>
      <div className="contacts">
        <h3>{data.title}</h3>
        <p>{data.howToContactUs}</p>
        <span id="email">
          <a href="mailto:contact@ressup.org">{data.email}</a>
        </span>
        <p className="or">{data.or}</p>
        <div className="user-data">
          <p>{data.yourEmail}</p>
          <input
            value={contacts}
            name="contacts"
            onChange={(e) => setContacts(e.target.value)}
            className="landing__q-input"
            type="text"
          />

          <p>{data.yourName}</p>
          <input
            value={company}
            name="company"
            onChange={(e) => setCompany(e.target.value)}
            className="landing__q-input"
            type="text"
          />
          <p id="message-name">{data.yourMessage}</p>
          <textarea
            id="message-field"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="user-data__link">
            <div className="custom-control custom-checkbox">
              {returnCheckBox('isAgreed', setIsAgreedConverted, isAgreed, 'Согласие с политикой конфиденциальности')}
            </div>
            <div className="nextButton" onClick={(e) => onClick(e)}>
              <a
                className="fill"
                href={`mailto:contact@ressup.org?subject=&body=${message}%0D%0A%0D%0A${contacts}%0D%0A%0D%0A${company}%0D%0A%0D%0A Я ${isAgreedCon} с политикой конфиденциальности.`}
              >
                Отправить
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contacts;
