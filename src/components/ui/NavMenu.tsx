import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Toggle menu open/closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  
  // Ensure body scroll is restored when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      <button 
        className="nav-menu flex flex-col justify-between h-[16px] z-50 relative"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Navigation Menu"
      >
        <span className={`line w-[20px] h-[1px] bg-primary-black block transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-[7px]' : ''}`}></span>
        <span className={`line w-[20px] h-[1px] bg-primary-black block transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`line w-[20px] h-[1px] bg-primary-black block transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-[7px]' : ''}`}></span>
      </button>
      
      {/* Full-screen Overlay Menu - Sliding from top to bottom */}
      <div 
        className={`fixed inset-x-0 top-0 pt-20 px-5 bg-primary-gray-bg z-40 h-screen transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Menu Items */}
          <nav className="flex-grow">
            <ul className="space-y-8 mt-4">
              <li>
                <Link 
                  to="/" 
                  className="block text-md font-gt-america uppercase font-medium hover:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="#values" 
                  className="block text-md font-gt-america uppercase font-medium hover:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Our Values
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="block text-md font-gt-america uppercase font-medium hover:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  About the Founder
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="block text-md font-gt-america uppercase font-medium hover:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#register" 
                  className="block text-md font-gt-america uppercase font-medium hover:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Footer Section with Social Links */}
          <div className="mt-auto border-t border-gray-200 pt-8 pb-8">
            <div className="flex flex-col space-y-4">
              <a 
                href="https://www.instagram.com" 
                className="block text-sm uppercase font-medium hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com" 
                className="block text-sm uppercase font-medium hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                LinkedIn
              </a>
              <a 
                href="https://www.twitter.com" 
                className="block text-sm uppercase font-medium hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                Twitter
              </a>
            </div>
            
            <div className="mt-6 text-xs">
              <p>© 2025 ALL PLACES</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;