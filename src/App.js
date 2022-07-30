import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Navbar from "../src/components/navbar/navBar";
import Introduction from "../src/components/intro/intro"
import Project from "../src/components/project/project";
import Skills from "../src/components/skills/skills";
import Certificate from "../src/components/certificate/certificate"
import About from "../src/components/contact/about"

function App() {
  return (
    <>
      <div className='app'>
        <Navbar/>
        <Introduction/>
        <Project/>
        <Skills/>
        <Certificate/>
        <About/>

      </div>
    </>
  );
}

export default App;
