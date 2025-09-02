import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const Showcase = () => {
  // Portfolio categories with images
  const categories = [
    { src: "/images/1.jpg", title: "Architecture", link: "/architecture", span: 2 },
    { src: "/images/2.jpg", title: "Landscapes", link: "/landscapes", span: 2 },
    { src: "/images/3.jpg", title: "Urbanscapes", link: "/urbanscapes", span: 2 },
    { src: "/images/4.jpg", title: "Street", link: "/street", span: 2 },
    { src: "/images/5.jpg", title: "Portraits", link: "/portraits", span: 2 },
    { src: "/images/6.jpg", title: "Wildlife", link: "/wildlife", span: 2 }
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Helper function to get column span class
  const getColumnSpanClass = (span) => {
    const spanClasses = {
      1: "col-span-1",
      2: "col-span-2", 
      3: "col-span-3",
      4: "col-span-4"
    };
    return spanClasses[span] || "col-span-1";
  };

  return (
    <section className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
      
        {/* Main Grid - Adobe Portfolio Style with flexible spans */}
        <div className="grid grid-cols-4 gap-x-2 gap-y-6">
          {categories.map((category, i) => (
            <div
              key={i}
              className={`group cursor-pointer ${getColumnSpanClass(category.span)} md:${getColumnSpanClass(category.span)}`}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >    {/* Category title below image */}
              <h3 className="mt-4 text-lg font-light text-gray-800 group-hover:text-black transition-colors duration-300">
                {category.title}
              </h3>
              <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
                <img
                  src={category.src}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              
          
            </div>
          ))}
        </div>
    
        {/* Back to top link at bottom */}
        <div className="text-center mt-16 mb-8">
          <a 
            href="#top" 
            className="text-sm text-gray-500 hover:text-gray-800 transition-colors duration-300"
          >
            ↑ Back to Top
          </a>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={categories.map((category) => ({ src: category.src }))}
        />

        <style>{`
      
          html {
            scroll-behavior: smooth;
          }
          
          /* Ensure consistent aspect ratios */
          .aspect-4-3 {
            aspect-ratio: 4/3;
          }
          
        `}</style>
      </div>
    </section>
  );
};