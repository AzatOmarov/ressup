import React from 'react';
import { Link } from 'react-router-dom';
import Timeline from '../time-line/TimeLine';
import data from '../../staticData/aboutUs';
import teamMembers from '../../staticData/teamMembers';
import Paragraph from '../../component/about-us-paragraph/index';
import TeamMember from '../../component/team-member/TeamMember';
import Footer from '../footer/Footer2';


const style = {
  bottom: '-10%',
};

function About() {
  const team = teamMembers.map((member) => (
    <div key={member.id}>
      <TeamMember member={member} />
    </div>
  ));
  const { title, description } = data.ressup;
  const { title: teamTitle, text: teamDescription } = data.team;
  return (
    <>
      <div className="about">
        <Paragraph title={title} description={description} />
        <Timeline />
        <div id="circle" />
        <Paragraph title={teamTitle} description={teamDescription} />
        <div className="pre-interested">Если вам интересно узнать о предыдущих социальных проектах с нашим участием , то вы можете </div>
        <div className="about__link">
          <div className="interested">почитать о них тут.</div>
          <div className="nextButton">
            <Link to="https://www.youtube.com/channel/UCv-LYTGGNAytZRuGbJhPeRA" className="fill">
            далее
            </Link>
          </div>
        </div>
        <section className="team-members">
          {team}
        </section>

      </div>
      <Footer style={style} />
    </>
  );
}
export default About;
