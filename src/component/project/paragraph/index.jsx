import React from 'react';
import { Link } from 'react-router-dom';
import { string, func } from 'prop-types';
import ogorod from '../../../assets/img/ogorod.svg';


function Paragraph(props) {
  const {
    title, description, index, onClick,
  } = props;
  return (
    <div className="project-item">
      <img src={ogorod} alt="ogorod" className="project-item__image" />
      <h4 className="project-item__title">{title}</h4>
      <hr />
      <div className="project-item__text-and-button">
        <div className="description">{description}</div>
        <div className="nextButton" onClick={onClick}>
          <Link to={`/procs/${index}`} className="fill" />
          <p>далее</p>
        </div>
      </div>
    </div>
  );
}

Paragraph.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  index: string.isRequired,
  onClick: func.isRequired,
};

export default Paragraph;
