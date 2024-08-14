
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Journey from './components/Journey';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <div id="projects">
        <Projects />
      </div>
      <div id="journey">
        <Journey /> 
      </div>
      
    </div>
  );
}

export default App;
