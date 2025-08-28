import React from 'react';


import { Header } from './components/Header';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import {Showcase} from './components/Showcase';
import { AnimatedCursor } from './components/AnimatedCursor';
import {Templates} from './components/Templates';


const App = () => {
  return (
    <div className="min-h-screen">
 
      <AnimatedCursor />
  
      <Header />
    
         <section id="about"><About /></section> 
          <section id="portfolio"><Portfolio /></section>
          <section id="templates"><Templates /></section>
          <section id="showcase"><Showcase /></section>
          <section id="pricing"><Pricing /></section>
          <section id="contact"><Contact /></section>
        <Footer />
    </div>
  );
};

export default App;
