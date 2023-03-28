import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import google from '../images/google.png';
import facebook from '../images/facebook.png';
import { validateEmail, validatePassword, validateField } from '../authentication';
import { app, auth, database } from '../../index';
import {createUserWithEmailAndPassword} from 'firebase/auth';
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
function Signup() {

  function register(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let first_name = document.getElementById('fname').value;
    let last_name = document.getElementById('lname').value;
    if (validateEmail(email) === false || validatePassword(password) === false) {
      alert('Enter valid email or password');
      return;
    }
    if (validateField(first_name) === false || validateField(last_name) === false) {
      alert('Enter name');
      return;
    }
    createUserWithEmailAndPassword(auth,email, password).then(function () {
      var user = auth.currentUser;
      var database_ref = database.ref();
      var user_data = {
        email: email,
        password: password,
        fname: first_name,
        lname: last_name,
      }
      database_ref.child('users/' + user.uid).set(user_data);
    }).catch(function (error) {
      var error_code = error.code;
      var error_message = error.message;
      alert(error_message);
    })
  }

  return (
    <div className='signup'>
      <form className='form'>
        <div className='head'><b>Sign Up</b></div>

        <div className='name'>
          <label htmlFor='fname' className='inholder'>
            <input type='text' id='fname' className='in fname' required />
            <div className='label'>First Name</div>
          </label>
          <label htmlFor='lname' className='inholder'>
            <input type='text' id='lname' className='in lname' required />
            <div className='label'>Last Name</div>
          </label>
        </div>

        <label htmlFor='email' className='inholder'>
          <input type='text' id='email' className='in email' required />
          <div className='label'>Email</div>
        </label>

        <label htmlFor='password' className='inholder'>
          <input type='password' id='password' className='in pass' required />
          <div className='label'>Password</div>
        </label>

        <button type='submit' className='submit' onClick={register}>Create Account</button>

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

        <div className='login'>
          Already have an account? <Link to='/login' className='link'>Log In</Link>
        </div>

      </form>
    </div>
  )
}

export default Signup;
