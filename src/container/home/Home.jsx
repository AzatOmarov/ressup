import React from 'react';
import landing from '../../assets/img/landingImage.svg';


function Home() {
  return (
    <>
      <div className="home">
      <img src={landing} alt="logo" className='ml-3 pl-1' width='100%' />
      </div>
    </>
  );
}
export default Home;
