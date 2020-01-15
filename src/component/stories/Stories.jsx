import React from 'react';
import { objectOf, object } from 'prop-types';
import { Link } from 'react-router-dom';


const Stories = ({ stories }) => (

  <div className="story-list">
    {stories.map((story) => (
      <div className="stories">
        <Link key={story.id} to={`/stories/${story.id}`}>
          <h5 className="stories__title">{story.title}</h5>
        </Link>
        <p className="stories__text">
          {story.text.substring(0, 150)}
      ...
        </p>
      </div>
    ))}
  </div>
);

Stories.propTypes = {
  stories: objectOf(object).isRequired,
};
export default Stories;
