import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnicalProficiency from './components/TechnicalProficiency';
import WorkExperience from './components/WorkExperience';
import './App.css';
import Contact from './components/Contact';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const App = () => {
  

  return (
    <div>
      <Navbar  />
      <Hero />
     <TechnicalProficiency/>
     <WorkExperience/>
     <Contact/>
    </div>
  );
};

export default App;
