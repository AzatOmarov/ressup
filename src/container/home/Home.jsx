import React from 'react';
import retro from '../../assets/img/retro.svg';


function Home() {
  return (
    <>
      <div className="home">
        <img src={retro} alt="retro" />
        <p>Denn so verändern sich die Dinge.</p>
      </div>
    </>
  );
}
export default Home;
