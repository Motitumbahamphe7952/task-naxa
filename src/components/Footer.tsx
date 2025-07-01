import React from 'react'
import govLogo from '../assets/logo.png'
import projectLogo from '../assets/logo.png'
import ukFlag from '../assets/logo.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      {/* Upper Section: Logos, Nav Links & Contact */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logos */}
        <div className="flex flex-col space-y-4">
          <img src={govLogo} alt="Government Logo" className="h-12 object-contain" />
          <img src={projectLogo} alt="Project Database Portal Logo" className="h-6 object-contain" />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-3 text-gray-700">
          <a href="#" className="hover:text-blue-600">Map</a>
          <a href="#" className="hover:text-blue-600">Data</a>
          <a href="#" className="hover:text-blue-600">About</a>
        </nav>

        {/* Contact Info */}
        <div className="flex flex-col space-y-3 text-gray-700">
          <div className="flex items-center space-x-2">
            <span className="text-xl">📍</span>
            <span>Search Projects</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl">📞</span>
            <span>+977-01 4563 235, 01 4575 246</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl">✉️</span>
            <span>mail@mail.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Language & Legal */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
        {/* Language Selector */}
        <div className="flex items-center space-x-2">
          <img src={ukFlag} alt="English" className="w-5 h-5 object-contain" />
          <span>English</span>
        </div>

        {/* Legal Links */}
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:underline">Privacy policy</a>
          <a href="#" className="hover:underline">Terms</a>
          <span>Copyright © 2022 Project Database Portal</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
