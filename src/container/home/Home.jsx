import React, { useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';


function Home(props) {

  useEffect(() => {
    document.getElementById("main").className = 'container-fluid-main'
  }, [])

  return (
    <>
      <div className="home" >
        <IconButton aria-label='expand row' size='small' onClick={() => console.info('object')}>OPEN</IconButton>
      </div>
    </>
  );
}
export default Home;
