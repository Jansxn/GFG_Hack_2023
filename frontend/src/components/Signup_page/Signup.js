import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import google from '../images/google.png';
import facebook from '../images/facebook.png';


function Signup(){
    return (
        <div className='signup'>
            <form className='form'>
                <div className = 'head'><b>Sign Up</b></div>

                <div className='name'>
                    <label for='fname' className='inholder'>
                        <input type='text' id = 'fname' className='in fname' required/>
                        <div className = 'label'>First Name</div>
                    </label>
                    <label for='lname' className='inholder'>
                        <input type='text' id = 'lname' className='in lname' required/>
                        <div className = 'label'>Last Name</div>
                    </label>
                </div>

                <label for='email' className='inholder'>
                    <input type='text' id = 'email' className='in email' required/>
                    <div className = 'label'>Email</div>
                </label>

                <label for='password' className='inholder'>
                    <input type='password'id = 'password' className='in pass' required/>
                    <div className = 'label'>Password</div>
                </label>

                <button type='submit' className='submit'>Create Account</button>

                <div className='acc'>
                    <div className='acc-item google'>
                        <img src={google} alt='google'/>
                        Google
                    </div>

                    <div className='acc-item facebook'>
                        <img src={facebook} alt='facebook'/>
                        Facebook
                    </div>
                </div>

                <div className='login'>
                    Already have an account? <Link to='/login' className='link'>Log In</Link>
                </div>

            </form>
        </div>
    )
}

export default Signup;