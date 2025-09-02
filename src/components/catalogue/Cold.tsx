import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const Showcase = () => {
  // Replace with your own images
  const images = [
    { src: "/images/1.jpg", title: "Creative Poster" },
    { src: "/images/2.jpg", title: "Modern Landing Page" },
    { src: "/images/3.jpg", title: "Illustration Artwork" },
    { src: "/images/4.jpg", title: "Infographic Design" },
    { src: "/images/5.jpg", title: "UI/UX Prototype" },
    { src: "/images/6.jpg", title: "Brand Identity" },
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="showcase" className="py-20 bg-base-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
      <h1 className="text-5xl font-bold mb-4">Welcome to my portfolio</h1>
          <h2 className="text-4xl font-bold mb-4">Welcome to my portfolio</h2>
          <p className="text-xl text-base-content/70">
            A curated selection of my creative work — posters, UI, and branding
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-lg"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={img.src} 
                alt={img.title}
                className="w-full h-auto transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images.map((img) => ({ src: img.src }))}
        />
              <style>{`
        * {
          cursor: crosshair !important;
        }
      `}</style>
      </div>
    </section>
  );
};
