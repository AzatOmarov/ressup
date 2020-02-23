import React from 'react';
import data from '../../staticData/join';

function Join() {
  const {
    title, description, cooperation, weLookingFor, messageUs,
    important,
  } = data;
  const importants = important.items.map((item, id) => <li className="people"><span>{item}</span></li>);
  const people = weLookingFor.people.map((item, id) => <li className="people"><span>{item}</span></li>);
  const email = <a href="mailto:cooperation@ressup.org">cooperation@ressup.org</a>;
  return (
    <>
      <div className="join">
        <h4>{title}</h4>
        <p>{description}</p>
        <p className="weLookingFor-title">{weLookingFor.title}</p>
        <ul>
          {people}
        </ul>
        <p className="weLookingFor-message-us">{weLookingFor.messageUs}</p>
        <p className="important-title">{important.title}</p>
        <ul>
          {importants}
        </ul>
        <p className="message-us">
          {messageUs}
        </p>
        <div className="cooperation">
          <p className="cooperation-title">
            {cooperation.title}
          </p>
          <p className="cooperation-item">
            {cooperation.messageUs}
            {' '}
            {email}
          </p>
          <p className="cooperation-item">
            { cooperation.financialSupport }
          </p>
          <p className="bank-details">{cooperation.financialData[0]}</p>
          <p className="bank-details">{cooperation.financialData[1]}</p>
          <p className="bank-details">{cooperation.financialData[2]}</p>
        </div>

      </div>
    </>
  );
}

export default Join;
