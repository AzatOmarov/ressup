import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Timeline from '../time-line/TimeLine';
import data from '../../staticData/aboutUs';
import teamMembers from '../../staticData/teamMembers';
import TeamMember from '../../component/team-member/TeamMember';


function About() {
  const team = teamMembers.map((member) => (
    <div key={member.id}>
      <TeamMember member={member} />
    </div>
  ));
  const { title, description } = data.ressup;
  const { title: teamTitle, text: teamDescription } = data.team;

  useEffect(() => {
    document.getElementById("main").className = 'container-fluid'
  }, [])

  return (
    <>
      <div className="about">
        <h2>{title}</h2>
        <div className="description">{description}</div>
        <Timeline />
        <div id="circle" />
        <h2 className="about__title">{teamTitle}</h2>
        <div className="description">{teamDescription}</div>
        <div className="about__link">
          <div className="interested">
            Если вам интересно узнать о предыдущих социальных проектах с
            нашим участием , то вы можете
            почитать о них тут.
          </div>
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
    </>
  );
}
export default About;
