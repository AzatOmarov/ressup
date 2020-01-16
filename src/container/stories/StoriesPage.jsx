import React from 'react';
import Stories from '../../component/stories/Stories';
import stories from '../../staticData/stories';


function StoriesPage() {
  return (
    <>
      <div className="stories-page">
        <Stories stories={stories} />
      </div>
    </>
  );
}
export default StoriesPage;
