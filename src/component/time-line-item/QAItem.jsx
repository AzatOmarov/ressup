import React from 'react';
import { string } from 'prop-types';

function QAItem(props) {
  const { question, answer } = props;
  return (
    <>
      <div className="qa-wrapper">
        <p className="qa-wrapper-left-item">
          <span className="qa-wrapper-left-item-content">
            {question}
          </span>
        </p>
        <span className="circle" />
        <p className="qa-wrapper-right-item">
          <span className="qa-wrapper-right-item-content">
            {answer}
          </span>
        </p>

      </div>
    </>
  );
}

QAItem.propTypes = {
  answer: string.isRequired,
  question: string.isRequired,
};

export default QAItem;
