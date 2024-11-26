import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Award, Clock, CheckCircle } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import Services from '../components/sections/Services';
import ContactForm from '../components/sections/ContactForm';
import PageTransition from '../components/PageTransition';

import heroMedical from './images/medical-hero.jpg';

const Medical = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Professional Service",
      description: "Thorough and reliable cleaning"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "12 Years Experience",
      description: "Trusted by medical offices"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Hours",
      description: "Service times that suit you"
    }
  ];

  const services = [
    {
      title: "General Medical Cleaning",
      description: "Complete cleaning service for medical facilities",
      features: [
        "Reception areas",
        "Exam rooms",
        "Waiting rooms",
        "Staff areas"
      ]
    },
    {
      title: "Regular Maintenance",
      description: "Keeping your facility clean and professional",
      features: [
        "Floor cleaning",
        "Surface sanitization",
        "Trash removal",
        "Restroom cleaning"
      ]
    },
    {
      title: "Additional Services",
      description: "Extra cleaning services as needed",
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
      name: "Eastboro Dental Care Centre",
      description: "Regular cleaning service client"
    },
    {
      name: "Medical Offices",
      description: "Serving multiple medical facilities in Ottawa"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Medical Facility Cleaning Services Ottawa | KGS Cleaning</title>
        <meta 
          name="description" 
          content="Professional medical facility cleaning services in Ottawa. 12 years of experience providing reliable cleaning for medical offices and clinics." 
        />
      </Helmet>
      <PageTransition>
        <div className="min-h-screen">
          <HeroSection
            title="Medical Facility Cleaning"
            description="Professional cleaning services for medical offices and clinics"
            backgroundImage={heroMedical}
            benefits={benefits}
            scrollToSection={scrollToSection}
          />
          
          <div className="bg-[#E8F4FF] py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-[#0B1B3D] mb-12">
                Our Medical Facility Clients
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
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

export default Medical;