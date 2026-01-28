import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/images/logo.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Technology", href: "#technology" },
    { name: "OEM Solutions", href: "#solutions" },
    { name: "Products", href: "#products" },
    { name: "Leadership", href: "#leadership" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-24 h-24 flex items-center justify-center overflow-hidden">
            <img
              src={Logo}
              alt="Surio Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-emerald-950/70 hover:text-surio-green transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-emerald-950 hover:bg-surio-green text-white px-8 py-3 rounded-full text-xs font-bold transition-all shadow-md active:scale-95 uppercase tracking-widest">
            Partner With Us
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-emerald-950 p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-2xl h-screen overflow-y-auto absolute w-full top-full left-0"
          >
            <div className="flex flex-col p-10 space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif font-bold text-emerald-950 hover:text-surio-green transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8 border-t border-gray-100">
                <button className="w-full bg-surio-green text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg active:scale-95 transition-transform">
                  Start OEM Collaboration
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
