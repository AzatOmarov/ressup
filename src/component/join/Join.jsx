import React from 'react';
import data from '../../staticData/join';

function Join() {
  const {
    title, description, cooperation, weLookingFor, messageUs,
    important,
  } = data;
  const importants = important.items.map((item, id) => <li className="people" key={id++}><span>{item}</span></li>);
  const people = weLookingFor.people.map((item, id) => <li className="people" key={id++}><span>{item}</span></li>);
  const email = <a href="mailto:contact@ressup.org">contact@ressup.org</a>;
  return (
    <div className="join">
      <h3>{title}</h3>
      <p className='mb-2'>{description}</p>
      <p className="weLookingFor-title">{weLookingFor.title}</p>
      <ul className='mb-2'>
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
        <h4 className='ml-2 mt-4'>
          {cooperation.title}
        </h4>
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
  );
}

export default Join;
