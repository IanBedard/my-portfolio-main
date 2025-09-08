import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalleryImage {
  id: number;
  src?: string;  // Make src optional
  title?: string; // Make title optional
  category?: string; // Make category optional
  link?: string; // Make link optional
  text?: string; // Add text property
  aspectRatio?: 'portrait' | 'landscape';
}

const galleryImages = {
  urbanscapes: [
    {
      id: 1,
      src: "/images/urbanscapes/1.jpg",
      title: "City View",
      category: "Urbanscapes",
      link: "/urbanscapes"
    },
    // ... more urbanscape images
  ],
  landscapes: [
    {
      id: 1,
      src: "/images/landscapes/1.jpg",
      title: "Mountain Vista",
      category: "Landscapes",
      link: "/landscapes"
    },
    // ... more landscape images
  ],portraits: [
   {
      id: 2,
      src: "/images/portraits/1.jpg",
      title: "Mountain Vista",
      category: "Portraits",
      link: "/portraits"
    },{
      id: 3,
      src: "/images/portraits/2.jpg",
      title: "Mountain Vista",
      category: "Portraits",
      link: "/portraits"
    },{
      id: 4,
      src: "/images/portraits/3.jpg",
      title: "Mountain Vista",
      category: "Portraits",
      link: "/portraits"
    },  {
      id: 1,
      text: "Discover the beauty of natural landscapes",
    },{
      id: 5,
      src: "/images/portraits/4.jpg",
      title: "Mountain Vista",
      category: "Portraits",
      link: "/portraits"
    },{
      id: 6,
      src: "/images/portraits/5.jpg",
      title: "Mountain Vista",
      category: "Portraits",
      link: "/portraits"
    },{
      id: 7,
      src: "/images/portraits/6.jpg",
      title: "Mountain Vista",
      category: "Portraits",
      link: "/portraits"
    },  {
      id: 1,
      text: "Discover the beauty of natural landscapes",
    },{
      id: 8,
      src: "/images/portraits/7.jpg",
      title: "Mountain Vista",
      category: "Portraits",
      link: "/portraits"
    },{
      id: 9,
      src: "/images/portraits/8.jpg",
      title: "Mountain Vista",
      category: "Portraits",
      link: "/portraits"
    }
   
  ],
  // Add other categories following the same pattern
};

const getCategoryTitle = (category: string | undefined): string => {
  if (!category) return '';
  
  // Capitalize first letter and handle special cases
  const formatted = category.charAt(0).toUpperCase() + category.slice(1);
  return formatted === 'Urbanscapes' ? 'Urban Landscapes' : formatted;
};

const ImageGallery: React.FC = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const checkImageAspectRatio = (src: string): Promise<'portrait' | 'landscape'> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve(img.height > img.width ? 'portrait' : 'landscape');
      };
      img.onerror = () => {
        resolve('landscape');
      };
      img.src = src;
    });
  };

  useEffect(() => {
    const loadImages = async () => {
      const categoryImages = galleryImages[category as keyof typeof galleryImages] || [];
      
      const imagesWithAspectRatio = await Promise.all(
        categoryImages.map(async (image) => ({
          ...image,
          // Only check aspect ratio if src exists
          aspectRatio: image.src ? await checkImageAspectRatio(image.src) : 'landscape'
        }))
      );

      setImages(imagesWithAspectRatio);
    };

    loadImages();
  }, [category]);

  const handleImageClick = (event: React.MouseEvent, image: GalleryImage) => {
    event.preventDefault();
    event.stopPropagation();
    if (image.src) {
      // Find the correct index in the filtered slides array
      const slideIndex = slides.findIndex(slide => slide.src === image.src);
      if (slideIndex !== -1) {
        setLightboxIndex(slideIndex);
        setLightboxOpen(true);
      }
    }
  };

  const slides = images
    .filter(image => image.src) // Only include items with src
    .map(image => ({
      src: image.src as string,
      alt: image.title,
    }));

  return (
    <div className="min-h-screen bg-white py-8 px-4 pt-25">
      <div className="max-w-7xl mx-auto">
        {/* Add the heading here */}
        <h1 className="text-4xl font-light text-gray-900 mb-12 tracking-wider">
          {getCategoryTitle(category)}
        </h1>

        <div className="grid gap-2">
          {images.map((image) => (
            image.text ? (
              <div key={image.id} className="col-span-12 py-8 px-4 text-center">
                <p className="text-2xl font-light text-gray-700">{image.text}</p>
              </div>
            ) : (
              <div
                key={image.id}
                className={`relative cursor-pointer ${
                  image.aspectRatio === 'portrait' ? 'col-span-6 md:col-span-6' : 'col-span-12'
                }`}
                onClick={(e) => handleImageClick(e, image)}
              >
                {image.src && (
                  <div className="group relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className={`w-full h-auto object-cover ${
                        image.aspectRatio === 'portrait' ? 'max-h-[70vh]' : 'max-h-[100vh]'
                      }`}
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 overlay" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-lg font-light">{image.title}</h3>
                      <p className="text-sm opacity-75">{image.category}</p>
                    </div>
                  </div>
                )}
              </div>
            )
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </div>
  );
};

export default ImageGallery;

