import React from 'react'
import govLogo from '../assets/logo.png'
import projectLogo from '../assets/logo.png'
import ukFlag from '../assets/logo.png'
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import LanguageAccordion from './LanguageAccordian';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t shadow-md mt-10 h-[40vh]">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="flex flex-row space-y-4 gap-2">
          <img src={govLogo} alt="Government Logo" className="h-12 object-contain" />
          <div className="flex flex-col">
            <p className="text-xs text-red-600 font-semibold">कर्णाली प्रदेश सरकार</p>
            <p className="text-sm text-red-600 font-semibold">मुख्यमन्त्री तथा मन्त्रिपरिषद्को कार्यालय</p>
          </div>
          <div className="flex flex-col space-x-2 border-l-2 pl-4">
          <h1 className="text-2xl font-bold uppercase whitespace-nowrap">
            <span className="text-sm bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">PROJECT</span>
          </h1>
          <span className="font-light text-xs">Database Portal</span>
        </div>
        </div>

        
        <nav className="flex flex-col space-y-3 text-gray-700">
          <a href="#" className="hover:text-blue-600 font-semibold">Map</a>
          <a href="#" className="hover:text-blue-600 font-semibold">Data</a>
          <a href="#" className="hover:text-blue-600 font-semibold">About</a>
        </nav>

        <div className="flex flex-col space-y-3 text-gray-700">
          <div className="flex items-center space-x-2">
            <span className="text-xl"><FaLocationDot /></span>
            <span>Search Projects</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl"><IoMdCall /></span>
            <span>+977-01 4563 235, 01 4575 246</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl"><MdEmail /></span>
            <span>mail@mail.com</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mt-10 mx-auto px-6 py-4 flex flex-col border-t-2 sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
        {/* <div className="flex items-center space-x-2">
          <img src={ukFlag} alt="English" className="w-5 h-5 object-contain" />
          <span>English</span>
        </div> */}
         <LanguageAccordion />

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
