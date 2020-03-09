import React from 'react';
import { number } from 'prop-types';
import Carousel from 'nuka-carousel';
import QALine from './time-line/QALine';
import ProjectHeader from '../../component/project/header/Header';
import aima from '../../assets/img/aima.svg';

import elvina from '../../assets/img/elvina.svg';
import irene from '../../assets/img/irene.svg';
import madina from '../../assets/img/madina.svg';
/* import azat from '../../assets/img/azat.svg';
import marcel from '../../assets/img/marcel.svg';
import nurgul from '../../assets/img/nurgul.svg';
import saltanat from '../../assets/img/saltanat.svg';
 */

export default function Project(props) {
  const { index } = props;
  return (
    <>
      <div className="projects">
        <div>
          <ProjectHeader index={index} />
          <QALine />
        </div>
        <div className="carousel">
          <div className="carousel__item">
            <Carousel
              transitionMode="fade"
              slidesToShow="1"
              slideWidth="500px"
              width="auto"
              cellAlign="center"
            >
              <img src={aima} alt="Ph" />
              <img src={irene} alt="Ph" />
              <img src={elvina} alt="Ph" />
              <img src={madina} alt="Ph" />
            </Carousel>
          </div>
        </div>

      </div>
    </>
  );
}

Project.propTypes = {
  index: number.isRequired,
};
