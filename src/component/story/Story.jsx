import React from 'react';
import { string, objectOf, object } from 'prop-types';
import Stories from '../stories/Stories';
import NotFound from '../notFound/NotFound';
import stories from '../../dummyData/stories';


const Story = ({ match }) => {
  const { id } = match.params;
  const story = stories.find((i) => i.id === id);
  if (!story) return <NotFound />;
  const otherStories = stories.filter((i) => i.id !== id);

  return (
    <div className="container">
      <div className="story">
        <h5 className="story__title">{story.title}</h5>
        <p className="story__text">{ story.text }</p>
      </div>
      <Stories stories={otherStories} />
      <NotFound />
    </div>

  );
};

Story.propTypes = {
  match: objectOf(object).isRequired,
  id: string.isRequired,
};


export default Story;
