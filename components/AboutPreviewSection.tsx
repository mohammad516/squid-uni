"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};



const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

const values = [
  "Cutting-edge Medical Care",
  "Holistic Wellness Philosophy",
  "Total Wellness — Physical, Emotional & Cellular"
];

export default function AboutPreviewSection() {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0px", "40px"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  return (
    <motion.section
      ref={ref}
      className="py-20 md:py-24 lg:py-28 bg-gradient-to-br from-[#EAEAEA] via-[#F9FAFB] to-[#DA0037]/20 relative overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(8,217,214,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <motion.div
          className="rounded-2xl bg-gradient-to-br from-white to-[#EAEAEA]/30 shadow-xl overflow-hidden border border-white/50"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Enhanced Image */}
            <motion.div
              ref={imageRef}
              className="relative h-[400px] lg:h-full w-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div
                className="relative h-full w-full overflow-hidden rounded-none lg:rounded-br-3xl"
                style={{ y, scale }}
              >
                <Image
                  src="https://res.cloudinary.com/dp0wyn4dg/image/upload/f_auto,q_auto/v1761327757/about1_kthaqe.jpg"
                  alt="Revive Wellness Center - Modern wellness facility"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  quality={90}
                />
                {/* Premium gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/15 pointer-events-none transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none opacity-60" />
                
                {/* Ambient glow effect */}
                <div className="absolute -inset-2 bg-white/20 blur-2xl opacity-50 pointer-events-none" />
              </motion.div>
              
              {/* Bottom shadow for depth */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              className="flex flex-col justify-center p-6 lg:p-12"
              initial={fadeInRight.initial}
              animate={fadeInRight.animate}
              transition={fadeInRight.transition}
            >
              <motion.p
                className="text-sm font-bold uppercase tracking-wider text-[#DA0037] mb-4"
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={fadeInUp.transition}
              >
                About Us
              </motion.p>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-[#171717] mb-6 font-serif tracking-wide leading-[1.1]"
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={fadeInUp.transition}
              >
                Revive your health, Renew your Life!
              </motion.h2>

              <motion.div
                className="w-16 h-[1px] bg-gradient-to-r from-[#DA0037] to-[#FF2E63] mb-8"
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={fadeInUp.transition}
              />

              <motion.div 
                className="max-w-lg mb-8 space-y-5" 
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={fadeInUp.transition}
              >
                <p className="text-[#171717]/90 text-lg md:text-xl leading-relaxed font-sans">
                  At <span className="font-semibold text-[#DA0037]">Revive</span>, we combine cutting-edge medical care with a holistic wellness philosophy to help you look and feel your best from the inside out.
                </p>
                <p className="text-[#171717]/90 text-lg md:text-xl leading-relaxed font-sans">
                  Our goal is to support your journey toward optimal health, vitality, and confidence — with compassion and excellence.
                </p>
                <blockquote className="border-l-4 border-[#DA0037] pl-4 italic text-[#171717]/80 text-lg">
                  &ldquo;We believe in total wellness — physical, emotional, and cellular.&rdquo;
                </blockquote>
              </motion.div>

              <motion.ul 
                className="space-y-4 mb-10"
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={fadeInUp.transition}
              >
                {values.map((value, index) => (
                  <motion.li
                    key={value}
                    className="flex items-center text-[#171717]/90 text-lg font-sans"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-[#DA0037] to-[#FF2E63] rounded-full mr-4 flex-shrink-0 shadow-sm">
                      <Check size={14} className="text-white" />
                    </div>
                    {value}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={fadeInUp.transition}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#DA0037] to-[#FF2E63] px-12 py-4 text-base font-semibold text-white shadow-[0_8px_30px_rgb(8,217,214,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgb(8,217,214,0.6)] hover:from-[#FF2E63] hover:to-[#DA0037] hover:ring-2 hover:ring-[#DA0037]/30 hover:ring-offset-2"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}