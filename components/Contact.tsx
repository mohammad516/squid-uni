// Contact page styled to match AboutPreviewSection palette and includes real Beirut map
"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Send, ArrowDown, Heart } from "lucide-react";
import { SiWhatsapp, SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";

// Modular Components
const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Animated Background matching AboutPreviewSection */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EDEDED] via-[#EDEDED] to-[#DA0037]/20">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(110,118,180,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
        </div>
        
        {/* Floating SVG Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#DA0037]/20 to-[#DA0037]/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-[#DA0037]/15 to-[#DA0037]/15 rounded-full blur-2xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-[#DA0037]/20 to-[#DA0037]/20 rounded-full blur-xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-bold uppercase tracking-wider text-[#DA0037] mb-8 shadow-lg"
          >
            <Heart className="w-4 h-4 text-[#DA0037]" />
            <span>Premium Uniform Solutions</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-wide relative"
          >
            <motion.span
              className="block"
              animate={{
                color: ["#171717", "#DA0037", "#171717"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
          >
            Contact Us
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
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-[1px] bg-gradient-to-r from-[#DA0037] to-[#DA0037] mx-auto mb-8"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-[#171717]/90 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Get in touch with us to discover our premium uniform solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-[#DA0037] to-[#DA0037] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-[0_8px_30px_rgb(8,217,214,0.4)] hover:shadow-[0_12px_40px_rgb(8,217,214,0.6)] transition-all duration-300 flex items-center gap-3 hover:scale-110 hover:from-[#DA0037] hover:to-[#DA0037] hover:ring-2 hover:ring-[#DA0037]/30 hover:ring-offset-2"
            >
              <span>Book a Free Consultation</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.a
              href="tel:+96181366073"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white/90 backdrop-blur-sm text-[#171717] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 border border-[#DA0037]/20 hover:text-[#DA0037]"
            >
              <Phone className="w-5 h-5 text-[#DA0037]" />
              <span>Call Now</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#DA0037] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[#DA0037] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

const ContactInfoCard = ({ icon: Icon, title, content, subtitle, delay = 0 }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string | React.ReactNode;
  subtitle?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 w-full"
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    >
      <div className="flex items-start space-x-4 w-full">
        <motion.div 
          className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#DA0037] to-[#DA0037] rounded-2xl flex items-center justify-center group-hover:from-[#DA0037] group-hover:to-[#DA0037] transition-all duration-300 shadow-sm"
          whileHover={{ rotate: 5, scale: 1.1 }}
        >
          <Icon className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
        </motion.div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-[#171717] mb-2 group-hover:text-[#DA0037] transition-colors duration-300">
            {title}
          </h3>
          <div className="text-[#171717]/90 leading-relaxed text-sm sm:text-base">
            {content}
          </div>
          {subtitle && (
            <p className="text-xs sm:text-sm text-[#171717]/70 mt-2 italic whitespace-nowrap sm:whitespace-normal">{subtitle}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create WhatsApp message
    const whatsappMessage = `*New Contact Form Message*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      (formData.phone ? `*Phone:* ${formData.phone}\n` : '') +
      `*Message:*\n${formData.message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/96181366073?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success modal
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 5000);
    }, 1000);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10 border border-white/50 w-full"
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#DA0037] to-[#DA0037] rounded-2xl mb-4 shadow-sm"
          >
            <Send className="w-8 h-8 text-white" />
          </motion.div>
          <h2 
            className="text-3xl md:text-4xl font-bold text-[#171717] mb-4 tracking-wide"
          >
            Send us a Message
          </h2>
          <p className="text-[#171717]/90 text-sm sm:text-base md:text-lg whitespace-nowrap sm:whitespace-normal">
            We&apos;ll get back to you within 24 hours
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <label htmlFor="name" className="block text-sm font-semibold text-[#171717] mb-3">
                Full Name *
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-4 rounded-2xl border-2 border-[#DA0037]/20 focus:border-[#DA0037] focus:ring-4 focus:ring-[#DA0037]/10 transition-all duration-300 bg-white/50 focus:bg-white text-lg placeholder-[#EDEDED]/50"
                placeholder="Your full name"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <label htmlFor="email" className="block text-sm font-semibold text-[#171717] mb-3">
                Email Address *
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-4 rounded-2xl border-2 border-[#DA0037]/20 focus:border-[#DA0037] focus:ring-4 focus:ring-[#DA0037]/10 transition-all duration-300 bg-white/50 focus:bg-white text-lg placeholder-[#EDEDED]/50"
                placeholder="your@email.com"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <label htmlFor="phone" className="block text-sm font-semibold text-[#171717] mb-3">
              Phone Number
            </label>
            <motion.input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              whileFocus={{ scale: 1.02 }}
              className="w-full px-4 py-4 rounded-2xl border-2 border-[#DA0037]/20 focus:border-[#DA0037] focus:ring-4 focus:ring-[#DA0037]/10 transition-all duration-300 bg-white/50 focus:bg-white text-lg placeholder-[#EDEDED]/50 font-sans"
              placeholder="+961 XX XXX XXX"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <label htmlFor="message" className="block text-sm font-semibold text-[#171717] mb-3">
              Message *
            </label>
            <motion.textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              whileFocus={{ scale: 1.02 }}
              className="w-full px-4 py-4 rounded-2xl border-2 border-[#DA0037]/20 focus:border-[#DA0037] focus:ring-4 focus:ring-[#DA0037]/10 transition-all duration-300 bg-white/50 focus:bg-white text-lg placeholder-[#EDEDED]/50 font-sans resize-none"
              placeholder="Tell us how we can help you on your wellness journey..."
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full bg-gradient-to-r from-[#DA0037] to-[#DA0037] text-white py-5 px-8 rounded-full font-semibold text-xl shadow-[0_8px_30px_rgb(8,217,214,0.4)] hover:shadow-[0_12px_40px_rgb(8,217,214,0.6)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 relative overflow-hidden group hover:scale-110 hover:from-[#DA0037] hover:to-[#DA0037] hover:ring-2 hover:ring-[#DA0037]/30 hover:ring-offset-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#DA0037] to-[#DA0037] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex items-center space-x-3">
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-6 h-6" />
                  <span>Send Message</span>
                </>
              )}
            </div>
          </motion.button>
        </form>
      </motion.div>

      {/* Success Modal */}
      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-xl border border-white/50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-gradient-to-br from-[#DA0037] to-[#DA0037] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm"
            >
              <CheckCircle2 className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-[#171717] mb-2 tracking-wide">
              Message Sent!
            </h3>
            <p className="text-[#171717]/90 mb-6">
              Thank you for reaching out! We&apos;ll get back to you within 24 hours.
            </p>
            <motion.button
              onClick={() => setShowSuccessModal(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#DA0037] to-[#DA0037] text-white px-6 py-3 rounded-full font-semibold shadow-[0_8px_30px_rgb(8,217,214,0.4)] hover:shadow-[0_12px_40px_rgb(8,217,214,0.6)] transition-all duration-300 hover:scale-110 hover:from-[#DA0037] hover:to-[#DA0037] hover:ring-2 hover:ring-[#DA0037]/30 hover:ring-offset-2"
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

const SocialIcons = () => {
  const socialLinks = [
    { icon: SiWhatsapp, href: "https://wa.me/96181366073", label: "WhatsApp", gradient: "from-emerald-400 to-green-500" },
    { icon: SiInstagram, href: "https://www.instagram.com", label: "Instagram", gradient: "from-pink-400 to-purple-500" },
    { icon: SiFacebook, href: "https://www.facebook.com", label: "Facebook", gradient: "from-blue-400 to-indigo-500" },
    { icon: SiTiktok, href: "https://www.tiktok.com", label: "TikTok", gradient: "from-slate-400 to-gray-500" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h3 
        className="text-2xl font-bold text-[#171717] mb-8 tracking-wide"
      >
        Connect With Us
      </h3>
      <div className="flex justify-center space-x-6">
        {socialLinks.map(({ icon: Icon, href, label, gradient }, index) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`w-14 h-14 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Icon className="w-6 h-6 relative z-10" />
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

const MapSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-32"
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#DA0037] to-[#DA0037] rounded-2xl mb-6 shadow-sm"
        >
          <MapPin className="w-8 h-8 text-white" />
        </motion.div>
        <h2 
          className="text-4xl font-bold text-[#171717] mb-4 tracking-wide"
        >
          Find Us
        </h2>
        <p className="text-xl text-[#171717]/90 max-w-2xl mx-auto">
          Visit our Company in Tayouneh
        </p>
      </div>
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50"
      >
     <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13250.933424395032!2d35.5139586!3d33.8707621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f170c53009f55%3A0x9ba0c21df9873b90!2sTayouneh%2C%20Beirut!5e0!3m2!1sen!2slb!4v1764594741283!5m2!1sen!2slb"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-2xl shadow-lg border border-white/30"
/>

      </motion.div>
    </motion.section>
  );
};

// Main Contact Component
const Contact = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <div className="relative z-10 bg-gradient-to-br from-[#EDEDED] via-[#EDEDED] to-[#DA0037]/20 w-full">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(8,217,214,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 overflow-x-hidden">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left Column - Contact Information */}
            <div className="space-y-12 w-full min-w-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ willChange: 'transform', transform: 'translateZ(0)' }}
              >
                <h2 
                  className="text-4xl font-bold text-[#171717] mb-12 tracking-wide"
                >
                  Get in Touch
                </h2>
                
                <div className="space-y-8">
                  <ContactInfoCard
                    icon={Phone}
                    title="Phone"
                    content={
                      <>
                        +961 81 366 073
                        <br />+961 71 052 005
                        <br />+961 01 386 604
                      </>
                    }
                    subtitle="Mon - Fri: 9:00 AM - 5:00 PM"
                    delay={0.1}
                  />
                  
                  <ContactInfoCard
                    icon={Mail}
                    title="Email"
                    content="thesquadlinkcompany@gmail.com"
                    subtitle="We respond within 24 hours"
                    delay={0.2}
                  />
                  
                  <ContactInfoCard
                    icon={MapPin}
                    title="Address"
                    content={
                      <>
                        Squadlink  
                          
                        <br />Beirut-Tayouneh
                      </>
                    }
                    delay={0.3}
                  />
                  
                  <ContactInfoCard
                    icon={Clock}
                    title="Hours"
                    content={
                      <div className="space-y-1">
                        <p className="text-sm sm:text-base whitespace-nowrap sm:whitespace-normal">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="text-sm sm:text-base">Saturday & Sunday: Closed</p>
                      </div>
                    }
                    delay={0.4}
                  />
                </div>
              </motion.div>

              {/* Social Links */}
              <SocialIcons />
            </div>

            {/* Right Column - Contact Form */}
            <div id="contact-form" className="w-full min-w-0">
              <ContactForm />
            </div>
          </div>

          {/* Map Section */}
          <MapSection />
        </div>
      </div>
    </div>
  );
};

export default Contact;