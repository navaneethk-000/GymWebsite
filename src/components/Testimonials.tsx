import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Member since 2022',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'PowerFit transformed my fitness journey completely. The trainers are exceptional - they know exactly how to push me while keeping workouts safe and effective. I\'ve lost 20kg and gained so much strength!',
      rating: 5,
    },
    {
      name: 'Rahul Patel',
      role: 'Member since 2021',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'As someone who was intimidated by gyms, PowerFit\'s welcoming atmosphere made all the difference. The variety of classes keeps me engaged, and the community is so supportive. Best fitness decision I\'ve made!',
      rating: 5,
    },
    {
      name: 'Aisha Khan',
      role: 'Member since 2023',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'The karate classes at PowerFit are exceptional! I joined for fitness but gained confidence and self-defense skills. The instructors are knowledgeable and patient with beginners like me.',
      rating: 4,
    },
    {
      name: 'Vikram Singh',
      role: 'Member since 2020',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'I\'ve been to many gyms, but PowerFit stands out for its premium equipment and cleanliness. The 24/7 access fits my busy schedule perfectly, and the personal training sessions have helped me break through plateaus.',
      rating: 5,
    },
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section bg-gray-900 overflow-hidden">
      <div className="container">
        <div className="section-title fade-in">
          <h2>What Our Members Say</h2>
          <p>
            Hear from our community about how PowerFit has helped them transform their lives
            and achieve their fitness goals.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto fade-in">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800 rounded-2xl p-8 relative">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-24 h-24 rounded-full object-cover border-4 border-red-600"
                      />
                      
                      <div>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`}
                            />
                          ))}
                        </div>
                        
                        <blockquote className="text-lg text-gray-300 italic mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div>
                          <p className="font-bold text-white text-lg">{testimonial.name}</p>
                          <p className="text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition-colors duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-red-600' : 'bg-gray-600'}`}
                >
                  <span className="sr-only">Go to slide {index + 1}</span>
                </button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition-colors duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;