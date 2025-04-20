import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const images = [
    {
      src: 'https://images.pexels.com/photos/4753990/pexels-photo-4753990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Gym facilities with modern equipment',
      category: 'Facilities',
    },
    {
      src: 'https://images.pexels.com/photos/6550851/pexels-photo-6550851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Group fitness class',
      category: 'Classes',
    },
    {
      src: 'https://images.pexels.com/photos/6550891/pexels-photo-6550891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Personal training session',
      category: 'Training',
    },
    {
      src: 'https://images.pexels.com/photos/4162593/pexels-photo-4162593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Boxing training',
      category: 'Boxing',
    },
    {
      src: 'https://images.pexels.com/photos/8611243/pexels-photo-8611243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Karate class in session',
      category: 'Martial Arts',
    },
    {
      src: 'https://images.pexels.com/photos/6551133/pexels-photo-6551133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Weight training area',
      category: 'Facilities',
    },
    {
      src: 'https://images.pexels.com/photos/6551094/pexels-photo-6551094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Yoga class',
      category: 'Classes',
    },
    {
      src: 'https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Cardio area with treadmills',
      category: 'Facilities',
    }
  ];
  
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', ...new Set(images.map(img => img.category))];
  
  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(img => img.category === activeFilter);
  
  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'next'
      ? (selectedImage + 1) % filteredImages.length
      : (selectedImage - 1 + filteredImages.length) % filteredImages.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <section id="gallery" className="section bg-gray-950">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Our Gallery</h2>
          <p>
            Take a visual tour of our premium facilities, energetic classes, and 
            the PowerFit community in action.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8 fade-in">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === category 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg group cursor-pointer fade-in"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openModal(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
              onClick={closeModal}
            >
              <X size={32} />
            </button>
            
            <div className="max-w-4xl max-h-full">
              <img 
                src={filteredImages[selectedImage].src} 
                alt={filteredImages[selectedImage].alt} 
                className="max-w-full max-h-[80vh] object-contain"
              />
              
              <div className="text-center mt-4 text-white">
                <p className="text-lg">{filteredImages[selectedImage].alt}</p>
              </div>
            </div>
            
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
              onClick={() => navigateImage('prev')}
            >
              <span className="sr-only">Previous</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
              onClick={() => navigateImage('next')}
            >
              <span className="sr-only">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;