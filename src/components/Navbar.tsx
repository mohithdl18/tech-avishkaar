
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
  className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-11/12 md:w-3/4 rounded-2xl transition-all duration-300 ${
    isScrolled ? "bg-white/50 backdrop-blur-md shadow-md" : "bg-transparent"
  }`}
>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#about" className="text-[#150029] hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#tracks" className="text-[#150029] hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">Tracks</a>
              <a href="#schedule" className="text-[#150029] hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">Schedule</a>
              <a href="#prizes" className="text-[#150029] hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">Prizes</a>
              <a href="#sponsors" className="text-[#150029] hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">Sponsors</a>
              <a href="#faq" className="text-[#150029] hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
              {/* <Link to="/sponsorship" className="text-[#150029] hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">Sponsor Us</Link> */}
              <Button asChild className="gradient-bg">
                <a href="#register">Register Now</a>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#150029] hover:text-secondary focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#about" 
              className="text-[#150029] hover:text-secondary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#tracks" 
              className="text-[#150029] hover:text-secondary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tracks
            </a>
            <a 
              href="#schedule" 
              className="text-[#150029] hover:text-secondary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule
            </a>
            <a 
              href="#prizes" 
              className="text-[#150029] hover:text-secondary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Prizes
            </a>
            <a 
              href="#sponsors" 
              className="text-[#150029] hover:text-secondary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sponsors
            </a>
            <a 
              href="#faq" 
              className="text-[#150029] hover:text-secondary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Link 
              to="/sponsorship" 
              className="text-[#150029] hover:text-secondary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sponsor Us
            </Link>
            <Button 
              onClick={() => setMobileMenuOpen(false)}
              asChild 
              className="w-full mt-4 gradient-bg"
            >
              <a href="#register">Register Now</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
