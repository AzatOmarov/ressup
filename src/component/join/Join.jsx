import React from 'react';
import data from '../../staticData/join';

function Join() {
  const {
    title, description, whatWeNeed, tellYourStory, address, weLookingFor, messageUs, email,
  } = data;
  const importants = whatWeNeed.importants.map((item, id) => <li><span>{item}</span></li>);
  const people = weLookingFor.people.map((item, id) => <li><span>{item}</span></li>);
  const cooperation = <a href="mailto:cooperation@ressup.org">cooperation@ressup.org</a>;
  const at = <a href="mailto:story@ressup.org">story@ressup.org</a>;
  return (
    <>
      <div className="join">
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{whatWeNeed.title}</p>
        <ul>
          {importants}
        </ul>
        <p>
          {tellYourStory}
          {at}
          {address}
        </p>
        <p>{weLookingFor.title}</p>
        <ul>
          {people}
        </ul>
        <p>{weLookingFor.messageUs}</p>
        <p>
          {messageUs}
          {cooperation}
        </p>
      </div>
    </>
  );
}

export default Join;
