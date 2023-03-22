import React from 'react';

function Navbar() {
    return (
      <div className="navbar">
          <nav class = "nav">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle"><span></span></label>
            <span class = "nav-links">
                <a class = "nav-item i0">logo</a>
                <a class = "nav-item i1">Home</a>
                <div class = "nav-item meet i2">
                  <label for = "expand-box" class = " meet">Meet</label>
                  <span class = "meet-items">
                    <div className = "meet-item">
                    Physchiatrist 
                    </div>
                    <div className = "meet-item">
                    People 
                    </div> 
                  </span>
                </div>
                <a class = "nav-item i3">Volunteer</a>
                <a class = "nav-item i4">Games</a>
                <a class = "nav-item i5 contact">Contact Us</a>
            </span>
          </nav>
      </div>
    );
}

export default Navbar;