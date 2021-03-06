import React from 'react';
import aima from '../../assets/img/aima.svg';
import azat from '../../assets/img/azat.svg';
import elvina from '../../assets/img/elvina.svg';
import irene from '../../assets/img/irene.svg';
import madina from '../../assets/img/madina.svg';
import marcel from '../../assets/img/marcel.svg';
import nurgul from '../../assets/img/nurgul.svg';
import saltanat from '../../assets/img/saltanat.svg';

function returnImage(key) {
  switch (key) {
    case 'AS':
      return aima;
    case 'IS':
      return irene;
    case 'NK':
      return nurgul;
    case 'EC':
      return elvina;
    case 'MM':
      return madina;
    case 'SSH':
      return saltanat;
    case 'AO':
      return azat;
    case 'MK':
      return marcel;
    default:
      return azat;
  }
}

function TeamMember(props) {
  const { member: { name, text, photo } } = props;
  return (
    <>
      <div className="team-member" style={{color: 'black'}}>
        <div className="team-member__text">
          <h2>{name}</h2>
          <hr />
          <p>{text}</p>
        </div>
        <div className="team-member__image">
          <img src={returnImage(photo)} alt="personal" style={{minWidth: '10%', maxWidth: '70%' }} />
        </div>
      </div>
    </>
  );
}
export default TeamMember;
