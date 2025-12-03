// About page inspired by Contact.tsx style and AboutPreviewSection color palette
"use client";
import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Heart, Sparkles, Leaf, ChevronDown, HeartPulse, Brain, Building2, Shield, ShoppingBag, Briefcase, Car, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


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
          alt="Revive Wellness Center - Serene wellness environment"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
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
            Our Clients
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


// Vision & Mission Section
const VisionMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-28 bg-gradient-to-br from-[#E7E9F8]/40 via-white to-[#A7AEDC]/20"
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
            Clients & Partners
          </h2>
          <p className="text-lg md:text-xl text-[#444444] italic mb-6">
          Where quality meets trusted partnerships
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#DA0037] to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
          >
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#DA0037] to-[#DA0037] rounded-full mb-4 shadow-sm"
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#171717] mb-4 tracking-wide">
              Our Commitment
              </h3>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#DA0037] to-[#DA0037] mx-auto"></div>
            </div>
            <p className="text-[#171717]/90 text-lg leading-relaxed text-center">
            At Squad Link, we are honored to serve some of the most prestigious and respected names in the market. Our commitment to quality, honesty, and on-time delivery has earned the trust of renowned brands such as Em Sherif, Patchi, MEA Security, Advanced Car Rental, and many others. These partnerships reflect our dedication to excellence and our ability to deliver premium uniforms that meet the standards of top-tier companies.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
          >
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#DA0037] to-[#DA0037] rounded-full mb-4 shadow-sm"
              >
                <Heart className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#171717] mb-4 tracking-wide">
                Our Partners
              </h3>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#DA0037] to-[#DA0037] mx-auto"></div>
            </div>
            <p className="text-[#171717]/90 text-lg leading-relaxed text-center">
            We are proud to be trusted by some of the most respected brands in Lebanon and the region. Our commitment to quality, honesty, and timely service has enabled us to build strong, long-lasting partnerships across hospitality, security, retail, and corporate sectors. Each client inspires us to deliver perfection in every detail.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Wellness Philosophy Section
const WellnessPhilosophySection = () => {
  const philosophyItems = useMemo(() => [
    {
      icon: Building2,
      title: "Hotels & Restaurants"
    },
    {
      icon: Shield,
      title: "Security Companies"
    },
    {
      icon: ShoppingBag,
      title: "Retail Chains"
    },
    {
      icon: Briefcase,
      title: "Corporate Offices"
    },
    {
      icon: Car,
      title: "Car Rental Agencies"
    },
    {
      icon: Users,
      title: "NGOs & Institutions"
    }
  ], []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-28"
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
            Our Valued Clients Include
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#DA0037] to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white/70 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 group flex flex-col items-center text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#DA0037] to-[#DA0037] rounded-xl flex items-center justify-center shadow-md group-hover:from-[#444444] group-hover:to-[#444444] transition-all duration-300 mb-4"
              >
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </motion.div>
              <h3 className="text-lg md:text-xl font-bold text-[#171717] tracking-wide">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Customers Logos Section
const CustomersLogosSection = () => {
  const clientLogos = useMemo(() => [
    "advanced.png",
    "alshams1.png",
    "allotaxi.png",
    "aoun.png",
    "black.png",
    "carr.png",
    "cremino1.png",
    "emsherif.png",
    "hola.png",
    "metro.png",
    "pat.png",
    "sant.png",
  ], []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-28 bg-gradient-to-br from-[#EDEDED] via-white to-[#EDEDED]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DA0037] via-[#DA0037] to-[#DA0037] mb-4 tracking-tight leading-normal pb-2"
            style={{ lineHeight: '1.2' }}
          >
            Trusted by Leading Brands
          </h2>
          <p className="text-lg md:text-xl text-[#171717]/70 mb-6 max-w-2xl mx-auto">
            We're proud to partner with some of the most respected names in the industry
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#DA0037] to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.08,
                transition: { duration: 0.3 }
              }}
              className="group relative flex items-center justify-center h-48 md:h-64 lg:h-80"
            >
              <Image
                src={`/customers logo/${logo}`}
                alt={logo.replace(".png", "").replace(/_/g, " ")}
                width={800}
                height={320}
                loading="lazy"
                className="object-contain h-full w-auto opacity-90 group-hover:opacity-100 transition-all duration-500 grayscale-0 group-hover:scale-110 drop-shadow-md group-hover:drop-shadow-lg"
              />
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-[#171717]/60 font-medium">
            And many more trusted partners
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Meet Our Team Section

// const MeetOurTeamSection = () => {
//   const teamMembers = [
//     {
//       image: "https://res.cloudinary.com/dp0wyn4dg/image/upload/f_auto,q_auto/v1761330497/team1_erocpm.webp",
//       name: "Dr. Sarah Al-Mansouri",
//       title: "Integrative Medicine Specialist",
//       quote: "True healing begins when we address the whole person, not just the symptoms."
//     },
//     {
//       image: "https://res.cloudinary.com/dp0wyn4dg/image/upload/f_auto,q_auto/v1761330497/team2_lmf0n1.jpg", 
//       name: "Dr. David Chen",
//       title: "Aesthetic Consultant",
//       quote: "Beauty is confidence, and confidence comes from feeling your absolute best."
//     },
//     {
//       image: "https://res.cloudinary.com/dp0wyn4dg/image/upload/f_auto,q_auto/v1761330498/team3_zqjrxp.jpg",
//       name: "Dr. Lina Haddad", 
//       title: "Wellness Coach",
//       quote: "Every individual's wellness journey is unique, and that's what makes it beautiful."
//     },
//     {
//       image: "https://res.cloudinary.com/dp0wyn4dg/image/upload/f_auto,q_auto/v1761330498/team4_uqqsqz.jpg",
//       name: "Dr. Omar Youssef",
//       title: "Anti-Aging Specialist", 
//       quote: "Age is just a number when you have the right tools for healthy aging."
//     }
//   ];

//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <motion.section
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.8 }}
//       className="py-20 md:py-28 bg-gradient-to-br from-[#E7E9F8]/40 via-white to-[#A7AEDC]/20"
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-center mb-16"
//         >
//           <h2 
//             className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] mb-4 font-serif tracking-wide"
//             style={{ fontFamily: 'var(--font-playfair), serif' }}
//           >
//             Meet Our Team of Experts
//           </h2>
//           <p className="text-lg md:text-xl text-[#2E2E4D]/70 italic font-serif mb-6">
//             A passionate team of medical and wellness professionals dedicated to your transformation
//           </p>
//           <div className="w-24 h-[1px] bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] mx-auto"></div>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="group relative bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
//             >
//               {/* Professional Portrait */}
//               <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                 />
//                 {/* Gradient overlay on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#6E76B4]/20 to-[#A7AEDC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
//               </div>

//               {/* Team Member Info */}
//               <div className="text-center">
//                 <h3 className="text-xl font-bold text-[#2E2E4D] mb-2 font-serif tracking-wide">
//                   {member.name}
//                 </h3>
//                 <p className="text-[#6E76B4] font-medium text-sm mb-4">
//                   {member.title}
//                 </p>
                
//                 {/* Quote - appears on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#6E76B4]/90 to-[#A7AEDC]/90 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-6">
//                   <p className="text-white text-sm font-medium italic text-center leading-relaxed transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                     &ldquo;{member.quote}&rdquo;
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// Call to Action Section
// const CTASection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <motion.section
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.8 }}
//       className="py-20 md:py-28 bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC]"
//     >
//       <div className="max-w-4xl mx-auto px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <h2 
//             className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif tracking-wide"
//             style={{ fontFamily: 'var(--font-playfair), serif' }}
//           >
//             Begin Your Wellness Journey
//           </h2>
//           <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//             Experience the perfect blend of innovation and holistic healing at Revive Wellness Center
//           </p>
//           
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           >
//             <Link href="/contact">
//               <motion.button
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white text-[#6E76B4] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
//               >
//                 Book Your Consultation
//               </motion.button>
//             </Link>
//             
//             <Link href="/about">
//               <motion.button
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
//               >
//                 Learn More
//               </motion.button>
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// Main Client Component
const Client = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <div className="relative z-10 bg-gradient-to-br from-[#E7E9F8]/40 via-white to-[#A7AEDC]/20">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(110,118,180,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
        </div>
        
        <div className="relative z-10">
          {/* Customers Logos Section */}
          <CustomersLogosSection />

          {/* Vision & Mission Section */}
          <VisionMissionSection />

          {/* Wellness Philosophy Section with Background */}
          <div className="relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/red.webp"
                alt="Wellness Philosophy Background"
                fill
                loading="lazy"
                className="object-cover"
                sizes="100vw"
                quality={75}
              />
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E7E9F8]/80 via-white/70 to-[#A7AEDC]/60"></div>
            </div>

            {/* Wellness Philosophy Section */}
            <div className="relative z-10">
              <WellnessPhilosophySection />
            </div>
          </div>

          {/* Meet Our Team Section */}
          {/* <MeetOurTeamSection /> */}
        </div>
      </div>

      {/* CTA Section */}
      {/* <CTASection /> */}
    </div>
  );
};

export default Client;