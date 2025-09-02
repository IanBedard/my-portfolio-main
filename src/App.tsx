import React from 'react';

import { Footer } from './components/Footer';
import {Showcase} from './components/Showcase';
import { AnimatedCursor } from './components/AnimatedCursor';
import { Header } from './components/Header';


const App = () => {
  return (
    <div className="min-h-screen" data-theme="emerald">

      <AnimatedCursor />
      <Header />
    

          <section id="showcase"><Showcase /></section>
        

    </div>
  );
};

export default App;
