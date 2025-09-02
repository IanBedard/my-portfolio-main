import React from 'react';

import { Footer } from './components/Footer';
import {Showcase} from './components/Showcase';
import { AnimatedCursor } from './components/AnimatedCursor';



const App = () => {
  return (
    <div className="min-h-screen" data-theme="emerald">

      <AnimatedCursor />

    

          <section id="showcase"><Showcase /></section>
        
     <Footer />
    </div>
  );
};

export default App;
