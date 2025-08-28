import React from 'react';

export const Contact = () => {
  return (
    <section className="py-20 bg-primary text-primary-content">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss your project and create a stunning Divi website that drives results for your business.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl mb-2">📧</div>
            <h3 className="text-lg font-semibold mb-1">Email</h3>
            <p>hello@diviexpert.com</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📞</div>
            <h3 className="text-lg font-semibold mb-1">Phone</h3>
            <p>(555) 123-4567</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💬</div>
            <h3 className="text-lg font-semibold mb-1">Response Time</h3>
            <p>Within 24 hours</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn btn-accent btn-lg">Schedule Free Consultation</button>
          <button className="btn btn-outline btn-lg">View Portfolio</button>
        </div>
      </div>
    </section>
  );
};