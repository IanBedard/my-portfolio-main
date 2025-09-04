import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageGallery from "./components/ImageGallery";
import { Showcase } from './components/Showcase';
import { AnimatedCursor } from './components/AnimatedCursor';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen" data-theme="emerald">
        <Header />
        <AnimatedCursor />
        <Routes>
          <Route path="/" element={<Showcase />} />
          <Route path="/gallery/:category" element={<ImageGallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  ); 
};

export default App;
