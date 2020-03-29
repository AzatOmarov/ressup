import React from 'react';
import Paragraph from '../../component/stories/Paragraph';
import stories from '../../staticData/stories';


function StoriesPage() {
  function renderStories() {
    return stories.map((project, index) => {
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
      <div className="stories-page">
        {renderStories()}
      </div>
    </>
  );
}
export default StoriesPage;
