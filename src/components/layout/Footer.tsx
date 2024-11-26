import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';


const Footer = () => {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/medical', label: 'Medical' },
    { path: '/office', label: 'Office' },
    { path: '/retail', label: 'Retail' },
    { path: '/industrial', label: 'Industrial' }
  ];

  return (
    <footer className="bg-[#0B1B3D] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Industries</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Medical & Professional</li>
              <li className="text-gray-300">Retail & Automotive</li>
              <li className="text-gray-300">Corporate & Technology</li>
              <li className="text-gray-300">Industrial</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <p>(613) 700-1815</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <p>KGS.cleaning@yahoo.fr</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <p>Ottawa, Ontario</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-300 border-t border-gray-700 pt-8">
          <p>© {new Date().getFullYear()} KGS Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export {}; 