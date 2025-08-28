import React from 'react';


import { Header } from './components/Header';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatedCursor } from './components/AnimatedCursor';



const App = () => {
  return (
    <div className="min-h-screen">
 
      <AnimatedCursor />
      <Header />
      <About />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
