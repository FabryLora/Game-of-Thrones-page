import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import chevron from "../../images/icons/chevron-down-solid.svg"; // Adjust the import as necessary

const Gallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleNextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <>
      <h2 className="border-b-2 text-2xl font-bold">Galeria</h2>
      <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="h-60 w-full cursor-pointer overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImageIndex(index)}
          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
          >
            <div className="relative">
              <motion.img
                src={images[selectedImageIndex]}
                alt="Enlarged"
                className="max-h-full max-w-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </div>
            <button
              onClick={handlePrevImage}
              className="fixed left-10 top-1/2 -translate-y-1/2 transform rounded-full p-2 text-2xl text-white max-md:left-1"
            >
              <img src={chevron} className="w-6 rotate-90" alt="" />
            </button>
            <button
              onClick={handleNextImage}
              className="fixed right-10 top-1/2 -translate-y-1/2 transform rounded-full p-2 text-2xl text-white max-md:right-1"
            >
              <img src={chevron} className="w-6 -rotate-90" alt="" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default Gallery;
