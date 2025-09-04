import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageGallery from "./components/ImageGallery";
import { Showcase } from './components/Showcase';
import { AnimatedCursor } from './components/AnimatedCursor';
import { Header } from './components/Header';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen" data-theme="emerald">
     
        <Header />
      
        <Routes>
      
          <Route path="/" element={<Showcase />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/architecture" element={<ImageGallery />} />
          <Route path="/landscapes" element={<ImageGallery />} />
          <Route path="/urbanscapes" element={<ImageGallery />} />
          <Route path="/street" element={<ImageGallery />} />
          <Route path="/portraits" element={<ImageGallery />} />
          <Route path="/wildlife" element={<ImageGallery />} />
        </Routes>  
      </div>
    </Router>
  );
};

export default App;
