import React, { useEffect } from 'react';
import Timeline from '../time-line/TimeLine';
import data from '../../staticData/aboutUs';
import teamMembers from '../../staticData/teamMembers';
import TeamMember from '../../component/team-member/TeamMember';
import QALine from '../../container/projects/time-line/QALine';
import data2 from '../../staticData/aboutUs_timeline';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Link from '@material-ui/core/Link';



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


  // const returnLink = () => {
  //   return <div className="nextButton">
  //           <Link to="https://www.youtube.com/channel/UCv-LYTGGNAytZRuGbJhPeRA" className="fill">
  //             далее
  //           </Link>
  //         </div>
  // }

  return (
    <>
      <div className="about">
        <h2>{title}</h2>
        <div className="description">{description}</div>
        <QALine data={data2} />
        <div id="circle" />
        <h2 className="about__title">{teamTitle}</h2>
        <div className="description">{teamDescription}</div>
        <div className="about__link">
          <div className="interested">
            Если вам интересно узнать о предыдущих социальных проектах с
            нашим участием , то вы можете
            почитать о них тут <Link href="https://www.youtube.com/channel/UCv-LYTGGNAytZRuGbJhPeRA" rel="noopener noreferrer" target="_blank">
              {<OpenInNewIcon />}
            </Link>.

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
