"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    icon: "/expertise.svg",
    title: "Expertise",
  },
  {
    icon: "/quality2.png",
    title: "Quality",
  },
  {
    icon: "/solutions.svg",
    title: "Unique Solutions",
  },
  {
    icon: "/speed2.png",
    title: "Speed",
  },
  {
    icon: "/ethics.svg",
    title: "Ethics",
  },
];

export default function FeaturesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [arrowsVisible, setArrowsVisible] = useState(false);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check if arrows should be shown and update scroll state
  const checkScrollState = () => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const hasOverflow = scrollContainer.scrollWidth > scrollContainer.clientWidth;
      setShowArrows(hasOverflow);
      
      setCanScrollLeft(scrollContainer.scrollLeft > 0);
      setCanScrollRight(
        scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth - 1
      );
    }
  };

  // Show arrows and reset fade timer
  const showArrowsWithFade = () => {
    setArrowsVisible(true);
    if (fadeTimeoutRef.current) {
      clearTimeout(fadeTimeoutRef.current);
    }
    fadeTimeoutRef.current = setTimeout(() => {
      setArrowsVisible(false);
    }, 3000);
  };

  // Scroll functions
  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 200; // Approximate card width + gap
      const scrollAmount = cardWidth;
      const targetScroll = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      showArrowsWithFade();
    }
  };

  const handleScroll = () => {
    checkScrollState();
    showArrowsWithFade();
  };

  // Initialize and cleanup
  useEffect(() => {
    checkScrollState();
    window.addEventListener('resize', checkScrollState);
    
    return () => {
      window.removeEventListener('resize', checkScrollState);
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Desktop Layout - Keep exactly as is */}
        <div className="hidden lg:grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center space-y-4"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-[#EDEDED] p-4 shadow-lg shadow-gray-100 transition-all duration-300 group-hover:scale-105">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-[#444444] tracking-wide">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Layout - Horizontal Scrollable */}
        <div className="lg:hidden relative">
          {/* Navigation Arrows */}
          <AnimatePresence>
            {showArrows && arrowsVisible && (
              <>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: canScrollLeft ? 1 : 0.3, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => scrollTo('left')}
                  disabled={!canScrollLeft}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 disabled:cursor-not-allowed"
                  onMouseEnter={showArrowsWithFade}
                  onTouchStart={showArrowsWithFade}
                >
                  <ChevronLeft className="w-5 h-5 text-[#08D9D6]" />
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: canScrollRight ? 1 : 0.3, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => scrollTo('right')}
                  disabled={!canScrollRight}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 disabled:cursor-not-allowed"
                  onMouseEnter={showArrowsWithFade}
                  onTouchStart={showArrowsWithFade}
                >
                  <ChevronRight className="w-5 h-5 text-[#08D9D6]" />
                </motion.button>
              </>
            )}
          </AnimatePresence>

          {/* Scrollable Features Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseEnter={showArrowsWithFade}
            onTouchStart={showArrowsWithFade}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex-shrink-0 snap-center"
              >
                <div className="group flex flex-col items-center justify-center space-y-4 p-4">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-[#EDEDED] p-4 shadow-lg shadow-gray-100 transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={48}
                      height={48}
                      className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-[#444444] tracking-wide">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
