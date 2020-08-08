import React, { useEffect } from 'react';

function Home(props) {

  useEffect(() => {
    document.getElementById("main").className = 'container-fluid-main'
  }, [])

  return (
    <>
      <div className="home">
        <div className='title'>Всё дело в вдохновении и поддержке.</div>
      </div>
    </>
  );
}
export default Home;
