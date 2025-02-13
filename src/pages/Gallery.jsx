import { useState } from "react";
import heroimage from "../assets/h2.jpg";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
const Gallery = () => {
  // Dynamically import all images
  const images = Object.values(
    import.meta.glob("../assets/Gallery/*.{jpg,jpeg,png,webp}", { eager: true })
  ).map((module) => module.default);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index); // Set the index of the clicked image
  };

  const closeLightbox = () => {
    setLightboxIndex(null); // Close the lightbox
  };

  return (
    <>
      <section
        className="relative bg-cover bg-center h-[300px] flex items-center justify-center mb-8"
        style={{
          backgroundImage: `url(${heroimage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-white">
          Gallery
        </h1>
      </section>
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pr-12 pl-12 mb-8 cursor-pointer">
          {images.map((image, index) => (
            <div key={index}onClick={() => openLightbox(index)} >
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={`Gallery Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images.map((img) => ({ url: img }))}
          startIndex={lightboxIndex}
          onClose={closeLightbox} // Close lightbox
        />
      )}
    </>
  );
};

export default Gallery;
