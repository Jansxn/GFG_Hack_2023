import './App.css';
import React from 'react';
import {Route , Routes} from 'react-router-dom';

import Intro from './components/Intro_page/Intro';
import Login from './components/Login_page/Login';
import Signup from './components/Signup_page/Signup';
import Profile from './components/Profile_page/Profile';
import Emotion from './components/Webcam_page/emotion';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/emo" element={<Emotion />} />
    </Routes>
    // <div className="App">
    //     <Intro />
    // </div>
  );
}

export default App;
