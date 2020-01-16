import React, { Fragment } from 'react';
import Timeline from '../time-line/TimeLine';
import data from '../../staticData/aboutUs';
import teamMembers from '../../staticData/teamMembers';
import Paragraph from '../../component/about-us-paragraph/index';
import TeamMember from '../../component/team-member/TeamMember';


function About() {
  const team = teamMembers.map((member, index) => (
    <TeamMember member={member} />
  ));
  return (
    <>
      <div className="about">
        <section>
          <Paragraph data={data.ressup} />
          <Timeline />
          <Paragraph data={data.team} />
        </section>
        <section className="team-members">
          {team}
        </section>
        <p id="about-link">
          Eсли Вам интересно узнать о нас больше, нажмите на данную
          {' '}
          <a
            href="https://www.youtube.com/channel/UCv-LYTGGNAytZRuGbJhPeRA"
            target="_blank"
            rel="noopener noreferrer"
          >
              ссылку
          </a>
        </p>
      </div>
    </>
  );
}
export default About;
