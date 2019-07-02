import React from 'react';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Homepage from './Component/Homepage/Homepage';
import Proyects from './Component/Proyects/Proyects';
import Skills from './Component/Skills/Skills';
import Contact from './Component/Contact/Contact';
import About from './Component/AbouteMe/AboutMe';

function App() {

  return (
    
    <div className="App container-fluid ">

    <Navigation/>
    <Homepage/>
    <About/> 
    <Proyects/>
    <Skills/>
    <Contact/>

    </div>
  );
}

export default App;
