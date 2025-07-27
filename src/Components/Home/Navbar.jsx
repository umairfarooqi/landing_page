import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-black text-white rounded-2xl px-6 py-4 flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="text-xl font-bold">
            Umair Farooqi.
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Portfolio</a>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
