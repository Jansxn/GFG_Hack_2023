import React from 'react';
import { AppState } from './intro_data';
import temp_pfp from '../images/temp_pfp.jpeg';

function Navbar() {
  const {userData, setUserData} = React.useContext(AppState)
  function logout(){
    setUserData({name: '',lname: '',pfp: temp_pfp,streak: 0,email:'',phone: 0,medications:[],conditions:[],weight: 0,height: 0,age: 0});
  }

    return (
      <div className="navbar">
          <nav className = "nav">
            <input id="menu__toggle" type="checkbox" />
            <label className ="menu__btn" htmlFor="menu__toggle"><span></span></label>
            <span className = "nav-links">
                <a className= "nav-item i0">logo</a>
                <a className= "nav-item i1">Home</a>
                <div className = "nav-item meet i2">
                  <label htmlFor = "expand-box" className= " meet">Meet</label>
                  <span className = "meet-items">
                    <div className = "meet-item">
                    Physchiatrist 
                    </div>
                    <div className = "meet-item">
                    People 
                    </div> 
                  </span>
                </div>
                <a className= "nav-item i3">Volunteer</a>
                <a className = "nav-item i4">Games</a>
                <a className="nav-item i5 contact" onClick={logout}>Log Out</a>
            </span>
          </nav>
      </div>
    );
}

export default Navbar;