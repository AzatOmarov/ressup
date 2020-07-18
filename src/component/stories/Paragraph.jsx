import React from 'react';
import { Link } from 'react-router-dom';
import { string, number } from 'prop-types';
import fonts from '../../assets/img/font-story/lorain.png';


export default function Paragraph(props) {
  const { title, description, index } = props;
  return (
    <div className="story">
      <div className="description">{description}</div>
      <img src={fonts} alt="ogorod" className="story__image" />
      <h4 className="description">{title}</h4>
      <hr />
      <div className="story__text-and-button">
        <div className="nextButton">
          <Link to={`/stories/${index}`} className="fill">
            далее
          </Link>
        </div>
      </div>
    </div>
  );
}

Paragraph.propTypes = {
  description: string.isRequired,
  index: number.isRequired,
};
