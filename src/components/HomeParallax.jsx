import React from 'react';
import { Parallax } from 'react-parallax';
import '../styles/homePara.css';

function Home() {
  return (
    <>
      <div className="section bg-1">
        <Parallax className="parallax-1" y={[0, -40]} x={[-40, 0]}>
          <h1 id="h1">Give a Helping Hands</h1>
          <h3 id='h3'>which makes People Happy </h3>
          <p id='pg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum alias eius nisi recusandae vitae laborum,</p>
          <p id="p1"> ipsum in, nulla veritatis error dolores ipsam excepturi reprehenderit!</p>
        </Parallax>
      </div>
      <div className="section bg-2">
        <Parallax className="parallax-2" y={[40, -40]} x={[-40, 0]}>
          <h1>Give Education to get an Amazing future </h1>
        </Parallax>
      </div>
      <div className="section bg-3">
        <Parallax className="parallax-3" y={[0, -40]} x={[40, 0]}>
          <h1>Women is power of our Society</h1>
        </Parallax>
      </div>
      <div className="section bg-4">
        <Parallax className="parallax-4" y={[40, -40]} x={[40, 0]}>
          <h1>Happy to having us</h1>
        </Parallax>
      </div>
      <div className="section bg-1">
        <Parallax className="parallax-5" y={[0, -40]} x={[-40, 0]}>
          <h1>Super!!!</h1>
        </Parallax>
      </div>
    </>
  );
}

export default Home;
