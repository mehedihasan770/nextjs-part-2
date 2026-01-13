"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-11/12 md:max-w-10/12 lg:max-w-9/12 mx-auto">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-14 h-14 bg-linear-to-br from-[#7c3aed] to-[#06b6d4] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-white font-bold text-2xl">3D</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#06b6d4] rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold primary-color">Nexus3D</h1>
              <p className="text-xs text-gray-500">Premium 3D Assets</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#7c3aed] font-medium transition-colors duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7c3aed] group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link href="/all-assets" className="text-gray-700 hover:text-[#7c3aed] font-medium transition-colors duration-200 relative group">
              All Assets
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7c3aed] group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link href="/login" className="px-8 py-2.5 bg-linear-to-r from-[#7c3aed] to-[#06b6d4] text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 shadow-md">
              Login
            </Link>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden cursor-pointer p-3 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="w-10/12 mx-auto py-6 space-y-4">
              <Link href="/" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-purple-50">
                <div className="w-2 h-2 rounded-full bg-[#7c3aed]"></div>
                <span className="font-medium text-gray-700">Home</span>
              </Link>
              
              <Link href="/all-assets" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-purple-50">
                <div className="w-2 h-2 rounded-full bg-[#7c3aed]"></div>
                <span className="font-medium text-gray-700">All Assets</span>
              </Link>
              
              <Link href="/login" className="block py-3 bg-linear-to-r from-[#7c3aed] to-[#06b6d4] text-white rounded-lg font-semibold text-center shadow-lg">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;