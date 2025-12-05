"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    id: "Premium Polo Shirts",
    title: "Premium Polo Shirts",
    image: "https://res.cloudinary.com/dp0wyn4dg/image/upload/v1764942253/polo_tk4bda.webp",
    gradient: "from-[#DA0037] via-[#DA0037] to-[#DA0037]",
    position: "col-2-row-1", // Center top
    description: "High-quality polos designed for comfort, durability, and a sharp uniform look. Available with custom embroidery and full color options.",
  },
  {
    id: "Executive Shirts",
    title: "Executive Shirts",
    image: "https://res.cloudinary.com/dp0wyn4dg/image/upload/v1764942253/shirts_mnd6j2.webp",
    gradient: "from-[#DA0037] to-[#DA0037]",
    position: "col-3-row-1", // Top right
    description: "Elegant, tailored shirts made for hotels, reception teams, and corporate staff. Premium fabrics and flawless finishing for a polished appearance.",
  },
  {
    id: "Security Cargo Pants",
    title: "Security Cargo Pants",
    image: "https://res.cloudinary.com/dp0wyn4dg/image/upload/v1764940753/2-1_vx64h2.webp",
    gradient: "from-[#DA0037] to-[#DA0037]",
    position: "col-1-row-2", // Bottom left
    description: "Reinforced, multi-pocket cargo pants built for strength and everyday performance. Perfect for security and industrial teams.",
  },
  {
    id: "Chef Jackets",
    title: "Chef Jackets",
    image: "https://res.cloudinary.com/dp0wyn4dg/image/upload/v1764940753/chef_yaoqz0.webp",
    gradient: "from-[#DA0037] to-[#DA0037]",
    position: "col-3-row-2", // Bottom right
    description: "Professional chef coats crafted for heat, comfort, and long work hours. Stylish cuts with durable stitching and breathable materials.",
  },
  {
    id: "Custom Caps",
    title: "Custom Caps",
    image: "https://res.cloudinary.com/dp0wyn4dg/image/upload/v1764940753/2_zrtrxq.webp",
    gradient: "from-[#DA0037] to-[#DA0037]",
    position: "col-1-row-1", // Top left
    description: "High-quality caps available in multiple colors with your logo embroidered. Ideal for staff identity, events, and promotional use.",
  },
  {
    id: "Ties & Accessories",
    title: "Ties & Accessories",
    image: "https://res.cloudinary.com/dp0wyn4dg/image/upload/v1764940753/4_yy4tbf.webp",
    gradient: "from-[#DA0037] to-[#DA0037]",
    position: "col-2-row-2", // Center bottom
    description: "Finishing pieces that complete the uniform — including ties, scarves, name badges, and personalized accessories.",
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.3,
    },
  },
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5,
    },
  },
};

const labelVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 40px rgba(8, 217, 214, 0.3)",
    transition: {
      duration: 0.3,
    },
  },
};

