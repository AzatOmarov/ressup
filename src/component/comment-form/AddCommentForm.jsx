import React, { useState } from 'react';


const AddCommentForm = ({ story, setStoryInfo }) => {
  const [userName, setUserName] = useState('');
  const [commentText, setCommentText] = useState('');

  const addComment = async () => {
    const result = await fetch(`/api/stories/${story.name}/add-comment/`, {
      method: 'post',
      body: JSON.stringify({ userName, comment: commentText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await result.json();
    setStoryInfo(body);
  };

  return (
    <div>
      <h3>Add a comment</h3>
      <label>
                  Name:
        <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
      </label>
      <label>
              Comment
      </label>
      <textarea rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
      <button onClick={() => addComment()}>Add comment</button>
    </div>
  );
};


export default AddCommentForm;
