import { useForm } from '@formspree/react';
import React, { useState, useEffect } from 'react';
import {
  Menu,
  Phone,
  Mail,
  MapPin,
  Check,
  ChevronRight,
  Award,
  Shield,
  Users,
  Briefcase,
  Store,
  Home,
  ArrowUp
} from 'lucide-react';

// Image imports
import heroImage from './images/hero-office-clean.jpg.jpg';
import logo from './images/logo.jpg.png';
import servicesCommercial from './images/services-commercial.jpg.jpg';
import servicesResidential from './images/services-residential.jpg.jpg';
import servicesRetail from './images/services-retail.jpg.jpg';

const CleaningWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formState, handleSubmit] = useForm("mvgobvbz");

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Optional: Reset form after submission
  if (formState.succeeded) {
    setTimeout(() => {
      const form = document.getElementById('contact-form') as HTMLFormElement;
      if (form) form.reset();
    }, 2000);
  }

  // Smooth scroll function for navigation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      image: servicesCommercial,
      title: "Commercial Cleaning",
      description: "Professional cleaning for offices and industrial spaces",
      features: ["Office spaces", "Medical facilities", "Corporate environments", "Industrial areas"]
    },
    {
      icon: <Store className="w-8 h-8" />,
      image: servicesRetail,
      title: "Store Cleaning",
      description: "Specialized cleaning for retail locations and showrooms",
      features: ["Retail spaces", "Showrooms", "Customer areas", "Staff rooms"]
    },
    {
      icon: <Home className="w-8 h-8" />,
      image: servicesResidential,
      title: "Residential Cleaning",
      description: "Quality home cleaning services",
      features: ["Regular maintenance", "Deep cleaning", "Move-in/out cleaning", "Custom cleaning plans"]
    }
  ];

  const industries = [
    { 
      name: "Retail & Automotive", 
      clients: ["The Beer Store", "Harmony Hyundai", "Total Outsource Canada Inc"] 
    },
    { 
      name: "Medical & Professional", 
      clients: ["Eastboro Dental Care Centre", "Daycare Facility", "Medical Offices"] 
    },
    { 
      name: "Corporate & Technology", 
      clients: ["Versature/Network", "SolPowered Energy", "Mask Management"] 
    },
    { 
      name: "Industrial", 
      clients: ["ATG Industries", "Dominis Engineering", "Best of Best Tile and Marble"] 
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Owner-Operated",
      description: "Direct service and oversight from the business owner"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "14 Years Experience",
      description: "Serving Ottawa businesses since 2010"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trusted Service",
      description: "Preferred provider for major Ottawa businesses"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="KGS Cleaning" 
              className="h-32 md:h-48 w-auto rounded transition-all" 
            />
          </div>
            
            <div className="hidden md:flex space-x-8">
              {['services', 'industries', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-[#0B1B3D] hover:text-[#0063B2] transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
            
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="text-[#0B1B3D]" />
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-slideDown">
            {['services', 'industries', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full px-4 py-2 text-left text-[#0B1B3D] hover:bg-gray-50 transition-colors capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Office Cleaning" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 w-full pt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-6 text-center animate-fadeIn">
              <span className="bg-[#0063B2] text-white text-sm font-medium px-4 py-1.5 rounded-full">
                Owner-Operated | 14 Years of Excellence
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-6 animate-slideUp">
              Ottawa's Most Trusted <br />Commercial Cleaning Service
            </h1>
            
            <p className="text-xl text-center text-gray-200 mb-8 max-w-2xl mx-auto animate-fadeIn">
              Serving Ottawa's leading businesses with owner-operated, professional cleaning services. Trusted by medical facilities, retail chains, and corporate offices.
            </p>

            {/* Benefits Bar */}
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

            {/* CTA Buttons */}
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

      {/* Services Section */}
      <div id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0B1B3D] mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                    {service.icon}
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#0063B2]" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div id="industries" className="py-24 bg-[#E8F4FF]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0B1B3D] mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#0B1B3D]">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.clients.map((client, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-[#0063B2]" />
                      {client}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0B1B3D] mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#E8F4FF] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-[#0B1B3D]">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-3 group">
                  <div className="p-3 bg-[#0063B2] text-white rounded-lg group-hover:scale-110 transition">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-lg">(613) 700-1815</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="p-3 bg-[#0063B2] text-white rounded-lg group-hover:scale-110 transition">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-lg">KGS.cleaning@yahoo.fr</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="p-3 bg-[#0063B2] text-white rounded-lg group-hover:scale-110 transition">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-lg">Serving Ottawa, Ontario</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-[#0B1B3D]">Request a Quote</h3>
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0063B2] focus:outline-none"
                />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0063B2] focus:outline-none"
                />
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0063B2] focus:outline-none"
                  />
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your cleaning needs"
                    required
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0063B2] focus:outline-none resize-none"
                  />
                  <button
                    type="submit"
                    disabled={formState.submitting}
                    className="w-full bg-[#0063B2] text-white px-6 py-3 rounded-lg hover:bg-[#004d8f] transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {formState.submitting ? (
                      <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                  {formState.succeeded && (
                    <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}
                  {formState.errors && Object.keys(formState.errors).length > 0 && (
  <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
    There was an error sending your message. Please try again.
  </div>
)}
                </form>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-[#0B1B3D] text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {['services', 'industries', 'contact'].map((section) => (
                    <li key={section}>
                      <button
                        onClick={() => scrollToSection(section)}
                        className="text-gray-300 hover:text-white transition-colors capitalize"
                      >
                        {section}
                      </button>
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
                  <p>Phone: (613) 700-1815</p>
                  <p>Email: KGS.cleaning@yahoo.fr</p>
                  <p>Location: Ottawa, Ontario</p>
                </div>
              </div>
            </div>
            <div className="text-center text-gray-300 border-t border-gray-700 pt-8">
              <p>© 2024 KGS Cleaning. All rights reserved.</p>
            </div>
          </div>
        </footer>
  
        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 bg-[#0063B2] text-white p-3 rounded-full shadow-lg hover:bg-[#004d8f] transition-all hover:scale-110 animate-fadeIn"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </div>
    );
  };
  
  export default CleaningWebsite;