import React from 'react';

import QAItem from '../../../component/time-line-item/QAItem';


const QALine = (props) => props.data[0].answersAndQuestions.length > 0 && (
<div className="timeline-container">
  {props.data[0].answersAndQuestions.map((data) => (
    <QAItem answer={data.answer} question={data.question} key={data.id} />
  ))}
</div>
);

export default QALine;
