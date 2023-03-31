import './App.css';
import React from 'react';
import {Route , Routes} from 'react-router-dom';

import Intro from './components/Intro_page/Intro';
import Login from './components/Login_page/Login';
import Signup from './components/Signup_page/Signup';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    // <div className="App">
    //     <Intro />
    // </div>
  );
}

export default App;