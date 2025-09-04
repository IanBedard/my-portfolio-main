import React from "react";
import { useNavigate } from "react-router-dom";

export const Showcase = () => {
  const navigate = useNavigate();

  const handleImageClick = (link: string) => {
    navigate(link);
  };

  const galleries = [
    {
      id: 1,
      src: "/images/1.jpg",
      title: "Architecture Gallery",
      link: "/architecture"
    },
    {
      id: 2,
      src: "/images/2.jpg",
      title: "Landscapes Gallery",
      link: "/landscapes"
    },
    {
      id: 3,
      src: "/images/3.jpg",
      title: "Urbanscapes Gallery",
      link: "/urbanscapes"
    },
    {
      id: 4,
      src: "/images/4.jpg",
      title: "Street Gallery",
      link: "/street"
    },
    {
      id: 5,
      src: "/images/5.jpg",
      title: "Portraits Gallery",
      link: "/portraits"
    },
    {
      id: 6,
      src: "/images/6.jpg",
      title: "Wildlife Gallery",
      link: "/wildlife"
    },
    {
      id: 7,
      src: "/images/7.jpg",
      title: "Architecture Two",
      link: "/architecture"
    },
    {
      id: 8,
      src: "/images/8.jpg",
      title: "Landscapes Two",
      link: "/landscapes"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-light text-gray-900 mb-8">Featured Gallery</h1>
        
        <div className="grid grid-cols-2 gap-4">
          {galleries.map((gallery) => (
            <div
              key={gallery.id}
              className="relative cursor-pointer"
              onClick={() => handleImageClick(gallery.link)}
            >
              <div className="group relative overflow-hidden">
                <img
                  src={gallery.src}
                  alt={gallery.title}
                  className="w-full h-[25vh] object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-lg font-light">{gallery.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};