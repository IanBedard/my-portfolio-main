import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export const Portfolio = () => {
  const projects = [
    { title: "E-commerce Store", category: "Retail", image: "🛍️" },
    { title: "Restaurant Website", category: "Food & Beverage", image: "🍽️" },
    { title: "Law Firm Portal", category: "Professional Services", image: "⚖️" },
    { title: "Fitness Studio", category: "Health & Wellness", image: "💪" },
    { title: "Creative Agency", category: "Marketing", image: "🎯" },
    { title: "Real Estate", category: "Property", image: "🏠" },
  ];

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
          <p className="text-xl text-base-content/70">
            A showcase of Divi websites I've created across various industries
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn btn-sm ${
                activeCategory === cat ? "btn-primary" : "btn-outline"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {filteredProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
                <div className="card-body text-center">
                  <div className="text-6xl mb-4">{project.image}</div>
                  <h3 className="card-title justify-center">{project.title}</h3>
                  <div className="badge badge-primary">{project.category}</div>
                  <div className="card-actions justify-center mt-4">
                    <button className="btn btn-outline btn-sm">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
