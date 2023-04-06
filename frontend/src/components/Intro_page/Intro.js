import React from 'react';
import Navbar from './Navbar';
import Greeting from './Greeting';
import Cards from './Cards';
import './Intro.css';
import { personal_info } from './intro_data';
import GoToSign from './GoToSign';

function Intro() {
    if (personal_info.name === "") {
        return (
            <div className="intro">
                <GoToSign />
            </div>
        );
    }
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