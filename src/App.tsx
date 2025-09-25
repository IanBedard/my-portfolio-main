
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageGallery from "./components/ImageGallery";
import { Showcase } from './components/Showcase';
import { AnimatedCursor } from './components/AnimatedCursor';
import {Nav} from './components/Nav';
import { Header } from './components/Header';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen " data-theme="emerald">
           <Nav /> 
           <Header />

        <AnimatedCursor />
       
        <Routes>
          <Route path="/" element={<Showcase />} />
          <Route path="/gallery/:category" element={<ImageGallery />} />
        </Routes>

      </div>
    </Router>
  ); 
};

export default App;
