import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import Navbar from './NavBar';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-16 border-t border-bordercolor-100">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="/logo-dark.svg" alt="IremeOn" className="h-10 mb-4" />
          <p className="text-textcolor-200 mb-6 text-sm leading-relaxed">
            Built to Scale, Built to Last. Innovative IT solutions for the businesses of today and the future.
          </p>
          <div className="flex gap-4">
            <Twitter className="w-5 h-5 text-textcolor-200 hover:text-primarycolor-100 cursor-pointer" />
            <Linkedin className="w-5 h-5 text-textcolor-200 hover:text-primarycolor-100 cursor-pointer" />
            <Github className="w-5 h-5 text-textcolor-200 hover:text-primarycolor-100 cursor-pointer" />
            <Mail className="w-5 h-5 text-textcolor-200 hover:text-primarycolor-100 cursor-pointer" />
          </div>
        </div>
        <div>
          <h4 className="text-textcolor-100 font-semibold mb-4">Quick Links</h4>
          <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-textcolor-300 hover:text-primarycolor-300 font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
          {/* <ul className="space-y-3 text-sm">
            <li><Link to="/" className="text-textcolor-200 hover:text-primarycolor-100">Home</Link></li>
            <li><Link to="/#services" className="text-textcolor-200 hover:text-primarycolor-100">Services</Link></li>
            <li><Link to="/#about" className="text-textcolor-200 hover:text-primarycolor-100">About</Link></li>
            <li><Link to="/#portfolio" className="text-textcolor-200 hover:text-primarycolor-100">Portfolio</Link></li>
            <li><Link to="/#contact" className="text-textcolor-200 hover:text-primarycolor-100">Contact</Link></li>
          </ul> */}
        </div>
        <div>
          <h4 className="text-textcolor-100 font-semibold mb-4">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/#services" className="text-textcolor-200 hover:text-primarycolor-100">Web Development</Link></li>
            <li><Link to="/#services" className="text-textcolor-200 hover:text-primarycolor-100">Web Design</Link></li>
            <li><Link to="/#services" className="text-textcolor-200 hover:text-primarycolor-100">Mobile Apps</Link></li>
            <li><Link to="/#services" className="text-textcolor-200 hover:text-primarycolor-100">AI Solutions</Link></li>
            <li><Link to="/#services" className="text-textcolor-200 hover:text-primarycolor-100">Consultation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-textcolor-100 font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-textcolor-100 font-medium">Email</p>
              <p className="text-textcolor-200">info@iremeon.com</p>
            </div>
            <div>
              <p className="text-textcolor-100 font-medium">Phone</p>
              <p className="text-textcolor-200">(+250) 79-120-1462</p>
            </div>
            <div>
              <p className="text-textcolor-100 font-medium">Address</p>
              <p className="text-textcolor-200">123 Innovation Ave<br />Tech City, TC 12345</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-bordercolor-100 max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-textcolor-200 text-sm">&copy; {currentYear} IremeOn. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/privacy" className="text-textcolor-200 hover:text-primarycolor-100 text-sm">Privacy Policy</Link>
          <Link to="/terms" className="text-textcolor-200 hover:text-primarycolor-100 text-sm">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;