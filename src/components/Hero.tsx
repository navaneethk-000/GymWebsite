import React from 'react';
import { Play, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {

  //Whatsapp redirection
  const phoneNumber = "7907425360"; // replace with the owner's number
  const message = "Hi! I'm interested in joining Stay Fit Gym. Please share the details.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;



  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Content */}
      <div className="container relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight">
            <span className="block">Transform Your Body,</span>
            <span className="text-red-600">Transform Your Life</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Join the ultimate fitness experience where strength meets community. Start your fitness journey today with our world-class facilities and expert trainers.
          </p>
          
          <div className="flex sm:flex-row gap-4 justify-center">
            <a onClick={() => window.open(whatsappURL, "_blank")} className="btn btn-primary text-lg">
              Join Now
            </a>
            <a href="#pricing" className="btn btn-outline text-lg">
              View Plans
            </a>
            {/* <a href="#video" className="btn btn-secondary text-lg flex items-center gap-2">
              <Play size={20} />
              Watch Tour
            </a>   */}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#workouts" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;