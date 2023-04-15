import React, {useEffect}from 'react';
import Navbar from './Navbar';
import Greeting from './Greeting';
import Cards from './Cards';
import './Intro.css';
// import { personal_info } from './intro_data';
import GoToSign from './GoToSign';
import { AppState } from './intro_data';

function Intro() {
    const {userData, setUserData} = React.useContext(AppState)

    // useEffect(() => {
    //     localStorage.setItem('userData', JSON.stringify(userData));
    //   }, [userData]);

    // useEffect(() => {
    //   const userData = JSON.parse(localStorage.getItem('userData'));
    //   if (userData) {
    //     setUserData(userData);
    //   }
    // }, [setUserData]);

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