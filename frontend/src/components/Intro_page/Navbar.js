import React from 'react';

function Navbar() {
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
                <a className="nav-item i5 contact">Contact Us</a>
            </span>
          </nav>
      </div>
    );
}

export default Navbar;