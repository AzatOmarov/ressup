import React from 'react';
import projects from '../../../staticData/projects';
import QAItem from '../../../component/time-line-item/QAItem';


const QALine = () => projects[0].answersAndQuestions.length > 0 && (
<div className="timeline-container">
  {projects[0].answersAndQuestions.map((data) => (
    <QAItem answer={data.answer} question={data.question} key={data.id} />
  ))}
</div>
);

export default QALine;
