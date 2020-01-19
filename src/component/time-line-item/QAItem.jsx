import React from 'react';
import { objectOf, object } from 'prop-types';

function QAItem(props) {
  const { data } = props;
  return (
    <>
      <div className="qa-wrapper">
        <p className="qa-wrapper-left-item">
          <span className="qa-wrapper-left-item-content">
            {data.question}
          </span>
        </p>
        <span className="circle" />
        <p className="qa-wrapper-right-item">
          <span className="qa-wrapper-right-item-content">
            {data.answer}
          </span>
        </p>

      </div>
    </>
  );
}

QAItem.propTypes = {
  data: objectOf(object).isRequired,
};

export default QAItem;
