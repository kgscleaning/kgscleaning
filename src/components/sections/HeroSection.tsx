import React from 'react';
import { useLocation } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
  benefits: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[];
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ 
  title, 
  description, 
  backgroundImage, 
  benefits,
  scrollToSection 
}: HeroSectionProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt={title} 
          className="w-full h-full object-cover brightness-[0.3]"
        />
      </div>
      <div className="relative z-10 w-full pt-20">
        <div className="max-w-6xl mx-auto px-4">
          {isHomePage && (
            <div className="mb-6 text-center animate-fadeIn">
              <span className="bg-[#0063B2] text-white text-sm font-medium px-4 py-1.5 rounded-full">
                Medical-Grade Cleaning | Healthcare Certified
              </span>
            </div>
          )}
          
          <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-6 animate-slideUp">
            {title}
          </h1>
          
          <p className="text-xl text-center text-gray-200 mb-8 max-w-2xl mx-auto animate-fadeIn">
            {description}
          </p>

          <div className="bg-white/95 backdrop-blur p-6 rounded-lg shadow-lg max-w-4xl mx-auto mb-8 animate-slideUp">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="text-[#0063B2] group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B1B3D]">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 animate-fadeIn">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#0063B2] text-white px-8 py-3 rounded-lg hover:bg-[#004d8f] transition text-lg font-semibold"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="bg-white text-[#0063B2] px-8 py-3 rounded-lg border-2 border-[#0063B2] hover:bg-blue-50 transition text-lg font-semibold"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;