import React from 'react';
import Link from '@material-ui/core/Link';
import { string, number } from 'prop-types';
import ogorod from '../../../assets/img/ogorod.svg';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';



export default function Paragraph(props) {
  const { title, description, index } = props;
  return (
    <div className="project-item">
      <img src={ogorod} alt="ogorod" className="project-item__image" />
      <h2 className="project-item__title">{title}</h2>
      <hr />
      <div className="project-item__text-and-button">
        <div className="description">
          <span>{description}</span><span>
            <a className='ml-1' href={`/projects/${index}`} rel="noopener noreferrer">
              {<OpenInNewIcon />}
            </a>
          </span>
        </div>

        {/* <div className="nextButton">
          <Link to={`/projects/${index}`} className="fill">
            далее
          </Link>
        </div> */}
      </div>
    </div>
  );
}

Paragraph.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  index: number.isRequired,
};
