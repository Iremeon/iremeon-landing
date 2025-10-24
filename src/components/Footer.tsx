import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-16 border-t border-bordercolor-100">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="/logo.png" alt="IremeOn" className="h-12 mb-4" />
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
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="text-textcolor-200 hover:text-primarycolor-100">Home</a></li>
            <li><a href="#" className="text-textcolor-200 hover:text-primarycolor-100">Services</a></li>
            <li><a href="#" className="text-textcolor-200 hover:text-primarycolor-100">About</a></li>
            <li><a href="#" className="text-textcolor-200 hover:text-primarycolor-100">Portfolio</a></li>
            <li><a href="#" className="text-textcolor-200 hover:text-primarycolor-100">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-textcolor-100 font-semibold mb-4">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="text-textcolor-200 hover:text-primarycolor-100">Web Development</a></li>
            <li><a href="#" className="text-textcolor-200 hover:text-primarycolor-100">Web Design</a></li>
            <li><a href="#" className="text-textcolor-200 hover:text-primarycolor-100">Mobile Apps</a></li>
            <li><a href="#" className="text-textcolor-200 hover:text-primarycolor-100">AI Solutions</a></li>
            <li><a href="#" className="text-textcolor-200 hover:text-primarycolor-100">Consultation</a></li>
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
              <p className="text-textcolor-200">+1 (555) 123-4567</p>
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
          <a href="#" className="text-textcolor-200 hover:text-primarycolor-100 text-sm">Privacy Policy</a>
          <a href="#" className="text-textcolor-200 hover:text-primarycolor-100 text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;