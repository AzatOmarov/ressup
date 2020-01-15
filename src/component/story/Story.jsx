import React, { useState, useEffect } from 'react';
import { string, objectOf, object } from 'prop-types';
import Stories from '../stories/Stories';
import locale from '../../utils/locale';
import NotFound from '../notFound/NotFound';
import AddCommentForm from '../comment-form/AddCommentForm';
import CommentsList from '../commentsList/CommentsList';
import stories from '../../dummyData/stories';

export const t = (key, def = '') => locale(`Story.${key}`, def);


const Story = ({ match }) => {
  const { id } = match.params;
  const story = stories.find((i) => i.id === id);

  const [storyInfo, setStoryInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/stories/${id}`);
      const body = await result.json();
      setStoryInfo(body);
    };
    fetchData();
  }, [id]);

  if (!story) return <NotFound />;
  const otherStories = stories.filter((i) => i.id !== id);

  return (
    <>
      <div className="story">
        <p className="story__title">
          {t('hasBeenUpvoted')}
          {' '}
          {storyInfo.upvotes}
          {' '}
          {t('times')}
        </p>
        <h5 className="story__title">{story.title}</h5>
        <p className="story__text">{ story.text }</p>
        <CommentsList comments={storyInfo.comments} />
        <AddCommentForm story={storyInfo} setStoryInfo={setStoryInfo} />
        <h3 style={{ color: 'black' }}>Other Stories</h3>
        <Stories stories={otherStories} />
        <NotFound />
      </div>
    </>

  );
};

Story.propTypes = {
  match: objectOf(object).isRequired,
  id: string.isRequired,
};


export default Story;
