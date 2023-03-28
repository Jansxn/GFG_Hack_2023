import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import google from '../images/google.png';
import facebook from '../images/facebook.png';
import { app, auth, database } from "../../index";
import { signInWithEmailAndPassword } from "firebase/auth";
import { validateEmail, validatePassword } from '../authentication';

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (validateEmail(email) === false || validatePassword(password) === false) {
    alert('Enter valid email or password');
    return;
  }
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const database_ref = database.ref();
      const user_data = {};
      database_ref.child(`users/${user.uid}`).update(user_data);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function Login() {
  return (
    <div className='login'>
      <form className='form'>
        <div className='head'>
          <b>Login</b>
        </div>

        <label htmlFor='email' className='inholder'>
          <input type='text' id='email' className='in email' required />
          <div className='label'>Email</div>
        </label>

        <label htmlFor='password' className='inholder'>
          <input type='password' id='password' className='in pass' required />
          <div className='label'>Password</div>
        </label>

        <button type='button' className='submit' onClick={login}>
          Login
        </button>

        <div className='acc'>
          <div className='acc-item google'>
            <img src={google} alt='google' />
            Google
          </div>

          <div className='acc-item facebook'>
            <img src={facebook} alt='facebook' />
            Facebook
          </div>
        </div>

        <div className='signup'>
          Don't have an account? <Link to='/signup' className='link'>Sign Up</Link>
        </div>

      </form>
    </div>
  );
}

export default Login;
