import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="px-8 py-4">
        <h1 
          className="text-2xl font-light tracking-wider cursor-pointer hover:text-gray-600 transition-colors"
          onClick={() => navigate('/')}
        >
          IAN BEDARD
        </h1>
      </div>
    </header>
  );
};