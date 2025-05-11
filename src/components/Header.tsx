import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Workouts', href: '#workouts' },
    { name: 'Services', href: '#services' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  //Whatsapp redirection
  const phoneNumber = "7907425360"; // replace with the owner's number
  const message = "Hi! I'm interested in joining Stay Fit Gym. Please share the details.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-white">
          <Dumbbell className="h-8 w-8 text-red-600" />
          <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            StayFit
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a onClick={() => window.open(whatsappURL, "_blank")} className="btn btn-primary ml-4">
            Join Now
          </a>
        </nav>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm shadow-lg animate-fadeDown">
          <nav className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-lg font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#join" 
              className="btn btn-primary mt-2 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;