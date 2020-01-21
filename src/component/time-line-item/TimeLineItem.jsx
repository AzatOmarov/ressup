import React from 'react';
import { string, objectOf, object } from 'prop-types';


function TimelineItem(props) {
  const { data } = props;
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <time>{data.title}</time>
        <p>{data.text}</p>
        <span className="circle" />
      </div>
    </div>
  );
}

TimelineItem.propTypes = {
  data: objectOf(object).isRequired,
};

export default TimelineItem;
