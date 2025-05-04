import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/student/home' },
    { name: 'Post Complaint', path: '/student/post' },
    { name: 'Track Complaints', path: '/student/my-complaints' },
    { name: 'Contact Us', path: '/contactus' },
  ];

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide text-white">
          <span className="text-red-500">I</span>ssue
          <span className="text-yellow-400">P</span>oint
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="text-gray-300 hover:text-yellow-400 font-medium transition duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/login">
            <button className="ml-4 bg-red-600 hover:bg-red-500 text-white font-semibold px-4 py-2 rounded-md shadow transition">
              Logout
            </button>
          </Link>
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
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-yellow-400 font-medium transition duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/login">
            <button className="w-full mt-3 bg-red-600 hover:bg-red-500 text-white font-semibold px-4 py-2 rounded-md shadow transition duration-200">
              Logout
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default UserNavbar;
