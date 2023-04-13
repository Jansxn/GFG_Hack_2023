import React from 'react';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { validateEmail, validatePassword } from '../authentication';
import { Link, useNavigate } from 'react-router-dom';
import google from '../images/google.png';
import facebook from '../images/facebook.png';
import { auth, database } from '../../index';
import { ref, update, get } from 'firebase/database';
import { AppState } from '../Intro_page/intro_data';
import temp_pfp from '../images/temp_pfp.jpeg';

export var userDataInitialState = {
  email: '',
  fname: '',
  lname: '',
};


export const Login = () => {
  const navigate = useNavigate();
  const {userData, setUserData} = React.useContext(AppState)
  // const [userData, setUserData] = React.useState(userDataInitialState);

  function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (validateEmail(email) === false || validatePassword(password) === false) {
      alert('Enter valid email or password');
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        var databaseRef = ref(database, `users/${user.uid}`);
        const userDataEx = { 
          email: user.email,
          fname: '',
          lname: '',
        };
        get(databaseRef).then((snapshot) => {
          const userRecord = snapshot.val();
          userDataEx.fname = userRecord.fname;
          userDataEx.lname = userRecord.lname;
          userDataEx.email = userRecord.email;
          update(databaseRef, userDataEx);
          const newUserData = { ...userData, name: userRecord.fname, lname: userRecord.lname, email: userRecord.email };
          setUserData(newUserData);
          userDataInitialState = userData;
          console.log(userDataInitialState);
          navigate('../');
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return (
    <div className="login">
      <form className="form">
        <div className="head">
          <b>Login</b>
        </div>

        <label htmlFor="email" className="inholder">
          <input type="text" id="email" className="in email" required />
          <div className="label">Email</div>
        </label>

        <label htmlFor="password" className="inholder">
          <input type="password" id="password" className="in pass" required />
          <div className="label">Password</div>
        </label>

        <button type="button" className="submit" onClick={handleLogin}>
          Login
        </button>

        <div className="acc">
          <div className="acc-item google">
            <img src={google} alt="google" />
            Google
          </div>

          <div className="acc-item facebook">
            <img src={facebook} alt="facebook" />
            Facebook
          </div>
        </div>

        <div className="signup">
          Don't have an account?{' '}
          <Link to="/signup" className="link">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;