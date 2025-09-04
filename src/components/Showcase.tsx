
import { useNavigate } from "react-router-dom";

const galleries = [
  {
    id: 1,
    src: "/images/1.jpg",
    title: "Urbanscapes",
    link: "/gallery/urbanscapes" // Updated path
  },
  {
    id: 2,
    src: "/images/2.jpg",
    title: "Landscapes",
    link: "/gallery/landscapes" // Updated path
  },
  {
    id: 3,
    src: "/images/3.jpg",
    title: "Macros",
    link: "/gallery/macro" // Updated path
  },
  {
    id: 4,
    src: "/images/4.jpg",
    title: "Nature",
    link: "/gallery/nature" // Updated path
  },
  {
    id: 5,
    src: "/images/5.jpg",
    title: "Portraits",
    link: "/gallery/portraits" // Updated path
  },
  {
    id: 6,
    src: "/images/6.jpg",
    title: "Wildlife Gallery",
    link: "/gallery/wildlife" // Updated path
  }
];

export const Showcase = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full h-screen bg-white flex items-center justify-center">
      <div className="w-4/5 h-5/6">
        <div className="grid grid-cols-2 gap-4 h-full">
          {galleries.map((gallery) => (
            <div
              key={gallery.id}
              className="w-full h-full cursor-pointer flex items-center justify-center"
              onClick={() => navigate(gallery.link)}
            >
              <div className="group relative w-full h-full overflow-hidden">
                <img
                  src={gallery.src}
                  alt={gallery.title}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 overlay "
                />
                <div 
                  className="absolute top-0 left-0 h-full p-4 
                  text-white opacity-0 group-hover:opacity-100 
                  transform -translate-x-full group-hover:translate-x-0 
                  transition-all duration-300 
                  bg-gradient-to-r from-black/70 to-transparent
                  flex items-center justify-center "
                >
                  <h3 
                    className="text-4xl font-bold tracking-[0.4em] leading-none"
                    style={{ 
                      writingMode: 'vertical-lr', 
                      textOrientation: 'upright'
                    }}
                  >
                    {gallery.title.split(' ')[0].toUpperCase()}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};