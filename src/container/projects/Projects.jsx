import React from 'react';
import Carousel from 'nuka-carousel';
import QALine from './time-line/QALine';
import data from '../../staticData/projects';
import ProjectHeader from '../../component/project/header/Header';
import aima from '../../assets/img/aima.svg';
import azat from '../../assets/img/azat.svg';
import elvina from '../../assets/img/elvina.svg';
import irene from '../../assets/img/irene.svg';
import madina from '../../assets/img/madina.svg';
import marcel from '../../assets/img/marcel.svg';
import nurgul from '../../assets/img/nurgul.svg';
import saltanat from '../../assets/img/saltanat.svg';


function Projects() {
  // const team = teamMembers.map((member, index) => (
  //   <TeamMember member={member} />
  // ));
  return (
    <>
      <div className="projects">
        <div>
          <ProjectHeader data={data[0]} />
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
              // withoutControls="false"
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
export default Projects;
