import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Trainers: React.FC = () => {
  const trainers = [
    {
      name: 'Alex Johnson',
      role: 'Weightlifting & HIIT Specialist',
      image: 'https://images.pexels.com/photos/6922163/pexels-photo-6922163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: '10+ years of experience in competitive weightlifting and high-intensity training. Certified personal trainer and nutritionist.',
    },
    {
      name: 'Samantha Lee',
      role: 'Yoga & Mindfulness Coach',
      image: 'https://images.pexels.com/photos/8436586/pexels-photo-8436586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Internationally certified yoga instructor with expertise in various forms of yoga, meditation, and stress management techniques.',
    },
    {
      name: 'Michael Torres',
      role: 'Boxing & Martial Arts Expert',
      image: 'https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Former professional boxer with multiple championships. Specializes in boxing techniques, self-defense, and combat fitness.',
    },
    {
      name: 'Jessica Chen',
      role: 'Dance & Cardio Instructor',
      image: 'https://images.pexels.com/photos/6454159/pexels-photo-6454159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Professional dancer with expertise in various dance styles. Creates high-energy routines that make fitness fun and accessible.',
    },
  ];

  return (
    <section id="trainers" className="section bg-gray-900">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Expert Trainers</h2>
          <p>
            Meet our team of certified fitness professionals dedicated to helping you achieve your goals
            through personalized training and expert guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div 
              key={index} 
              className="group bg-gray-800 rounded-xl overflow-hidden fade-in"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                  <div className="flex gap-4">
                    <a href="#" className="text-white hover:text-red-500 transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-red-500 transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-red-500 transition-colors">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
                <p className="text-red-500 mb-3">{trainer.role}</p>
                <p className="text-gray-400 text-sm">{trainer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;