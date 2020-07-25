import React from 'react';
import { objectOf, object } from 'prop-types';


function TimelineItem(props) {
  const { data: {title, text} } = props;
  const returnText = () => {
    const data2 = text.map((i, idx) => (
      <li key={idx}>
        {i}
      </li>
    ));
    return data2;
  };
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <h2>{title}</h2>
        <span className="circle" />
        <ul style={{width: '500px'}}>
          { returnText() }
        </ul>
      </div>
    </div>
  );
}

// TimelineItem.propTypes = {
//   data: objectOf(object).isRequired,
// };

export default TimelineItem;
