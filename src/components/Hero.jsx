import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/slide5.jpg",
  "/slide2.jpg",
  "/slide1.jpg",
  "/slide3.jpg",
  "/slide4.jpg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence>
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt="Jesuit background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      {/* Text Content */}
      <div className="relative text-center text-white px-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
        >
          Jesuit Education Office – Southern Africa Province
        </motion.h1>
        <p className="text-sm md:text-lg max-w-2xl mx-auto text-gray-200">
          Forming men and women with and for others across our schools in Zimbabwe,
          Zambia, Malawi, Mozambique, South Africa, and Botswana.
        </p>
      </div>
    </section>
  );
}
