import React from 'react';
import data from '../../staticData/aboutUs';
import Paragraph from '../../component/project/paragraph/index';


function ProjectsPage() {
//   const team = teamMembers.map((member, index) => (
//     <TeamMember member={member} />
//   ));
  const { title, description } = data.ressup;
  const { title: teamTitle, text: teamDescription } = data.team;
  return (
    <>
      <div className="projects">
        <Paragraph title={title} description={description} />
        <Paragraph title={teamTitle} description={teamDescription} />
      </div>
    </>
  );
}
export default ProjectsPage;
