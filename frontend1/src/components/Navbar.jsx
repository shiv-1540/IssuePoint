import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = ['Intro', 'Features', 'How It Works', 'FAQs', 'Contact'];

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide text-white">
          <span className="text-red-500">I</span>ssue
          <span className="text-yellow-400">P</span>oint
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((text, idx) => (
            <a
              key={idx}
              href={`#${text.toLowerCase().replaceAll(' ', '-')}`}
              className="text-gray-300 hover:text-yellow-400 font-medium tracking-wide transition duration-200"
            >
              {text}
            </a>
          ))}

          <a href="/login" className="ml-4">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md shadow transition duration-200">
              Login / Sign Up
            </button>
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-4 space-y-3 text-center">
          {navLinks.map((text, idx) => (
            <a
              key={idx}
              href={`#${text.toLowerCase().replaceAll(' ', '-')}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-yellow-400 transition duration-200 font-medium"
            >
              {text}
            </a>
          ))}
          <a href="/login">
            <button className="w-full mt-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md shadow transition duration-200">
              Login / Sign Up
            </button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