export default function CategoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1); // Mobile: 1 item
      } else if (width < 1024) {
        setItemsPerView(2); // Tablet: 2 items
      } else if (width < 1280) {
        setItemsPerView(3); // Small desktop: 3 items
      } else {
        setItemsPerView(4); // Large desktop: 4 items
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, categories.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Auto-reset index when itemsPerView changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, maxIndex, currentIndex]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-gradient-to-b from-white via-[#EDEDED]/30 to-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ opacity, y }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#DA0037]/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.2, 0.8]) }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#DA0037]/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-14"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-[#171717] via-[#DA0037] to-[#171717] bg-clip-text text-transparent animate-gradient">
              Featured Products
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DA0037] to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.h2>
        </motion.div>

        {/* Categories Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white active:bg-white rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 -translate-x-2 md:translate-x-0 touch-manipulation pointer-events-auto"
            aria-label="Previous"
            style={{
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ChevronLeft className="w-7 h-7 md:w-8 md:h-8 text-[#DA0037] pointer-events-none" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white active:bg-white rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 translate-x-2 md:translate-x-0 touch-manipulation pointer-events-auto"
            aria-label="Next"
            style={{
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ChevronRight className="w-7 h-7 md:w-8 md:h-8 text-[#DA0037] pointer-events-none" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="overflow-hidden relative"
          >
            <motion.div
              className="flex"
              animate={{
                x: `-${currentIndex * (100 / itemsPerView)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {categories.map((category, index) => {
                const gap = itemsPerView === 1 ? 0 : itemsPerView === 2 ? 8 : itemsPerView === 3 ? 16 : 24;
                return (
                  <motion.div
                    key={category.id}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover="hover"
                    variants={cardVariants}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`
                      relative overflow-hidden bg-[#EEE3CB]
                      aspect-[4/5]
                      flex-shrink-0
                      group cursor-pointer
                      shadow-lg hover:shadow-2xl
                      transition-shadow duration-300
                    `}
                    style={{
                      width: `calc(${100 / itemsPerView}% - ${gap * (itemsPerView - 1) / itemsPerView}px)`,
                      marginRight: index < categories.length - 1 ? `${gap}px` : '0',
                    }}
                  >

                {/* Image with parallax effect */}
                <motion.div
                  variants={imageVariants}
                  className="absolute inset-0 z-10 flex items-center justify-center"
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-contain"
                    style={{ objectPosition: 'center' }}
                  />
                </motion.div>

                {/* Gradient overlay with animation */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-20"
                  initial={{ opacity: 0.3 }}
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent"
                  whileHover={{
                    borderColor: "#DA0037",
                    boxShadow: "0 0 30px rgba(8, 217, 214, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Label */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] z-10">
                  <div className="bg-black/40 backdrop-blur-sm border border-white px-6 py-3 text-center">
                    <span className="text-white font-semibold text-sm tracking-wide uppercase drop-shadow-lg">
                      {category.title}
                    </span>
                  </div>
                </div>

                {/* Floating particles effect */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-[#DA0037] rounded-full opacity-0 group-hover:opacity-60"
                    initial={{
                      x: `${20 + i * 30}%`,
                      y: `${30 + i * 20}%`,
                      scale: 0,
                    }}
                    whileHover={{
                      scale: [0, 1, 0],
                      y: [`${30 + i * 20}%`, `${20 + i * 20}%`, `${30 + i * 20}%`],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Dots Indicator for Mobile */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {Array.from({ length: categories.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#DA0037]"
                    : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Description */}
      <AnimatePresence>
        {selectedCategory && selectedCategoryData && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCategory(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCategory(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white rounded-2xl sm:rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 md:p-10 max-h-[90vh] sm:max-h-[85vh] overflow-y-auto"
              >
                {/* Close Button - Mobile Optimized */}
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-3 sm:p-3 md:p-4 rounded-full bg-white/90 hover:bg-[#EDEDED] active:bg-[#DA0037]/10 transition-all duration-200 touch-manipulation shadow-lg hover:shadow-xl z-50"
                  aria-label="Close"
                  style={{
                    minWidth: '44px',
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <X className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#171717] sm:text-[#171717]" />
                </button>

                {/* Category Image */}
                <div className="relative w-full h-64 md:h-80 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={selectedCategoryData.image}
                    alt={selectedCategoryData.title}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Category Title */}
                <div className="mb-6">
                  <h3 className={`text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r ${selectedCategoryData.gradient} bg-clip-text text-transparent`}>
                    {selectedCategoryData.title}
                  </h3>
                  <div className={`h-1 w-24 bg-gradient-to-r ${selectedCategoryData.gradient} rounded-full`} />
                </div>

                {/* Description */}
                <p className="text-lg text-[#171717]/80 leading-relaxed">
                  {selectedCategoryData.description}
                </p>

                {/* Gradient Accent */}
                <div className={`mt-6 h-1 bg-gradient-to-r ${selectedCategoryData.gradient} rounded-full`} />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
