import React, { useState, useEffect } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../pages/images/logo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Define your services with paths and labels
  const serviceLinks = [
    { path: '/medical', label: 'Medical Cleaning', description: 'Specialized cleaning for healthcare facilities' },
    { path: '/office', label: 'Office Cleaning', description: 'Professional cleaning for workspaces' },
    { path: '/retail', label: 'Retail Cleaning', description: 'Cleaning solutions for retail spaces' },
    { path: '/industrial', label: 'Industrial Cleaning', description: 'Heavy-duty cleaning for industrial facilities' }
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
      if (!target.closest('.services-menu') && !target.closest('.mobile-menu')) {
        setIsServicesMenuOpen(false);
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
            {/* Home Link */}
            <Link 
              to="/"
              className="text-[#0B1B3D] hover:text-[#0063B2] transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative services-menu">
              <button 
                className="flex items-center space-x-1 text-[#0B1B3D] hover:text-[#0063B2] transition-colors group"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsServicesMenuOpen(!isServicesMenuOpen);
                }}
              >
                <span>Services</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {isServicesMenuOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 animate-slideDown">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`block px-4 py-3 hover:bg-gray-50 transition-colors ${
                        location.pathname === service.path
                          ? 'bg-blue-50 text-[#0063B2]'
                          : 'text-[#0B1B3D]'
                      }`}
                      onClick={() => setIsServicesMenuOpen(false)}
                    >
                      <div className="font-medium">{service.label}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        {service.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Additional Navigation Items */}
            <Link 
              to="/about"
              className="text-[#0B1B3D] hover:text-[#0063B2] transition-colors"
            >
              About
            </Link>
            
            <Link 
              to="/contact"
              className="text-[#0B1B3D] hover:text-[#0063B2] transition-colors"
            >
              Contact
            </Link>
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
          <Link
            to="/"
            className="block px-4 py-2 text-[#0B1B3D] hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          
          {/* Services Section in Mobile Menu */}
          <div className="py-2 px-4 text-sm font-medium text-gray-500 bg-gray-50">
            Services
          </div>
          {serviceLinks.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className={`block px-4 py-2 pl-6 ${
                location.pathname === service.path
                  ? 'bg-blue-50 text-[#0063B2]'
                  : 'text-[#0B1B3D] hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {service.label}
            </Link>
          ))}
          
          <Link
            to="/about"
            className="block px-4 py-2 text-[#0B1B3D] hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          
          <Link
            to="/contact"
            className="block px-4 py-2 text-[#0B1B3D] hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;