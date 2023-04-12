import React from 'react';
import Navbar from './Navbar';
import Greeting from './Greeting';
import Cards from './Cards';
import './Intro.css';
// import { personal_info } from './intro_data';
import GoToSign from './GoToSign';
import { AppState } from './intro_data';

function Intro() {
    const {userData, setUserData} = React.useContext(AppState)
    if (userData.name === "") {
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