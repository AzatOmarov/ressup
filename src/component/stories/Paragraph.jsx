import React from 'react';
import { string, number } from 'prop-types';
import fonts from '../../assets/img/font-story/lorain.svg';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';


export default function Paragraph(props) {
  const { title, description, index } = props;
  return (
    <div className="story">
      <div className="description">{description}</div>
      <div className='d-flex'>
        <img src={fonts} alt="ogorod" className="img-fluid" />
      </div>
      <h2 className="description">{title}</h2>
      <hr />
      <div className="story__text-and-button">
        <a className='ml-1' href={`/stories/${index}`} rel="noopener noreferrer">
          {<OpenInNewIcon />}
        </a>
        {/* <div className="nextButton">
          <Link to={`/stories/${index}`} className="fill">
            далее
          </Link>
        </div> */}
      </div>
    </div>
  );
}

Paragraph.propTypes = {
  description: string.isRequired,
  index: number.isRequired,
};
