import React from 'react';
import ogorod from '../../../assets/img/ogorod.svg';


const Paragraph = ({ title, description }) => (
  <>
    <img src={ogorod} alt="ogorod" />
    <h4 className="title">{title}</h4>
    <hr />
    <p>{description}</p>
    <div className="nextButton">
      <span className="nextButton__text">
            далее
      </span>
    </div>
  </>
);

export default Paragraph;
