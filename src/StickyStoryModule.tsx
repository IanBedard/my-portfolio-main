import React, { useState, useEffect } from 'react';

interface StorySection {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  backgroundColor: string;
  textColor: string;
  accent: string;
}

const StickyStoryModule: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const storyData: StorySection[] = [
    {
    
      id: "beginning",
      title: "The Beginning",
      subtitle: "Where it all started",
      content: "Every great journey begins with a single step. Mine started with curiosity about how things work, a passion for problem-solving, and an insatiable desire to create something meaningful.",
      backgroundColor: "bg-gradient-to-br from-purple-900 to-blue-900",
      textColor: "text-white",
      accent: "text-purple-300"
    },
    {
      id: "discovery",
      title: "Discovery",
      subtitle: "Finding my passion",
      content: "I discovered the world of web development and was immediately captivated. The ability to bring ideas to life through code, to create experiences that people could interact with, was nothing short of magical.",
      backgroundColor: "bg-gradient-to-br from-blue-900 to-teal-900",
      textColor: "text-white",
      accent: "text-blue-300"
    },
    {
      id: "growth",
      title: "Growth",
      subtitle: "Learning and evolving",
      content: "Through countless hours of practice, failed projects, and breakthrough moments, I honed my skills. Each challenge taught me something new, each project pushed me to grow beyond my comfort zone.",
      backgroundColor: "bg-gradient-to-br from-teal-900 to-green-900",
      textColor: "text-white",
      accent: "text-teal-300"
    },
    {
      id: "mastery",
      title: "Mastery",
      subtitle: "Becoming an expert",
      content: "Years of dedication led to mastery of multiple technologies. I learned that true expertise isn't just about knowing tools, but understanding how to solve problems creatively and efficiently.",
      backgroundColor: "bg-gradient-to-br from-green-900 to-yellow-900",
      textColor: "text-white",
      accent: "text-green-300"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      
      setScrollProgress(scrollPercent);
      
      // Calculate which section should be active based on scroll position
      const sectionIndex = Math.floor(scrollPercent * storyData.length);
      const clampedIndex = Math.max(0, Math.min(sectionIndex, storyData.length - 1));
      setActiveSection(clampedIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [storyData.length]);

  const currentStory = storyData[activeSection];

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-base-200 z-50">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Sticky Story Container */}
      <div className="relative min-h-screen">
        {/* Story Content - Sticky */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div 
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${currentStory.backgroundColor}`}
          >
            {/* Background Animation Elements */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 4 + 1}px`,
                    height: `${Math.random() * 4 + 1}px`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`
                  }}
                />
              ))}
            </div>
            
            {/* Story Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
              <div className="transform transition-all duration-800 ease-out">
                <h1 className={`text-6xl md:text-8xl font-bold mb-4 ${currentStory.textColor} animate-fade-in`}>
                  {currentStory.title}
                </h1>
                <p className={`text-2xl md:text-3xl mb-8 ${currentStory.accent} animate-fade-in-delay`}>
                  {currentStory.subtitle}
                </p>
                <div className="max-w-3xl mx-auto">
                  <p className={`text-lg md:text-xl leading-relaxed ${currentStory.textColor} opacity-90 animate-fade-in-delay-2`}>
                    {currentStory.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Spacer - Creates scroll distance */}
        <div className="h-[400vh]" />
      </div>

      {/* Story Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col space-y-3">
          {storyData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const targetProgress = index / (storyData.length - 1);
                const targetScroll = targetProgress * (document.documentElement.scrollHeight - window.innerHeight);
                window.scrollTo({ top: targetScroll, behavior: 'smooth' });
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSection 
                  ? 'bg-primary scale-125' 
                  : 'bg-base-300 hover:bg-base-400'
              }`}
              aria-label={`Go to ${storyData[index].title}`}
            />
          ))}
        </div>
      </div>

      {/* Section Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-base-100 bg-opacity-90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
          <div className="text-center">
            <div className="text-sm font-medium text-base-content">
              {activeSection + 1} of {storyData.length}
            </div>
            <div className="text-xs text-base-content opacity-70">
              {currentStory.title}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
};

export default StickyStoryModule;