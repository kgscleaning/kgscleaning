import React from 'react';
import { useForm } from '@formspree/react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formState, handleSubmit] = useForm("mvgobvbz");

  if (formState.succeeded) {
    setTimeout(() => {
      const form = document.getElementById('contact-form') as HTMLFormElement;
      if (form) form.reset();
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#0B1B3D] mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Get in touch with Ottawa's most trusted commercial cleaning service. We're here to help with all your cleaning needs.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#E8F4FF] p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-[#0B1B3D]">Contact Information</h2>
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
                <span className="text-lg">KGS.cleaning@yahoo.ca</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-3 bg-[#0063B2] text-white rounded-lg group-hover:scale-110 transition">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-lg">Serving Ottawa, Ontario</span>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#0B1B3D]">Business Hours</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-[#0B1B3D]">Request a Quote</h2>
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
  );
};

export default Contact;