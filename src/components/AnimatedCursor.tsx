import React, { useState, useEffect } from 'react';

export const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add mouse move listener
    window.addEventListener('mousemove', updateMousePosition);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    < >
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none;
        }
      `}</style>
      
      {/* Custom cursor with negative effect */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-150 ease-out z-50"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      >
        <div className={`rounded-full transition-all duration-300 ${
          isHovering 
            ? 'w-12 h-12 bg-white' 
            : 'w-6 h-6 bg-white'
        }`} />
      </div>

      {/* Trailing circle with invert effect */}
      <div
        className="fixed pointer-events-none z-40 transition-all duration-500 ease-out z-50"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'exclusion',
        }}
      >
        <div className={`rounded-full border-2 border-white transition-all duration-500 ${
          isHovering 
            ? 'w-20 h-20 scale-110' 
            : 'w-12 h-12 scale-100'
        }`} />
      </div>
    </>
  );
};