"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Facebook, Instagram, PanelsTopLeft, ChevronDown } from "lucide-react";
import { SiTiktok, SiWhatsapp } from "react-icons/si";
interface Category {
  id: string;
  name: string;
  title: string;
  slug: string;
  description: string;
  clientLogo?: string | null;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';
  const isCategoryPage = pathname?.startsWith('/category/');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        if (response.ok) {
          const data = await response.json();
          // Filter out categories that have clientLogo (client categories)
          const filteredCategories = data.filter((category: Category) => !category.clientLogo);
          setCategories(filteredCategories);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isContactPage || isCategoryPage
          ? 'bg-white dark:bg-neutral-900 shadow-sm'
          : scrolled
          ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 ${
          isContactPage || isCategoryPage ? "py-2" : scrolled ? "py-2" : "py-4"
        } md:px-6 transition-[padding] duration-300 ${
          isContactPage || isCategoryPage
            ? "text-neutral-900 dark:text-white"
            : scrolled
            ? "text-neutral-900 dark:text-white"
            : "text-white"
        }`}
      >
        {/* Left: Logo + Name */}
        <div className="flex items-center relative">
          {/* Glow effect for dark backgrounds */}
          {!isContactPage && !isCategoryPage && !scrolled && (
            <div 
              className="absolute inset-0 pointer-events-none flex items-center justify-center"
              style={{
                zIndex: 0
              }}
            >
              {/* Glow layers */}
              <div 
                className="absolute"
                style={{
                  width: '100%',
                  height: '100%',
                  filter: 'blur(25px)',
                  transform: 'scale(1.6)',
                  opacity: 0.9,
                  background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                }}
              />
              <div 
                className="absolute"
                style={{
                  width: '100%',
                  height: '100%',
                  filter: 'blur(15px)',
                  transform: 'scale(1.3)',
                  opacity: 0.7,
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dp0wyn4dg/image/upload/v1764940757/newlogo_mhmsom.webp"
                  alt=""
                  width={150}
                  height={150}
                  className="h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-44 xl:w-44 object-contain brightness-[3] contrast-150"
                  aria-hidden="true"
                  unoptimized
                />
              </div>
            </div>
          )}
          <Image
            src="https://res.cloudinary.com/dp0wyn4dg/image/upload/v1764940757/newlogo_mhmsom.webp"
            alt="Squadlink Logo"
            width={150}
            height={150}
            priority
            sizes="(max-width: 768px) 112px, (max-width: 1024px) 128px, (max-width: 1280px) 160px, 176px"
            className={`${
              isContactPage || isCategoryPage
                ? "h-24 w-24 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
                : scrolled
                ? "h-24 w-24 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
                : "h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-44 xl:w-44"
            } object-contain transition-all duration-300 relative z-10 ${
              isContactPage || isCategoryPage
                ? ""
                : scrolled
                ? ""
                : "drop-shadow-[0_0_25px_rgba(255,255,255,1)] drop-shadow-[0_0_50px_rgba(255,255,255,0.8)] drop-shadow-[0_0_75px_rgba(255,255,255,0.5)]"
            }`}
          />
        </div>

        {/* Center: Links (desktop) */}
        <ul className="hidden md:flex md:gap-8 lg:gap-10">
          {[
            ["Home", "/"],
            ["About", "/about"],
          ].map(([label, href]) => (
            <li key={label}>
              <Link
                href={href}
                className={`relative text-[0.95rem] lg:text-[1rem] font-semibold tracking-wide transition-colors ${
                  isContactPage || isCategoryPage
                    ? "text-neutral-900 dark:text-white hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                    : scrolled
                    ? "text-neutral-900 dark:text-white hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                    : "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] hover:text-white"
                } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#DA0037] after:transition-all after:duration-300 hover:after:w-full`}
              >
                {label}
              </Link>
            </li>
          ))}
          
          {/* Categories with Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => setCategoriesDropdownOpen(true)}
            onMouseLeave={() => setCategoriesDropdownOpen(false)}
          >
            <button
              className={`relative flex items-center gap-1 text-[0.95rem] lg:text-[1rem] font-semibold tracking-wide transition-colors ${
                isContactPage || isCategoryPage
                  ? "text-neutral-900 dark:text-white hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                  : scrolled
                  ? "text-neutral-900 dark:text-white hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                  : "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] hover:text-white"
              } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#DA0037] after:transition-all after:duration-300 hover:after:w-full`}
            >
              Categories
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-300 ${categoriesDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            {/* Dropdown Menu */}
            <AnimatePresence>
              {categoriesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-[520px] bg-white rounded-xl shadow-2xl border border-[#EDEDED] overflow-hidden z-50"
                >
                  {/* Header with gradient */}
                  <div className="bg-gradient-to-r from-[#DA0037]/10 via-[#DA0037]/10 to-[#DA0037]/10 px-4 py-3 border-b border-[#EDEDED]">
                    <h3 className="text-sm font-bold text-[#171717] uppercase tracking-wide">Browse Categories</h3>
                  </div>
                  
                  {loadingCategories ? (
                    <div className="py-8 text-center text-sm text-[#171717]/60">
                      Loading categories...
                    </div>
                  ) : categories.length === 0 ? (
                    <div className="py-8 text-center text-sm text-[#171717]/60">
                      No categories available
                    </div>
                  ) : (
                    <div className="grid grid-cols-2">
                      {/* First Column - split categories */}
                      <div className="py-2">
                        {categories.slice(0, Math.ceil(categories.length / 2)).map((category) => (
                          <Link
                            key={category.id}
                            href={`/category/${category.slug}`}
                            className="group relative block px-5 py-3 text-sm font-medium text-[#171717] hover:bg-gradient-to-r hover:from-[#DA0037]/10 hover:to-transparent hover:text-[#DA0037] transition-all duration-200"
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#DA0037] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                              {category.title}
                            </span>
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DA0037] to-[#DA0037] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </Link>
                        ))}
                      </div>
                      
                      {/* Divider */}
                      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#EDEDED] to-transparent" />
                      
                      {/* Second Column */}
                      <div className="py-2 border-l border-[#EDEDED]">
                        {categories.slice(Math.ceil(categories.length / 2)).map((category) => (
                          <Link
                            key={category.id}
                            href={`/category/${category.slug}`}
                            className="group relative block px-5 py-3 text-sm font-medium text-[#171717] hover:bg-gradient-to-r hover:from-[#DA0037]/10 hover:to-transparent hover:text-[#DA0037] transition-all duration-200"
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#DA0037] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                              {category.title}
                            </span>
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DA0037] to-[#DA0037] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {[
            ["Our Clients", "/clients"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <li key={label}>
              <Link
                href={href}
                className={`relative text-[0.95rem] lg:text-[1rem] font-semibold tracking-wide transition-colors ${
                  isContactPage || isCategoryPage
                    ? "text-neutral-900 dark:text-white hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                    : scrolled
                    ? "text-neutral-900 dark:text-white hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                    : "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] hover:text-white"
                } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#DA0037] after:transition-all after:duration-300 hover:after:w-full`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Phone pill + icons (desktop) */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="tel:+96181366073"
            className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors shadow-sm ${
              isContactPage || isCategoryPage
                ? "bg-[#DA0037] text-white hover:bg-[#DA0037]"
                : scrolled
                ? "bg-[#DA0037] text-white hover:bg-[#DA0037]"
                : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm"
            }`}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#DA0037]">
              <Phone size={16} />
            </span>
            <span>961 81 366073</span>
          </a>
          <div className="ml-3 flex items-center gap-4 border-l border-white/20 pl-4 text-lg">
            <Link aria-label="Facebook" href="https://www.facebook.com" className="transition-transform hover:scale-105">
              <Facebook size={18} />
            </Link>
            <Link aria-label="Instagram" href="https://www.instagram.com" className="transition-transform hover:scale-105">
              <Instagram size={18} />
            </Link>
            <Link aria-label="TikTok" href="https://www.tiktok.com" target="_blank" className="transition-transform hover:scale-105" rel="noopener noreferrer">
              <SiTiktok className="h-[18px] w-[18px]" />
            </Link>
            <Link aria-label="WhatsApp" href="https://wa.me/96181366073" target="_blank" className="transition-transform hover:scale-105" rel="noopener noreferrer">
              <SiWhatsapp className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((s) => !s)}
        >
          <PanelsTopLeft />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden transition-all duration-300 ${
            isContactPage || isCategoryPage
              ? "bg-white dark:bg-neutral-900 backdrop-blur-md text-neutral-900 dark:text-white shadow-lg"
              : scrolled 
              ? "bg-white dark:bg-neutral-900 backdrop-blur-md text-neutral-900 dark:text-white shadow-lg" 
              : "bg-white/95 backdrop-blur-md text-neutral-900 shadow-lg"
          }`}
        >
          <div className="space-y-6 px-6 pb-8 pt-4">
            <div className="flex items-center justify-center py-2">
              <Image src="https://res.cloudinary.com/dp0wyn4dg/image/upload/v1764940757/newlogo_mhmsom.webp" alt="Squadlink Logo" width={140} height={140} className="h-28 w-28 object-contain" />
            </div>
            <ul className={`divide-y ${isContactPage || isCategoryPage ? "divide-neutral-200 dark:divide-neutral-700" : scrolled ? "divide-neutral-200 dark:divide-neutral-700" : "divide-white/20"}`}>
              <li>
                <Link 
                  href="/"
                  className={`block py-3 px-6 text-lg transition-colors ${
                    isContactPage || isCategoryPage
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                      : scrolled 
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]" 
                      : "text-neutral-700 hover:text-[#DA0037]"
                  }`} 
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className={`block py-3 px-6 text-lg transition-colors ${
                    isContactPage || isCategoryPage
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                      : scrolled 
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]" 
                      : "text-neutral-700 hover:text-[#DA0037]"
                  }`} 
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
                  className={`w-full flex items-center justify-between py-3 px-6 text-lg transition-colors ${
                    isContactPage
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                      : scrolled 
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]" 
                      : "text-neutral-700 hover:text-[#DA0037]"
                  }`}
                >
                  Categories
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-300 ${categoriesDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {categoriesDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-[#EDEDED]/50 overflow-hidden max-h-[200px] overflow-y-auto"
                    >
                      {loadingCategories ? (
                        <li className="py-2.5 px-10 text-base text-neutral-600">Loading...</li>
                      ) : categories.length === 0 ? (
                        <li className="py-2.5 px-10 text-base text-neutral-600">No categories available</li>
                      ) : (
                        categories.map((category) => (
                          <li key={category.id}>
                            <Link
                              href={`/category/${category.slug}`}
                              className={`block py-2.5 px-10 text-base transition-colors ${
                                isContactPage
                                  ? "text-neutral-600 dark:text-neutral-400 hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                                  : scrolled 
                                  ? "text-neutral-600 dark:text-neutral-400 hover:text-[#DA0037] dark:hover:text-[#DA0037]" 
                                  : "text-neutral-600 hover:text-[#DA0037]"
                              }`}
                              onClick={() => {
                                setMenuOpen(false);
                                setCategoriesDropdownOpen(false);
                              }}
                            >
                              {category.title}
                            </Link>
                          </li>
                        ))
                      )}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <Link 
                  href="/clients"
                  className={`block py-3 px-6 text-lg transition-colors ${
                    isContactPage || isCategoryPage
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                      : scrolled 
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]" 
                      : "text-neutral-700 hover:text-[#DA0037]"
                  }`} 
                  onClick={() => setMenuOpen(false)}
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className={`block py-3 px-6 text-lg transition-colors ${
                    isContactPage || isCategoryPage
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                      : scrolled 
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]" 
                      : "text-neutral-700 hover:text-[#DA0037]"
                  }`} 
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <a
              href="tel:+96181366073"
              className="inline-flex items-center gap-2 rounded-full bg-[#DA0037] px-6 py-3 text-base text-white shadow-sm mx-6"
            >
              <Phone size={16} /> <span>961 81 366 073</span>
            </a>
            <div className={`flex items-center gap-5 border-t pt-4 text-lg mx-6 ${isContactPage || isCategoryPage ? "border-neutral-200 dark:border-neutral-700" : scrolled ? "border-neutral-200 dark:border-neutral-700" : "border-white/20"}`}>
              <Link aria-label="Facebook" href="https://www.facebook.com" className="transition-transform hover:scale-105"><Facebook size={20} /></Link>
              <Link aria-label="Instagram" href="https://www.instagram.com" className="transition-transform hover:scale-105"><Instagram size={20} /></Link>
              <Link aria-label="TikTok" href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105"><SiTiktok className="h-[20px] w-[20px]" /></Link>
              <Link aria-label="WhatsApp" href="https://wa.me/96181366073" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105"><SiWhatsapp className="h-[20px] w-[20px]" /></Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
