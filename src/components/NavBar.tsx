import { useState } from "react";
import { useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-bgcolor-300 shadow-lg py-2' : 'bg-bgcolor-200 py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <img src="/logo.png" alt="IremeOn Logo" className="h-16 w-16 object-contain" />
        </div>
        
        {/* Desktop Navigation Links in the center */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-800 hover:text-primarycolor-100 font-medium transition-colors"
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

        {/* Get Started Button on the right */}
        <div className="hidden lg:block">
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Button variant="primary">
              Get Started
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <ul className={`fixed lg:hidden top-[72px] left-0 w-full h-screen bg-white flex flex-col gap-6 p-8 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-800 hover:text-primarycolor-100 font-medium transition-colors text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Button variant="primary">
                Get Started
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;