import React from 'react';


const Paragraph = ({ data }) => (
  <>
    <h4>{data.title}</h4>
    <p>{data.text}</p>
  </>
);

export default Paragraph;
