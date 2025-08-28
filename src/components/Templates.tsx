// src/components/Templates.tsx
import React from "react";

export const Templates = () => {
  const templates = [
    {
      title: "Business Website",
      description:
        "A professional, modern design perfect for startups, agencies, or small businesses. Includes services, team, and contact sections.",
      image: "💼",
      link: "#",
    },
    {
      title: "Restaurant Website",
      description:
        "A stylish website for restaurants and cafes, featuring a menu showcase, online reservations, and customer reviews.",
      image: "🍽️",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A creative personal portfolio template to highlight projects, case studies, and client testimonials.",
      image: "🎨",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-base-200" id="templates">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Website Templates</h2>
          <p className="text-xl text-base-content/70">
            A selection of ready-made designs I can customize to fit your brand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="card-body text-center">
                <div className="text-6xl mb-4">{template.image}</div>
                <h3 className="card-title justify-center">
                  {template.title}
                </h3>
                <p className="text-base-content/70">{template.description}</p>
                <div className="card-actions justify-center mt-4">
                  <a
                    href={template.link}
                    className="btn btn-primary btn-sm"
                  >
                    Preview Template
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
