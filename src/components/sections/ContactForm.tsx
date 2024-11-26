// src/components/sections/ContactForm.tsx
import React from 'react';
import { useForm } from '@formspree/react';
import { Mail, Phone, MapPin } from 'lucide-react';
export {}; // Add this line
const ContactForm = () => {
  const [formState, handleSubmit] = useForm("mvgobvbz");

  return (
    <div id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0B1B3D] mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#E8F4FF] p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Phone className="text-[#0063B2]" />
                <span>(613) 700-1815</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#0063B2]" />
                <span>KGS.cleaning@yahoo.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-[#0063B2]" />
                <span>Ottawa, Ontario</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded-lg"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full p-3 border rounded-lg"
              />
              <button
                type="submit"
                disabled={formState.submitting}
                className="w-full bg-[#0063B2] text-white p-3 rounded-lg"
              >
                {formState.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;