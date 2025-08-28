import React from 'react';


export const Portfolio = () => {
  const projects = [
    { title: "E-commerce Store", category: "Retail", image: "🛍️" },
    { title: "Restaurant Website", category: "Food & Beverage", image: "🍽️" },
    { title: "Law Firm Portal", category: "Professional Services", image: "⚖️" },
    { title: "Fitness Studio", category: "Health & Wellness", image: "💪" },
    { title: "Creative Agency", category: "Marketing", image: "🎯" },
    { title: "Real Estate", category: "Property", image: "🏠" }
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
          <p className="text-xl text-base-content/70">
            A showcase of beautiful Divi websites I've created for clients across various industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body text-center">
                <div className="text-6xl mb-4">{project.image}</div>
                <h3 className="card-title justify-center">{project.title}</h3>
                <div className="badge badge-primary">{project.category}</div>
                <div className="card-actions justify-center mt-4">
                  <button className="btn btn-outline btn-sm">View Project</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};