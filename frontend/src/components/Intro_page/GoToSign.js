import React from 'react';

function GoToSign() {
    function gotologin(e) {
        e.preventDefault();
        window.location.href = "/login";
    }
    function gotosignup(e) {
        e.preventDefault();
        window.location.href = "/signup";
    }
    return (
        <div className="gts">
            <div className = "welcome">Welcome to ELDERLYCARE</div>
            <div className='options'>
                <button className='log-in' onClick = {gotologin}>Log In</button>
                <button className='sign-up' onClick={gotosignup}>Sign Up</button>
            </div>
        </div>
    );
}

export default GoToSign;