"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ChevronDown, Award, Palette, Clock, Users, Building2, Headphones, Star } from "lucide-react";
import Image from "next/image";

// Hero Section Component
const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const headingY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-24 z-0"
    >
      {/* Background Image with Motion - Full Coverage */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full z-[-1]"
      >
        <Image
          src="/3.jpg"
          alt="Squad Link - Professional uniforms"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          unoptimized
        />
        {/* Soft gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center items-center min-h-screen">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ y: headingY }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight relative"
        >
          <motion.span
            className="block text-white"
            animate={{
              color: ["#FFFFFF", "#DA0037", "#FFFFFF"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            About Us
          </motion.span>
          {/* Glow effect behind text */}
          <motion.div
            className="absolute inset-0 blur-2xl sm:blur-3xl bg-gradient-to-r from-[#DA0037]/40 via-[#DA0037]/40 to-[#DA0037]/40 sm:from-[#DA0037]/40 sm:via-[#DA0037]/40 sm:to-[#DA0037]/40 -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.h1>
      </div>

      {/* Scroll Indicator - Enhanced Animation */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-10 h-10 border-2 border-white/60 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/5"
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Introduction Section
const IntroductionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="pt-20 md:pt-28 pb-0 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] md:min-h-[700px]">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-full min-h-[400px] lg:min-h-[700px]"
        >
          <Image
            src="/1.jpg"
            alt="Squad Link - Professional uniform design"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center bg-white p-8 md:p-12 lg:p-16"
        >
          <div className="max-w-2xl">
            <p className="text-sm md:text-base text-[#444444] mb-3 uppercase tracking-wide">
              What We Do
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#DA0037] mb-8 tracking-tight"
            >
              Quality & Excellence
            </h2>
            
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-base md:text-lg text-[#444444] leading-relaxed">
                Squad Link provides high-quality uniforms for hospitality, security, retail, and corporate teams. We design and produce durable, elegant, and professional uniforms that match your brand identity.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Who We Are Section
const WhoWeAreSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="py-0 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] md:min-h-[700px]">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center bg-white p-8 md:p-12 lg:p-16 order-2 lg:order-1"
        >
          <div className="max-w-2xl">
            <p className="text-sm md:text-base text-[#444444] mb-3 uppercase tracking-wide">
              About Us
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#DA0037] mb-8 tracking-tight"
            >
              Who We Are
            </h2>
            
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-base md:text-lg text-[#444444] leading-relaxed">
                Squad Link is a premium uniform provider dedicated to delivering elegance, quality, and professionalism in every piece we create. With a focus on quality, durability, and modern styling, we create uniforms for hotels, restaurants, security teams, corporate staff, retail workers, and industrial crews.
              </p>
              <p className="text-base md:text-lg text-[#444444] leading-relaxed">
                Our work is guided by honesty, commitment, and strict respect for delivery deadlines — values that our clients trust deeply.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full h-full min-h-[400px] lg:min-h-[700px] order-1 lg:order-2"
        >
          <Image
            src="/2.jpg"
            alt="Squad Link - Professional uniform design"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

// Why Choose Squad Link Section
const WhyChooseSection = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use high-grade fabrics, durable stitching, and professional finishing to ensure every uniform looks elegant, lasts long, and feels comfortable."
    },
    {
      icon: Palette,
      title: "Custom Designs",
      description: "Every piece is tailored to match your brand identity. From embroidery to colors and styles, we customize uniforms exactly the way you want."
    },
    {
      icon: Clock,
      title: "Honest & Reliable Delivery",
      description: "We deliver on time — every time. Our honesty, commitment, and respect for deadlines make us a trusted partner for leading companies."
    },
    {
      icon: Users,
      title: "Hardworking Team",
      description: "Our dedicated team works with passion, precision, and attention to every detail. We treat every order as if it were our own."
    },
    {
      icon: Building2,
      title: "Trusted by Top Brands",
      description: "From restaurants and hotels to security firms and corporate offices, major Lebanese brands rely on Squad Link for quality, reliability, and professionalism."
    },
    {
      icon: Headphones,
      title: "End-to-End Support",
      description: "From designing your uniforms to production and delivery, we handle everything smoothly, ensuring a hassle-free experience."
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#171717] mb-4 tracking-wide"
          >
            Why Choose Squad Link
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#DA0037] to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-white to-[#EDEDED] rounded-xl p-6 md:p-8 shadow-lg border border-[#EDEDED] hover:shadow-2xl transition-all duration-500 group"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#DA0037] to-[#DA0037] rounded-xl mb-6 shadow-md group-hover:from-[#444444] group-hover:to-[#444444] transition-all duration-300"
              >
                <feature.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-[#171717] mb-4 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-[#444444] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Main About Component
const About = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <div className="relative z-10 bg-white">
        {/* Introduction Section */}
        <IntroductionSection />

        {/* Who We Are Section */}
        <WhoWeAreSection />

        {/* Why Choose Squad Link Section */}
        <WhyChooseSection />
      </div>
    </div>
  );
};

export default About;
