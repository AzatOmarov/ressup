import React, { useEffect } from 'react';

function Home(props) {

  useEffect(() => {
    document.getElementById("main").className = 'container-fluid-main'
  }, [])

  return (
    <>
      <div className="home">
        <div>
          <div className='title'>Всё дело </div>
          <div className='title'>в вдохновении</div>
          <div className='title'>и поддержке.</div>
        </div>
      </div>
    </>
  );
}
export default Home;
