import React from 'react';
import Graphic from './Graphic/Graphic.js';
import WelcomeText from './WelcomeText/Welcometext.js';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <WelcomeText />
      <Graphic />
      <Link to='/assessment' className='beginButtonContainer'>
        <button className='beginButton'>Begin</button>
      </Link>
    </div>
  );
}

export default Home;
