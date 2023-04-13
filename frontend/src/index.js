import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import Context from './components/Intro_page/intro_data'
import { getFirestore } from "firebase/firestore";
import Profile from './components/Profile_page/Profile';
const firebaseConfig = {
  apiKey: "AIzaSyAzMoM_IHYJa_s3wWnuif0noRhegwTFags",
  authDomain: "gcdproject-f2c73.firebaseapp.com",
  projectId: "gcdproject-f2c73",
  storageBucket: "gcdproject-f2c73.appspot.com",
  messagingSenderId: "88967009713",
  appId: "1:88967009713:web:770b06a28e93d820045990"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storedb = getFirestore(app);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { app, auth, database,storedb};