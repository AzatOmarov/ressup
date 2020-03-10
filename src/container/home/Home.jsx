import React from 'react';
import retro from '../../assets/img/retro.svg';
import Footer from '../../component/footer/index';


function Home() {
  return (
    <>
      <div className="home">
        <div className="title">
          <h1>Все дело в вдохновении</h1>
          <h1>и поддержке.</h1>
        </div>


      </div>
      <div className="box">
        <div className="triangle" />
        <div className="rectangle" />
        <Footer />
      </div>

    </>
  );
}
export default Home;
