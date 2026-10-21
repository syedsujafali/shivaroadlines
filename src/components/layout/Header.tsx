"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  XTwitterIcon,
  FacebookIcon,
  WhatsAppIcon,
  InstagramIcon,
  PhoneIcon,
  EnvelopeIcon,
  MenuIcon,
  CloseIcon,
} from "@/components/icons/Icons";
import { GoogleTranslateWidget } from "@/components/google-translate-widget";

export function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 120);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }

  const isServicesActive =
    pathname === "/services" ||
    pathname === "/lube-oil-transportation" ||
    pathname === "/coal-tar-transportation" ||
    pathname === "/ethanol-transportation" ||
    pathname === "/chemical-transportation" ||
    pathname === "/bunkering-transportation" ||
    pathname === "/water-tanker-transporting" ||
    pathname === "/ss-tanker" ||
    pathname === "/lenghty-tanker" ||
    pathname === "/lpg-tanker" ||
    pathname === "/other-services";

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div
        className="site-navbar-top w-full text-white text-sm"
        style={{
          background:
            "linear-gradient(135deg, #0A1B33 0%, #134063 50%, #F4B742 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2">
          <div className="flex items-center justify-between gap-2">
            {/* Social Icons */}
            <div className="flex items-center space-x-1.5 sm:space-x-4 shrink-0">
              <a
                href="https://x.com/shiva_roadlines"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F4B742] transition-colors p-1"
                aria-label="Twitter/X"
              >
                <XTwitterIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61583817492894"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F4B742] transition-colors p-1"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://wa.me/919029999979"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F4B742] transition-colors p-1"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://www.instagram.com/shiva.roadlines_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F4B742] transition-colors p-1"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>

            {/* Contact details */}
            <div className="flex items-center space-x-3 sm:space-x-6 shrink-0">
              <a
                href="tel:9029999979"
                className="flex items-center text-white hoverredcol group"
              >
                <PhoneIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-white shrink-0" />
                <span className="font-semibold text-[11px] sm:text-sm">
                  9029999979
                </span>
              </a>
              <a
                href="mailto:shivaroadlines2@gmail.com"
                className="hidden md:flex items-center text-white hoverredcol group"
              >
                <EnvelopeIcon className="w-4 h-4 mr-2 text-white shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">
                  shivaroadlines2@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`site-navbar w-full bg-white border-b border-gray-100 ${isSticky ? "sticky-header shadow-md" : ""
          }`}
      >
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-15 sm:h-20 md:h-24 gap-1.5 sm:gap-2">
            {/* Logo & Brand Name */}
            <div className="shrink min-w-0 flex items-center">
              <Link href="/" className="inline-flex items-center gap-1 sm:gap-2 md:gap-2.5 group py-1 max-w-full">
                <Image
                  src="/images/shiva_emblem.webp"
                  alt="Lord Shiva Emblem"
                  width={200}
                  height={135}
                  priority
                  style={{ width: "auto" }}
                  className="h-11 xs:h-13 sm:h-16 md:h-18 lg:h-21 w-auto shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col items-center justify-center leading-none select-none shrink min-w-0 -ml-0.5 sm:-ml-1">
                  <Image
                    src="/images/shiva_roadlines_text.webp"
                    alt="SHIVA ROADLINES"
                    width={280}
                    height={104}
                    priority
                    style={{ width: "auto" }}
                    className="h-7.5 xs:h-9 sm:h-11 md:h-12 lg:h-14 w-auto max-w-[145px] xs:max-w-[185px] sm:max-w-none object-contain"
                  />
                  <span
                    className="text-[#0A1B33] font-bold text-[9.5px] xs:text-[11px] sm:text-[12.5px] md:text-[14px] lg:text-[15px] mt-2 xs:mt-2.5 sm:mt-2.5 md:mt-3 tracking-tight xs:tracking-normal sm:tracking-wide whitespace-nowrap"
                    style={{ lineHeight: "1" }}
                  >
                    श्री शिवाय नमस्तुभ्यम्
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`text-base font-semibold transition-colors py-2 ${pathname === "/" ? "border-b-2 border-[#134063]" : ""
                  }`}
              >
                <span className="grdtext">Home</span>
              </Link>

              <Link
                href="/about"
                className={`text-base font-semibold transition-colors py-2 ${pathname === "/about" ? "border-b-2 border-[#134063]" : ""
                  }`}
              >
                <span className="grdtext">About</span>
              </Link>

              {/* Services with Dropdown */}
              <div
                className="relative py-2"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link
                  href="/services"
                  className={`text-base font-semibold transition-colors flex items-center gap-1 ${isServicesActive ? "border-b-2 border-[#134063]" : ""
                    }`}
                >
                  <span className="grdtext">Services</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform text-[#134063] ${servicesDropdownOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-md border border-gray-100 py-2 z-50 animate-fadeIn max-h-[80vh] overflow-y-auto">
                    <Link
                      href="/lube-oil-transportation"
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#b22234] transition-colors"
                    >
                      Lube Oil Transportation
                    </Link>
                    <Link
                      href="/coal-tar-transportation"
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#b22234] transition-colors"
                    >
                      Coal Tar Transportation
                    </Link>
                    <Link
                      href="/ethanol-transportation"
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#b22234] transition-colors"
                    >
                      Ethanol Transportation
                    </Link>
                    <Link
                      href="/chemical-transportation"
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#b22234] transition-colors"
                    >
                      Chemical Transportation
                    </Link>
                    <Link
                      href="/bunkering-transportation"
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#b22234] transition-colors"
                    >
                      Bunkering Transportation
                    </Link>
                    <Link
                      href="/water-tanker-transporting"
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#b22234] transition-colors"
                    >
                      Water Tanker Transporting
                    </Link>
                    <Link
                      href="/ss-tanker"
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#b22234] transition-colors"
                    >
                      SS Tanker Transportation
                    </Link>
                    <Link
                      href="/lenghty-tanker"
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#b22234] transition-colors"
                    >
                      Lengthy Tanker Transportation
                    </Link>
                    <Link
                      href="/lpg-tanker"
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#b22234] transition-colors"
                    >
                      LPG Tanker Transportation
                    </Link>
                    <Link
                      href="/other-services"
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#b22234] transition-colors border-t border-gray-100 mt-1 pt-2"
                    >
                      Other Services
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/clients"
                className={`text-base font-semibold transition-colors py-2 ${pathname === "/clients" ? "border-b-2 border-[#134063]" : ""
                  }`}
              >
                <span className="grdtext">Our Clients</span>
              </Link>

              <Link
                href="/contact"
                className={`text-base font-semibold transition-colors py-2 ${pathname === "/contact" ? "border-b-2 border-[#134063]" : ""
                  }`}
              >
                <span className="grdtext">Contact</span>
              </Link>
            </div>

            {/* Language Switcher & Mobile Actions */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              <GoogleTranslateWidget />

              {/* Mobile Hamburger Button */}
              <div className="lg:hidden">
                <motion.button
                  whileTap={{ scale: 0.92 }}
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="p-1 sm:p-2 text-[#0A1B33] hover:text-[#F4B742] focus:outline-none"
                  aria-label="Open mobile menu"
                >
                  <span className="grdtext">
                    <MenuIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Drawer with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-9999 lg:hidden">
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-In Drawer Panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1.0] as const,
              }}
              className="fixed top-0 right-0 w-72.5 max-w-[85vw] h-full bg-white shadow-2xl z-10000 overflow-y-auto p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Drawer Header with Close Button */}
                <div className="flex items-center justify-end pb-4 border-b border-gray-100">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 text-gray-500 hover:text-black focus:outline-none"
                    aria-label="Close menu"
                  >
                    <CloseIcon className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Logo & Brand Name */}
                <div className="py-6 text-center">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2"
                  >
                    <Image
                      src="/images/shiva_emblem.webp"
                      alt="Lord Shiva Emblem"
                      width={140}
                      height={95}
                      style={{ width: "auto" }}
                      className="h-14 w-auto object-contain"
                    />
                    <div className="flex flex-col items-center justify-center leading-none select-none -ml-0.5">
                      <Image
                        src="/images/shiva_roadlines_text.webp"
                        alt="SHIVA ROADLINES"
                        width={200}
                        height={75}
                        style={{ width: "auto" }}
                        className="h-9 w-auto object-contain"
                      />
                      <span
                        className="text-[#0A1B33] font-bold text-[12px] mt-2.5 tracking-wide"
                        style={{ lineHeight: "1" }}
                      >
                        श्री शिवाय नमस्तुभ्यम्
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Mobile Links */}
                <ul className="space-y-4 text-base font-semibold">
                  <li>
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-gray-800 hover:text-[#b22234]"
                    >
                      <span className="grdtext">Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-gray-800 hover:text-[#b22234]"
                    >
                      <span className="grdtext">About</span>
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center justify-between py-1">
                      <Link
                        href="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-gray-800 hover:text-[#b22234]"
                      >
                        <span className="grdtext">Services</span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="p-1 text-gray-500 hover:text-black"
                        aria-label="Toggle services submenu"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22, ease: "easeInOut" }}
                          className="pl-4 mt-2 space-y-2 text-sm font-normal border-l-2 border-[#134063] overflow-hidden"
                        >
                          <li>
                            <Link
                              href="/lube-oil-transportation"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-gray-600 hover:text-[#b22234]"
                            >
                              Lube Oil Transportation
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/coal-tar-transportation"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-gray-600 hover:text-[#b22234]"
                            >
                              Coal Tar Transportation
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/ethanol-transportation"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-gray-600 hover:text-[#b22234]"
                            >
                              Ethanol Transportation
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/chemical-transportation"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-gray-600 hover:text-[#b22234]"
                            >
                              Chemical Transportation
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/bunkering-transportation"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-gray-600 hover:text-[#b22234]"
                            >
                              Bunkering Transportation
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/water-tanker-transporting"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-gray-600 hover:text-[#b22234]"
                            >
                              Water Tanker Transporting
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/ss-tanker"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-gray-600 hover:text-[#b22234]"
                            >
                              SS Tanker Transportation
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/lenghty-tanker"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-gray-600 hover:text-[#b22234]"
                            >
                              Lengthy Tanker Transportation
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/lpg-tanker"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-gray-600 hover:text-[#b22234]"
                            >
                              LPG Tanker Transportation
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/other-services"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-gray-600 hover:text-[#b22234]"
                            >
                              Other Services
                            </Link>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                  <li>
                    <Link
                      href="/clients"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-gray-800 hover:text-[#b22234]"
                    >
                      <span className="grdtext">Our Clients</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-gray-800 hover:text-[#b22234]"
                    >
                      <span className="grdtext">Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Mobile Footer Contact info */}
              <div className="pt-6 border-t border-gray-100 text-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <a
                    href="tel:9029999979"
                    className="flex items-center text-gray-700 hover:text-[#b22234]"
                  >
                    <PhoneIcon className="w-4 h-4 mr-2 text-[#134063]" />
                    9029999979
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href="mailto:shivaroadlines2@gmail.com"
                    className="flex items-center text-gray-700 hover:text-[#b22234] text-xs"
                  >
                    <EnvelopeIcon className="w-4 h-4 mr-2 text-[#134063]" />
                    shivaroadlines2@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
