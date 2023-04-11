import React from 'react';
// import { personal_info } from './intro_data.js';
import {AppState} from './intro_data.js';

function Greeting() {
  const {userData, setUserData} = React.useContext(AppState)
    // var medications = personal_info.medications.map((medication) => {
    const name = userData.name.split(" ")[0];

    return (
      <div className="greet">
          <div className = "name">
            Hey {name}! 
          </div>
          <div className = "question">
            How are you feeling<br /> <b>today</b>?
          </div>
          <div className = "options">
            <div className = "option o1">
              Bad
            </div>
            <div className = "option o2">
              Okayish
            </div>
            <div className = "option o3">
              Good
            </div>
            <div className = "option o4">
              Superb
            </div>
          </div>
      </div>
    );
}

export default Greeting;