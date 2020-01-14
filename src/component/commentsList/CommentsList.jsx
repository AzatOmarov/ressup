import React from 'react';
import { objectOf, object } from 'prop-types';

const CommentsList = ({ comments }) => (
  <>
    <h3 style={{ color: 'black' }}>Comments:</h3>
    { comments.map((comment, key) => (
      <div className="comment" key={key}>
        <h4>{comment.userName}</h4>
        <p>{comment.comment}</p>
      </div>
    ))}
  </>
);

CommentsList.propTypes = {
  comments: objectOf(object).isRequired,
};

export default CommentsList;
