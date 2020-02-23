import React from 'react';
import { objectOf, object } from 'prop-types';
import data from '../../staticData/projects';
import Paragraph from '../../component/project/paragraph/index';


class ProjectsPage extends React.Component {
  openProjectItem = (projectID) => {
    const { history } = this.props;
    history.push(`/procs/${projectID}`);
  }

  renderProjects = () => data.map((project, index) => {
    if (project) {
      const { projectData: { title, subTitle } } = project;
      const { history } = this.props;
      return (
        <Paragraph
          title={title}
          description={subTitle}
          index={index}
          history={history}
          onClick={() => this.openProjectItem(index)}
        />
      );
    }
  })

  render() {
    const projects = this.renderProjects();
    return (
      <div className="projects-page">
        { projects || null }
      </div>
    );
  }
}

ProjectsPage.propTypes = {
  history: objectOf(object).isRequired,
};


export default ProjectsPage;
