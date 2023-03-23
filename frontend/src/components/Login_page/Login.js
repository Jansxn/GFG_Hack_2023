import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import google from '../images/google.png';
import facebook from '../images/facebook.png';


function Login(){
    return (
        <div className='login'>
            <form className='form'>
                <div className = 'head'><b>Login</b></div>

                <label for='email' className='inholder'>
                <input type='text' id = 'email' className='in email' required/>
                <div className = 'label'>Email</div>
                </label>

                <label for='password' className='inholder'>
                <input type='password'id = 'password' className='in pass' required/>
                <div className = 'label'>Password</div>
                </label>

                <button type='submit' className='submit'>Login</button>

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

            </form>
        </div>
    )
}

export default Login;