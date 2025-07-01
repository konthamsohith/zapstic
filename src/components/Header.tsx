import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowOverlay(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    
    { name: 'Services', href: '#ourservices' },
    { name: 'Why Choose Us', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
   
  ];

  return (
    <>
      {/* Default Header (visible at top) */}
      {!showOverlay && (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 py-5 backdrop-blur-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center space-x-2">
              <img
                src=" https://ik.imagekit.io/ji2lkjg53/Zapstic.png?updatedAt=1751398106620"
                alt="Zapstic Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-black">Zapstic</span>
            </a>

            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-black hover:text-primary-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <a href="#contact" className="btn btn-primary">
                Contact
              </a>
            </div>

            <button
              className="md:hidden text-black focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>
      )}

      {/* Floating Header on Scroll (only side animation) */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ paddingLeft: 80, paddingRight: 80 }}
            animate={{ paddingLeft: 20, paddingRight: 20 }}
            exit={{ paddingLeft: 80, paddingRight: 80 }}
            transition={{ duration: 0.4 }}
            className="fixed top-4 left-0 right-0 z-50 mx-auto w-fit bg-white/10 backdrop-blur-2xl border border-white/30 shadow-lg rounded-xl py-3 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center space-x-2">
                <img
                  src=" https://ik.imagekit.io/ji2lkjg53/Zapstic.png?updatedAt=1751398106620"
                  alt="Zapstic Logo"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-lg font-bold text-black">Zapstic</span>
              </a>

              <div className="hidden md:flex items-center space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-black hover:text-primary-500 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="hidden md:block">
                <a href="#contact" className="btn btn-primary text-sm px-4 py-2 rounded-full">
                  Contact
                </a>
              </div>
            </div>

            <button
              className="md:hidden text-black ml-4"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
  animate={{
    paddingLeft: showOverlay ? 20 : 80,
    paddingRight: showOverlay ? 20 : 80,
  }}
  transition={{ duration: 0.4 }}
  className="fixed top-4 left-0 right-0 z-50 mx-auto w-fit bg-white/10 backdrop-blur-2xl border border-white/30 shadow-lg rounded-xl py-3 flex items-center justify-between"
>
  <div className="flex items-center space-x-4">
    <a href="#" className="flex items-center space-x-2">
      <img
        src=" https://ik.imagekit.io/ji2lkjg53/Zapstic.png?updatedAt=1751398106620"
        alt="Zapstic Logo"
        className="w-8 h-8 object-contain"
      />
      <span className="text-lg font-bold text-black">Zapstic</span>
    </a>

    <div className="hidden md:flex items-center space-x-4">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-black hover:text-primary-500 text-sm transition-colors"
        >
          {link.name}
        </a>
      ))}
    </div>

    <div className="hidden md:block">
      <a href="#contact" className="btn btn-primary text-sm px-4 py-2 rounded-full">
        Contact
      </a>
    </div>
  </div>

  <button
    className="md:hidden text-black ml-4"
    onClick={toggleMenu}
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
