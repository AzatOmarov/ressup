import React from 'react';
import { string, objectOf, object } from 'prop-types';


// const TimelineItem = ({ data }) => (
//   <div className="timeline-item">
//     <div className="timeline-item-content">
//       <span className="tag" style={{ background: '#018f69' }}>
//         medium
//       </span>
//       <time>{data.date}</time>
//       <p>{data.text}</p>
//       {data.link && (
//         <a
//           href={data.link.url}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {data.link.text}
//         </a>
//       )}
//       <span className="circle" />
//     </div>
//   </div>
// );

function TimelineItem(props) {
  const { data } = props;
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <time>{data.title}</time>
        <p>{data.text}</p>
        {data.link && (
          <a
            href={data.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.link.text}
          </a>
        )}
        <span className="circle" />
      </div>
    </div>
  );
}

TimelineItem.propTypes = {
  data: objectOf(object).isRequired,
};

export default TimelineItem;
