import React from 'react';
import Navbar from './Navbar';
import Greeting from './Greeting';
import Cards from './Cards';
import './Intro.css';

function Intro() {
    return (
      <div className="intro">
          <Navbar />
          <div className="information">
            <Greeting />
            <Cards />
          </div>
      </div>
    );
}

export default Intro;