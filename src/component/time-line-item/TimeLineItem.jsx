import React from 'react';
import { objectOf, object } from 'prop-types';


function TimelineItem(props) {
  const { data } = props;
  const returnText = () => {
    const data2 = data.text.map((i) => (
      <li>
        {i}
      </li>
    ));
    return data2;
  };
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <div className='title'>{data.title}</div>
        <span className="circle" />
        <ul>
          { returnText() }
        </ul>
      </div>
    </div>
  );
}

TimelineItem.propTypes = {
  data: objectOf(object).isRequired,
};

export default TimelineItem;
