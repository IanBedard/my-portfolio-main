import React from 'react';


export const About = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Divi for Your Website?</h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Divi is the world's most popular WordPress theme and visual page builder. 
            I leverage its power to create beautiful, functional websites that grow your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="card-title justify-center mb-2">Custom Design</h3>
              <p>Tailored designs that reflect your brand and engage your audience</p>
            </div>
          </div>
          
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="card-title justify-center mb-2">Mobile Responsive</h3>
              <p>Perfect viewing experience across all devices and screen sizes</p>
            </div>
          </div>
          
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="card-title justify-center mb-2">Fast Loading</h3>
              <p>Optimized for speed and performance to keep visitors engaged</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};