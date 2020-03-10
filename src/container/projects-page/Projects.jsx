import React from 'react';
import { objectOf, object } from 'prop-types';
import Paragraph from '../../component/project/paragraph/index';
import Footer from '../../component/footer/index';


export default function ProjectsPage(props) {
  function renderProjects() {
    return props.projects.map((project, index) => {
      let p = null;
      if (project) {
        const { projectData: { title, subTitle } } = project;
        p = <Paragraph title={title} description={subTitle} index={index} key={project.id} />;
      }
      return p;
    });
  }

  return (
    <>
      <div className="projects-page">
        {renderProjects() || null}
      </div>
      <div className="box">
        <div className="triangle" />
        <div className="rectangle" />
        <Footer />
      </div>
    </>
  );
}

ProjectsPage.propTypes = {
  projects: objectOf(object).isRequired,
};
