import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../pages/images/logo.png';  // Fixed import path

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/medical', label: 'Medical' },
    { path: '/office', label: 'Office' },
    { path: '/retail', label: 'Retail' },
    { path: '/industrial', label: 'Industrial' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.pages-menu') && !target.closest('.mobile-menu')) {
        setIsPagesMenuOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img 
              src={logo}
              alt="KGS Cleaning" 
              className="h-32 md:h-48 w-auto rounded transition-all"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {/* Section Links */}
            {location.pathname === '/' && (
              <div className="flex space-x-8">
                {['services', 'industries', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      const element = document.getElementById(section);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[#0B1B3D] hover:text-[#0063B2] transition-colors capitalize"
                  >
                    {section}
                  </button>
                ))}
              </div>
            )}
            
            {/* Pages Menu */}
            <div className="relative pages-menu">
              <button 
                className="text-[#0B1B3D] hover:text-[#0063B2] transition-colors px-4 py-2 rounded-lg border border-[#0B1B3D]"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPagesMenuOpen(!isPagesMenuOpen);
                }}
              >
                Pages
              </button>
              {isPagesMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 animate-slideDown">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-2 text-sm ${
                        location.pathname === link.path
                          ? 'bg-blue-50 text-[#0063B2] font-medium'
                          : 'text-[#0B1B3D] hover:bg-gray-50'
                      }`}
                      onClick={() => setIsPagesMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition mobile-menu"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <Menu className="text-[#0B1B3D]" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-slideDown mobile-menu">
          {/* Section Links - Only on home page */}
          {location.pathname === '/' && ['services', 'industries', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => {
                const element = document.getElementById(section);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }
              }}
              className="block w-full px-4 py-2 text-left text-[#0B1B3D] hover:bg-gray-50 transition-colors capitalize"
            >
              {section}
            </button>
          ))}
          
          {/* Divider */}
          {location.pathname === '/' && <div className="my-2 border-t border-gray-100" />}
          
          {/* Page Links */}
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block w-full px-4 py-2 text-left ${
                location.pathname === link.path
                  ? 'bg-blue-50 text-[#0063B2] font-medium'
                  : 'text-[#0B1B3D] hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;