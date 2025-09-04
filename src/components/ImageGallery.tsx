import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  link: string;
  aspectRatio?: 'portrait' | 'landscape';
}

const ImageGallery: React.FC = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<GalleryImage[]>([]);

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
      const baseImages: GalleryImage[] = [
        {
          id: 1,
          src: "/images/1.jpg",
          title: "Modern Architecture",
          category: "Architecture",
          link: "/architecture"
        },
        {
          id: 2,
          src: "/images/2.jpg",
          title: "Mountain Vista",
          category: "Landscapes",
          link: "/landscapes"
        },
        {
          id: 3,
          src: "/images/3.jpg",
          title: "City Lights",
          category: "Urbanscapes",
          link: "/urbanscapes"
        },
        {
          id: 4,
          src: "/images/4.jpg",
          title: "Street Life",
          category: "Street",
          link: "/street"
        },
        {
          id: 5,
          src: "/images/5.jpg",
          title: "Portrait Study",
          category: "Portraits",
          link: "/portraits"
        },
        {
          id: 6,
          src: "/images/6.jpg",
          title: "Wild Nature",
          category: "Wildlife",
          link: "/wildlife"
        },
        {
          id: 7,
          src: "/images/7.jpg",
          title: "Historic Buildings",
          category: "Architecture",
          link: "/architecture"
        },
        {
          id: 8,
          src: "/images/8.jpg",
          title: "Seascape",
          category: "Landscapes",
          link: "/landscapes"
        }
      ];

      const imagesWithAspectRatio = await Promise.all(
        baseImages.map(async (image) => ({
          ...image,
          aspectRatio: await checkImageAspectRatio(image.src)
        }))
      );

      setImages(imagesWithAspectRatio);
    };

    loadImages();
  }, []);

  const handleImageClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-light text-gray-900 mb-8">Featured Gallery</h1>
        
        <div className="grid gap-2">
          {images.map((image) => (
            <div
              key={image.id}
              className={`relative cursor-pointer ${
                image.aspectRatio === 'portrait' ? 'col-span-6 md:col-span-6' : 'col-span-12'
              }`}
              onClick={() => handleImageClick(image.link)}
            >
              <div className="group relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full h-auto object-cover ${
                    image.aspectRatio === 'portrait' ? 'max-h-[80vh]' : 'max-h-[60vh]'
                  }`}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-lg font-light">{image.title}</h3>
                  <p className="text-sm opacity-75">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery; 

