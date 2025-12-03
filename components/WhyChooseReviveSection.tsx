"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Hospital, Users2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type WhyChooseReviveSectionProps = {
  imageSrc?: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

const headerVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

const imageVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9, rotateX: 15 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

const underlineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  show: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

const features = [
  {
    Icon: Hospital,
    title: "Inside a Full-Service Hospital",
    description:
      "Revive Wellness Center is the only center in the region located within a leading hospital, providing unmatched medical credibility and access to a trusted patient base.",
    iconBg: "from-[#DA0037]/80 to-[#DA0037]/60",
    hasStructuredList: false,
  },
  {
    Icon: Users2,
    title: "Multispecialty Collaboration",
    description: "Comprehensive care across multiple specialties:",
    iconBg: "from-[#DA0037]/80 to-[#DA0037]/60",
    hasStructuredList: true,
    services: [
      {
        category: "Anti-Aging Department",
        services: ["Age gracefully, Live radiantly!"],
        icon: "🧓",
      },
      {
        category: "Dermatology",
        services: ["Healthy skin", "Beautiful you!"],
        icon: "💆‍♀️",
      },
      {
        category: "Plastic Surgery",
        services: ["Refine, Restore and Reimagine!"],
        icon: "⚕️",
      },
      {
        category: "IVF & Gynecology",
        services: ["Where hope begins description!"],
        icon: "🧬",
      },

      {
        category: "Dental",
        services: ["Smile with confidence!"],
        icon: "🦷",
      },

      {
        category: "Andrology & Urology",
        services: ["Men's health, expertly managed!"],
        icon: "🔬",
      },
      {
        category: "Alternative Medicine",
        services: ["Healing through holistic balance!"],
        icon: "🌿",
      },
    ],
  },
];

export default function WhyChooseReviveSection({
  imageSrc = "https://res.cloudinary.com/dp0wyn4dg/image/upload/f_auto,q_auto/v1761330906/h23_iapgpz.jpg",
}: WhyChooseReviveSectionProps) {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-2%", "4%"]);

  const router = useRouter(); // ✅ تمت الإضافة هنا

  return (
    <section className="relative py-10 sm:py-14 md:py-20 lg:py-24 overflow-hidden">
      {/* Animated gradient background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#EAEAEA,_#ffffff_70%)]" />

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-16 sm:-right-32 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-[#DA0037]/20 to-[#DA0037]/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -left-16 sm:-left-32 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-br from-[#DA0037]/20 to-[#DA0037]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-[#171717] leading-tight mb-2 sm:mb-3 md:mb-4">
            Why Choose Revive?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#171717]/70 mt-1 sm:mt-2 font-medium tracking-wide mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            A center of trust, innovation, and holistic care
          </p>
          <motion.div
            className="mx-auto h-1 w-20 sm:w-24 bg-gradient-to-r from-[#DA0037] via-[#DA0037] to-transparent rounded-full"
            variants={underlineVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Feature Cards */}
          <motion.div
            className="space-y-3 sm:space-y-4 md:space-y-6 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group bg-white/70 backdrop-blur-xl border border-white/30 shadow-[0_4px_10px_rgba(0,0,0,0.03),_0_10px_25px_rgba(0,0,0,0.05)] rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300 ease-out"
                whileHover={{ y: -6 }}
              >
                <div className="flex items-start gap-2 sm:gap-3 md:gap-5">
                  <div className="relative">
                    <div
                      className={`flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${feature.iconBg} text-white shadow-lg hover:ring-4 hover:ring-[#DA0037]/30 transition-all duration-300`}
                    >
                      <feature.Icon
                        size={18}
                        className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
                      />
                    </div>
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${feature.iconBg} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-[#171717] mb-1 sm:mb-2 md:mb-3 leading-tight">
                      {feature.title}
                    </h3>

                    {feature.hasStructuredList ? (
                      <div className="space-y-3 sm:space-y-4">
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-[#171717]/80">
                          {feature.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 place-items-stretch">
                          {feature.services?.map((service, serviceIdx) => (
                            <motion.div
                              key={service.category}
                              className="rounded-md sm:rounded-lg md:rounded-xl bg-gradient-to-br from-white to-[#EAEAEA] border border-[#EAEAEA] hover:border-[#DA0037] hover:shadow-md transition-all duration-300 ease-out p-2 sm:p-3 md:p-4 hover:rotate-[0.5deg] hover:scale-105 active:scale-[0.98] sm:active:scale-105 min-w-[120px] sm:min-w-[140px]"
                              initial={{ opacity: 0, y: 8 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.4,
                                delay: serviceIdx * 0.08,
                              }}
                            >
                              <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                                <span className="text-sm sm:text-base md:text-lg">
                                  {service.icon}
                                </span>
                                <h4 className="font-medium text-[#171717] text-xs sm:text-sm md:text-sm">
                                  {service.category}
                                </h4>
                              </div>
                              <p className="text-[#171717]/70 text-xs sm:text-sm leading-relaxed">
                                {service.services.join(", ")}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-700">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Image */}
          <motion.div
            ref={imageRef}
            className="relative order-1 lg:order-2 w-full"
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            style={{ y: parallaxY }}
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 md:-top-8 md:-right-8 w-12 h-12 sm:w-16 sm:h-16 md:w-32 md:h-32 bg-gradient-to-br from-[#DA0037]/30 to-[#DA0037]/20 rounded-full blur-2xl" />

            <div className="relative bg-gradient-to-tr from-[#DA0037]/30 via-white to-[#DA0037]/20 p-[1px] sm:p-[2px] md:p-[3px] rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] shadow-lg">
              <div className="relative overflow-hidden rounded-[0.75rem] sm:rounded-[1.25rem] md:rounded-[1.5rem] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.1)] sm:shadow-[0_10px_30px_rgba(0,0,0,0.1)] md:shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full max-h-[50vh] sm:max-h-[60vh] md:max-h-none">
                  <Image
                    src={imageSrc}
                    alt="Revive Wellness Center facility"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-8 sm:mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            onClick={() => router.push("/services")} // ✅ الزر الآن ينقلك لصفحة الخدمات
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-[#DA0037] to-[#DA0037] text-white font-medium rounded-full shadow-lg hover:translate-x-1 transition-all duration-300 hover:shadow-xl text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover personalized care
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
