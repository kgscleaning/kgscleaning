import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Award, Clock, CheckCircle } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import Services from '../components/sections/Services';
import ContactForm from '../components/sections/ContactForm';
import PageTransition from '../components/PageTransition';

import heroIndustrial from './images/industrial-hero.jpg';

const Industrial = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Professional Service",
      description: "Thorough industrial cleaning"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "12 Years Experience",
      description: "Trusted by industrial clients"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Hours",
      description: "Service times that work for you"
    }
  ];

  const services = [
    {
      title: "Industrial Space Cleaning",
      description: "Complete cleaning for industrial facilities",
      features: [
        "Warehouse floors",
        "Production areas",
        "Storage spaces",
        "Work areas"
      ]
    },
    {
      title: "Regular Maintenance",
      description: "Keeping your facility clean",
      features: [
        "Floor cleaning",
        "Surface cleaning",
        "Trash removal",
        "Common areas"
      ]
    },
    {
      title: "Additional Services",
      description: "Extra services as needed",
      features: [
        "Window cleaning",
        "Deep cleaning",
        "Loading areas",
        "Special requests"
      ]
    }
  ];

  const featuredClients = [
    {
      name: "ATG Industries",
      description: "Industrial cleaning services"
    },
    {
      name: "Dominis Engineering",
      description: "Regular facility maintenance"
    },
    {
      name: "Best of Best Tile and Marble",
      description: "Commercial cleaning client"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industrial Facility Cleaning Services Ottawa | KGS Cleaning</title>
        <meta 
          name="description" 
          content="Professional industrial cleaning services in Ottawa. 12 years of experience providing reliable cleaning for industrial spaces." 
        />
      </Helmet>
      <PageTransition>
        <div className="min-h-screen">
          <HeroSection
            title="Industrial Cleaning Services"
            description="Professional cleaning services for industrial facilities"
            backgroundImage={heroIndustrial}
            benefits={benefits}
            scrollToSection={scrollToSection}
          />
          
          <div className="bg-[#E8F4FF] py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-[#0B1B3D] mb-12">
                Our Industrial Clients
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

export default Industrial;