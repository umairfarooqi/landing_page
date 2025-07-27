
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white text-black rounded-2xl px-6 py-4 flex items-center justify-between relative shadow-sm">
          {/* Logo / Brand */}
          <div className="text-xl font-bold">
            Umair Farooqi.
          </div>

          {/* Hamburger Icon (Mobile) */}
          <button
            className="sm:hidden ml-4 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>

          {/* Navigation Links */}
          <div
            className={
              `${menuOpen ? 'flex' : 'hidden'} flex-col absolute top-full left-0 w-full bg-white text-center py-4 z-40
              sm:static sm:flex sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0 sm:w-auto sm:bg-white sm:py-0 sm:ml-0
              space-y-4 sm:space-y-0 text-sm`
            }
          >
            <Link to="/" className="block px-4 py-2 rounded bg-transparent text-black hover:bg-black hover:text-white transition" onClick={() => setMenuOpen(false)}>Home</Link>
            <a href="#" className="block px-4 py-2 rounded bg-transparent text-black hover:bg-black hover:text-white transition">Services</a>
            <a href="#" className="block px-4 py-2 rounded bg-transparent text-black hover:bg-black hover:text-white transition">Portfolio</a>
            <Link to="/contact" className="block px-4 py-2 rounded bg-transparent text-black hover:bg-black hover:text-white transition" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;