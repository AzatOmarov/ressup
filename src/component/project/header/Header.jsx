import React, { useState, useEffect } from 'react';
import { number } from 'prop-types';
import data from '../../../staticData/projects';


export default function ProjectHeader(props) {
  const { index: nIndex } = props;
  const [index, setIndex] = useState(0);
  const { title, subTitle, text } = data[index];
  useEffect(() => {
    setIndex(nIndex);
  }, [nIndex]);

  return (
    <>
      <h2>{title}</h2>
      <h4>{subTitle}</h4>
      <p>{text}</p>
    </>
  );
}

ProjectHeader.propTypes = {
  index: number.isRequired,
};
