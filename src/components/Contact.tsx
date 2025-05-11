import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation of form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };
  
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-red-500" />,
      title: 'Our Location',
      details: 'Edakkad, Opposite to petrol pumb,Kerala, India',
    },
    {
      icon: <Phone className="h-6 w-6 text-red-500" />,
      title: 'Phone Number',
      details: '+91 98765 43210',
    },
    {
      icon: <Mail className="h-6 w-6 text-red-500" />,
      title: 'Email Address',
      details: 'info@stayfit.com',
    },
    {
      icon: <Clock className="h-6 w-6 text-red-500" />,
      title: 'Working Hours',
      details: 'Mon-Sat: 5:00 AM - 10:00 PM\nSundays: 7:00 AM - 8:00 PM',
    },
  ];

  return (
    <section id="contact" className="section bg-gray-900">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Contact Us</h2>
          <p>
            Reach out to us with any questions about our services, membership options,
            or to schedule a free visit to our facility.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="fade-in">
            <form 
              onSubmit={handleSubmit}
              className="bg-gray-800 rounded-xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full bg-gray-700 text-white px-4 py-3 rounded-md border border-gray-600 focus:outline-none focus:border-red-500 placeholder-transparent transition-all"
                    placeholder="Your Name"
                    required
                  />
                  <label 
                    htmlFor="name"
                    className="absolute left-4 -top-3 text-sm text-gray-400 bg-gray-800 px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm transition-all duration-300"
                  >
                    Your Name
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full bg-gray-700 text-white px-4 py-3 rounded-md border border-gray-600 focus:outline-none focus:border-red-500 placeholder-transparent transition-all"
                    placeholder="Your Email"
                    required
                  />
                  <label 
                    htmlFor="email"
                    className="absolute left-4 -top-3 text-sm text-gray-400 bg-gray-800 px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm transition-all duration-300"
                  >
                    Your Email
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="peer w-full bg-gray-700 text-white px-4 py-3 rounded-md border border-gray-600 focus:outline-none focus:border-red-500 placeholder-transparent transition-all"
                    placeholder="Your Phone"
                  />
                  <label 
                    htmlFor="phone"
                    className="absolute left-4 -top-3 text-sm text-gray-400 bg-gray-800 px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm transition-all duration-300"
                  >
                    Your Phone
                  </label>
                </div>
                
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="peer w-full bg-gray-700 text-white px-4 py-3 rounded-md border border-gray-600 focus:outline-none focus:border-red-500 placeholder-transparent transition-all"
                    placeholder="Your Message"
                    required
                  />
                  <label 
                    htmlFor="message"
                    className="absolute left-4 -top-3 text-sm text-gray-400 bg-gray-800 px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm transition-all duration-300"
                  >
                    Your Message
                  </label>
                </div>
                
                <button 
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8 fade-in">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4"
              >
                <div className="bg-gray-800 p-3 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-gray-400 whitespace-pre-line">{item.details}</p>
                </div>
              </div>
            ))}
            
            <div className="mt-8">
              <div className="bg-gray-800 rounded-xl overflow-hidden h-72">
                {/* Embed Google Map (Static Image Placeholder) */}
                <img 
                  src="https://images.pexels.com/photos/2168292/pexels-photo-2168292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Map location" 
                  className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;