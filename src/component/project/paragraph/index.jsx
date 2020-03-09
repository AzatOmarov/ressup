import React from 'react';
import { Link } from 'react-router-dom';
import { string, number } from 'prop-types';
import ogorod from '../../../assets/img/ogorod.svg';


export default function Paragraph(props) {
  const { title, description, index } = props;
  return (
    <div className="project-item">
      <img src={ogorod} alt="ogorod" className="project-item__image" />
      <h4 className="project-item__title">{title}</h4>
      <hr />
      <div className="project-item__text-and-button">
        <div className="description">{description}</div>
        <div className="nextButton">
          <Link to={`/projects/${index}`} className="fill">
            далее
          </Link>
        </div>
      </div>
    </div>
  );
}

Paragraph.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  index: number.isRequired,
};
