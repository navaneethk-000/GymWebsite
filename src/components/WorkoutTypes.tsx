import React from 'react';
import { Weight, Heart, Dumbbell, Zap, Cog as Yoga, Music } from 'lucide-react';

const WorkoutTypes: React.FC = () => {
  const workouts = [
    {
      title: 'Weight Training',
      description: 'Build strength and muscle with our comprehensive weight training programs.',
      icon: <Weight className="h-12 w-12 text-red-500" />,
      color: 'from-red-600 to-red-800',
    },
    {
      title: 'Cardio',
      description: 'Improve heart health and burn calories with our high-energy cardio sessions.',
      icon: <Heart className="h-12 w-12 text-green-500" />,
      color: 'from-green-600 to-green-800',
    },
    {
      title: 'CrossFit',
      description: 'Push your limits with our intense CrossFit workouts for total body fitness.',
      icon: <Dumbbell className="h-12 w-12 text-blue-500" />,
      color: 'from-blue-600 to-blue-800',
    },
    {
      title: 'HIIT',
      description: 'Maximize your workout efficiency with High-Intensity Interval Training.',
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      color: 'from-yellow-600 to-yellow-800',
    },
    {
      title: 'Yoga',
      description: 'Find balance, flexibility and inner peace with our expert-led yoga classes.',
      icon: <Yoga className="h-12 w-12 text-purple-500" />,
      color: 'from-purple-600 to-purple-800',
    },
    {
      title: 'Zumba',
      description: 'Dance your way to fitness with fun, energetic Zumba classes for all levels.',
      icon: <Music className="h-12 w-12 text-pink-500" />,
      color: 'from-pink-600 to-pink-800',
    },
  ];

  return (
    <section id="workouts" className="section bg-gray-900">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Workout Programs</h2>
          <p>
            Discover a variety of workout programs designed to help you achieve your fitness goals,
            no matter your experience level or preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workouts.map((workout, index) => (
            <div 
              key={index} 
              className="card p-6 fade-in"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`h-16 w-16 rounded-full bg-gradient-to-br ${workout.color} flex items-center justify-center mb-4`}>
                {workout.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{workout.title}</h3>
              <p className="text-gray-400">{workout.description}</p>
              {/* <a 
                href="#join" 
                className="mt-4 inline-block text-red-500 hover:text-red-400 font-medium"
              >
                Learn more →
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutTypes;