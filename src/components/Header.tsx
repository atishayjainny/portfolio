import React, { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="relative">
              <TrendingUp className="h-8 w-8 text-green-500 mr-2 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-xl font-bold text-white">Atishay Jain</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-green-500 transition-all duration-300 hover:scale-105">Home</a>
            <a href="#about" className="text-gray-300 hover:text-green-500 transition-all duration-300 hover:scale-105">About</a>
            <a href="#investment-banking" className="text-gray-300 hover:text-green-500 transition-all duration-300 hover:scale-105">Investment Banking</a>
            <a href="#trading" className="text-gray-300 hover:text-green-500 transition-all duration-300 hover:scale-105">Trading</a>
            <a href="#projects" className="text-gray-300 hover:text-green-500 transition-all duration-300 hover:scale-105">Projects</a>
            <a href="#portfolio" className="text-gray-300 hover:text-green-500 transition-all duration-300 hover:scale-105">Portfolio</a>
            <a href="#contact" className="text-gray-300 hover:text-green-500 transition-all duration-300 hover:scale-105">Contact</a>
          </nav>

          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 rounded-lg mt-2 p-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-300 hover:text-green-500 transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-green-500 transition-colors">About</a>
              <a href="#investment-banking" className="text-gray-300 hover:text-green-500 transition-colors">Investment Banking</a>
              <a href="#trading" className="text-gray-300 hover:text-green-500 transition-colors">Trading</a>
              <a href="#projects" className="text-gray-300 hover:text-green-500 transition-colors">Projects</a>
              <a href="#portfolio" className="text-gray-300 hover:text-green-500 transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-300 hover:text-green-500 transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;