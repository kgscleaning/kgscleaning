import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Award, Clock, CheckCircle } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import Services from '../components/sections/Services';
import ContactForm from '../components/sections/ContactForm';
import PageTransition from '../components/PageTransition';

import heroOffice from './images/office-hero.jpg';

const Office = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Professional Service",
      description: "Consistent, reliable cleaning"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "12 Years Experience",
      description: "Trusted by Ottawa businesses"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Hours",
      description: "After-hours service available"
    }
  ];

  const services = [
    {
      title: "Regular Office Cleaning",
      description: "Complete cleaning service for office spaces",
      features: [
        "Workstation cleaning",
        "Common areas",
        "Meeting rooms",
        "Reception areas"
      ]
    },
    {
      title: "Daily Maintenance",
      description: "Keeping your workspace professional",
      features: [
        "Floor cleaning",
        "Trash removal",
        "Surface cleaning",
        "Kitchen/break rooms"
      ]
    },
    {
      title: "Additional Services",
      description: "Extra services as needed",
      features: [
        "Window cleaning",
        "Deep cleaning",
        "Evening service",
        "Special requests"
      ]
    }
  ];

  const featuredClients = [
    {
      name: "Versature/Network",
      description: "Regular office cleaning services"
    },
    {
      name: "SolPowered Energy",
      description: "Commercial cleaning client"
    },
    {
      name: "Mask Management",
      description: "Professional office maintenance"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Office Cleaning Services Ottawa | KGS Cleaning</title>
        <meta 
          name="description" 
          content="Professional office cleaning services in Ottawa. 12 years of experience providing reliable cleaning for corporate spaces." 
        />
      </Helmet>
      <PageTransition>
        <div className="min-h-screen">
          <HeroSection
            title="Professional Office Cleaning"
            description="Reliable cleaning services for your corporate space"
            backgroundImage={heroOffice}
            benefits={benefits}
            scrollToSection={scrollToSection}
          />
          
          <div className="bg-[#E8F4FF] py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-[#0B1B3D] mb-12">
                Our Corporate Clients
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

export default Office;