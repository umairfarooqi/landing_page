import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-black text-white rounded-2xl p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo + Description */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-4">digitec</h2>
              <p className="text-sm text-gray-400 mb-4">
                We provide professional services in development, design, and digital marketing to help your business grow.
              </p>
              <a href="#" className="inline-block mt-2 hover:underline text-white">
                in
              </a>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-3">Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:underline">Development</a></li>
                <li><a href="#" className="hover:underline">Design</a></li>
                <li><a href="#" className="hover:underline">Digital Marketing</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Portfolio</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Lahore, Pakistan</li>
                <li>info@digitec.marketing</li>
                <li>+92 (311) 444-3447</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2025 Digitec. All rights reserved.</p>
            <div className="space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
