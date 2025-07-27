import React from 'react'

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
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Portfolio</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
