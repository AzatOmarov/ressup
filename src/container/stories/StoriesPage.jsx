import React from 'react';
import Stories from '../../component/stories/Stories';
import stories from '../../dummyData/stories';


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
