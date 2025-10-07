import React from 'react';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-300 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo1.png" alt="IremeOn Logo" className="h-8 mr-2" />
      </div>
      <nav className="space-x-6">
        <a href="#home" className="text-gray-800 hover:text-blue-600 text-lg">Home</a>
        <a href="#services" className="text-gray-800 hover:text-blue-600 text-lg">Services</a>
        <a href="#about" className="text-gray-800 hover:text-blue-600 text-lg">About</a>
        <a href="#portfolio" className="text-gray-800 hover:text-blue-600 text-lg">Portfolio</a>
        <a href="#contact" className="text-gray-800 hover:text-blue-600 text-lg">Contact</a>
        <Button>Get Started</Button>
      </nav>
    </header>
  );
};
export default Header;