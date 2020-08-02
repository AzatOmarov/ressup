import React, { useEffect } from 'react';

function Home(props) {

  useEffect(() => {
    document.getElementById("main").className = 'container-fluid-main'
  }, [])

  return (
    <>
      <div className="home" />
    </>
  );
}
export default Home;
