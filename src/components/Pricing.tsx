import React from 'react';

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$1,299",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Custom Divi design",
        "Mobile optimization",
        "Basic SEO setup",
        "Contact form integration",
        "30 days support"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$2,499",
      description: "Ideal for growing businesses",
      features: [
        "10-page responsive website",
        "Premium Divi design",
        "Advanced animations",
        "Complete SEO optimization",
        "E-commerce integration",
        "Blog setup",
        "90 days support"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "$4,999",
      description: "For established businesses with complex needs",
      features: [
        "Unlimited pages",
        "Custom Divi modules",
        "Advanced functionality",
        "Full SEO audit & setup",
        "Third-party integrations",
        "Performance optimization",
        "6 months support",
        "Training session included"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Website Packages</h2>
          <p className="text-xl text-base-content/70">
            Choose the perfect package for your business needs
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`card shadow-xl ${plan.highlighted ? 'border-2 border-primary' : ''}`}>
              {plan.highlighted && (
                <div className="badge badge-primary absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Most Popular
                </div>
              )}
              <div className="card-body">
                <h3 className="card-title text-2xl justify-center">{plan.name}</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                  <p className="text-sm text-base-content/70 mb-6">{plan.description}</p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-success mr-2">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="card-actions justify-center">
                  <button className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-outline'} btn-wide`}>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};