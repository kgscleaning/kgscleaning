import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Award, Clock, CheckCircle } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import Services from '../components/sections/Services';
import ContactForm from '../components/sections/ContactForm';
import PageTransition from '../components/PageTransition';

import heroRetail from './images/retail-hero.jpg';

const Retail = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Professional Service",
      description: "High-quality retail cleaning"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "12 Years Experience",
      description: "Trusted by Ottawa retailers"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Hours",
      description: "Before/after hours service"
    }
  ];

  const services = [
    {
      title: "Store Front Cleaning",
      description: "Complete cleaning for retail spaces",
      features: [
        "Sales floor cleaning",
        "Entrance areas",
        "Display cleaning",
        "Customer areas"
      ]
    },
    {
      title: "Regular Maintenance",
      description: "Keeping your store professional",
      features: [
        "Floor cleaning",
        "Surface cleaning",
        "Trash removal",
        "Staff areas"
      ]
    },
    {
      title: "Additional Services",
      description: "Extra services as needed",
      features: [
        "Window cleaning",
        "Deep cleaning",
        "Storage areas",
        "Special requests"
      ]
    }
  ];

  const featuredClients = [
    {
      name: "The Beer Store",
      description: "Regular retail cleaning services"
    },
    {
      name: "Harmony Hyundai",
      description: "Showroom cleaning services"
    },
    {
      name: "Total Outsource Canada Inc",
      description: "Commercial cleaning client"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Retail & Store Cleaning Services Ottawa | KGS Cleaning</title>
        <meta 
          name="description" 
          content="Professional retail cleaning services in Ottawa. 12 years of experience providing reliable cleaning for stores and showrooms." 
        />
      </Helmet>
      <PageTransition>
        <div className="min-h-screen">
          <HeroSection
            title="Retail Cleaning Services"
            description="Professional cleaning services for stores and showrooms"
            backgroundImage={heroRetail}
            benefits={benefits}
            scrollToSection={scrollToSection}
          />
          
          <div className="bg-[#E8F4FF] py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-[#0B1B3D] mb-12">
                Our Retail Clients
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {featuredClients.map((client, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-[#0063B2] mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{client.name}</h3>
                        <p className="text-gray-600">{client.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Services services={services} />
          <ContactForm />
        </div>
      </PageTransition>
    </>
  );
};

export default Retail;