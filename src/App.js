
import AboutMe from './About/AboutMe';
import './App.css';
import Home from './Index/Home';
import Projects from './Index/Projects';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  const [mode,setMode] = useState('light');
  const enableDarkmode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <Router>
      <Navbar mode={mode} changeMode={enableDarkmode} />
      <Routes>
        <Route exact path="/" element={<Home mode={mode} />}/>
        <Route exact path="/projects" element={<Projects/>} />
        <Route exact path="/AboutMe" element={<AboutMe/>} />
      </Routes>
      <Footer mode={mode} />
    </Router>
  );
}

export default App;
