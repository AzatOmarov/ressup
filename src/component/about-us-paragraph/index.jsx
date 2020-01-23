import React from 'react';


const Paragraph = ({ title, description }) => (
  <>
    <h4 className="title">{title}</h4>
    <p>{description}</p>
  </>
);

export default Paragraph;
