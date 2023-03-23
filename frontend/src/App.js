import './App.css';
import React from 'react';
import Intro from './components/Intro_page/Intro';
import Login from './components/Login_page/Login';
import {Route , Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    // <div className="App">
    //     <Intro />
    // </div>
  );
}

export default App;
