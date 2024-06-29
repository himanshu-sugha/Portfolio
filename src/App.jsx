import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';

const App = () => {
  return (
    <div className="relative min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="absolute top-0 z-[-2] w-full h-full"></div>
      <Navbar />
      <Hero />
      <Technologies />
      <Education/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default App;
