import React from 'react';


const ProjectHeader = ({ data }) => (
  <>
    <h2>{data.title}</h2>
    <h4>{data.subTitle}</h4>
    <p>{data.text}</p>
  </>
);

export default ProjectHeader;
