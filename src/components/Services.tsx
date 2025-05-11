import React from 'react';

const Services: React.FC = () => {

  //Whatsapp redirection
  const phoneNumber = "7907425360"; // replace with the owner's number
  const message = "Hi! I'm interested in joining Stay Fit Gym. Please share the details.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  
  const services = [
    {
      title: 'Karate Training',
      description: 'Master the art of self-defense with our expert-led karate classes for all skill levels.',
      image: 'https://images.pexels.com/photos/7045748/pexels-photo-7045748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Boxing Classes',
      description: 'Develop strength, agility, and confidence with our high-energy boxing programs.',
      image: 'https://images.pexels.com/photos/6456147/pexels-photo-6456147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Cinematic Dance Training',
      description: 'Express yourself through movement with our unique cinematic dance training programs.',
      image: 'https://images.pexels.com/photos/7672252/pexels-photo-7672252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Personal Trainer',
      description: 'Achieve your fitness goals faster with personalized guidance from our certified trainers.',
      image: 'https://images.pexels.com/photos/6740056/pexels-photo-6740056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <section id="services" className="section bg-gray-950">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Specialized Services</h2>
          <p>
            Take your fitness journey to the next level with our specialized training services
            designed to help you master new skills and achieve your unique goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative h-80 overflow-hidden rounded-xl fade-in"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 group-hover:bottom-4">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {service.description}
                </p>
                <a 
                  onClick={() => window.open(whatsappURL, "_blank")}
                  className="btn btn-primary py-2 px-4 opacity-0 transition-all duration-500 group-hover:opacity-100"
                >
                  Join Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;