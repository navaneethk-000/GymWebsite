import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  const plans = [
    {
      name: 'Basic Plan',
      price: isYearly ? '₹15,000' : '₹1,500',
      period: isYearly ? '/year' : '/month',
      features: [
        'Full gym access',
        'Locker room access',
        'Basic fitness assessment',
        'Access to cardio equipment',
        'Access to strength equipment',
      ],
      color: 'bg-gradient-to-br from-red-600 to-red-800',
      popular: false,
    },
    {
      name: 'Premium Plan',
      price: isYearly ? '₹25,000' : '₹2,500',
      period: isYearly ? '/year' : '/month',
      features: [
        'Everything in Basic Plan',
        'Unlimited group classes',
        'Nutritional guidance',
        'Monthly body composition analysis',
        'Access to swimming pool',
      ],
      color: 'bg-gradient-to-br from-blue-600 to-blue-800',
      popular: true,
    },
    {
      name: 'Elite Plan',
      price: isYearly ? '₹40,000' : '₹4,000',
      period: isYearly ? '/year' : '/month',
      features: [
        'Everything in Premium Plan',
        '4 Personal training sessions/month',
        'Priority class booking',
        'Customized workout program',
        'Quarterly fitness review',
      ],
      color: 'bg-gradient-to-br from-green-600 to-green-800',
      popular: false,
    },
  ];
  
  const addOns = [
    {
      name: 'Karate Training',
      price: '₹1,200',
      period: '/month',
    },
    {
      name: 'Boxing Classes',
      price: '₹1,500',
      period: '/month',
    },
    {
      name: 'Cinematic Dance Training',
      price: '₹1,800',
      period: '/month',
    },
    {
      name: 'Dedicated Personal Trainer',
      price: '₹1,000',
      period: '/session',
    },
  ];

  return (
    <section id="pricing" className="section bg-gray-950">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Membership Plans</h2>
          <p>
            Choose the perfect membership plan for your fitness journey and unlock a world of 
            premium features and personalized training options.
          </p>
        </div>
        
        <div className="flex justify-center mb-12 fade-in">
          <div className="bg-gray-800 p-1 rounded-full inline-flex">
            <button
              className={`px-6 py-2 rounded-full ${!isYearly ? 'bg-red-600 text-white' : 'text-gray-400'}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full ${isYearly ? 'bg-red-600 text-white' : 'text-gray-400'}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly (Save 15%)
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`card relative overflow-hidden fade-in ${plan.popular ? 'ring-2 ring-red-500 transform scale-105 md:scale-110 z-10' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`${plan.color} p-6 text-white`}>
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1">
                  <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm opacity-80">{plan.period}</span>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* <a 
                  href="#join" 
                  className={`btn w-full ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
                >
                  Choose Plan
                </a> */}
              </div>
            </div>
          ))}
        </div>
        
        <div className="fade-in">
          <h3 className="text-2xl font-bold text-center mb-8">Add-on Services</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addOn, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-6 rounded-lg text-center fade-in"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h4 className="text-xl font-bold text-white mb-2">{addOn.name}</h4>
                <p className="text-red-500 text-xl font-bold mb-4">
                  {addOn.price}<span className="text-sm text-gray-400">{addOn.period}</span>
                </p>
                {/* <a 
                  href="#join" 
                  className="btn btn-outline w-full"
                >
                  Add Service
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;