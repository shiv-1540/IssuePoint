import React from 'react';

const features = [
  {
    title: 'Easy Complaint Submission',
    description: 'Users can easily register complaints by selecting a category, providing details, and submitting directly through the intuitive interface.',
    borderColor: 'border-blue-500',
    img: '/imgs/easycomp.png' // placeholder image path
  },
  {
    title: 'Anonymous Option',
    description: 'Choose to remain anonymous to feel safe when reporting sensitive issues.',
    borderColor: 'border-green-500',
    img: '/imgs/anom.png'
  },
  {
    title: 'Real-Time Tracking',
    description: 'Track your complaint’s progress from submission to resolution with real-time updates.',
    borderColor: 'border-purple-500',
    img: '/imgs/tracking.png'
  },
  
  {
    title: '🔐 Role-Based Access Control',
    description: 'Secure login system with different interfaces for Admins and Students/Staff to ensure data integrity and restricted access.',
    borderColor: 'border-red-500',
    img: '/imgs/rolebased.png'
  },
  {
    title: '⚡ Real-Time Updates',
    description: 'Status of complaints is updated live and visible to the complainant, ensuring transparency and timely communication.',
    borderColor: 'border-red-500',
    img: '/imgs/realtime.png'
  },
  {
    title: 'Auto Escalation',
    description: 'Complaints that aren’t addressed promptly are escalated automatically for faster resolution.',
    borderColor: 'border-red-500',
    img: '/assets/escalation.png'
  }
];

const FeaturesSection = () => {
  return (
<section id="features" className="bg-gray-900 py-16"> 
    <h2 className="text-4xl font-extrabold text-white mb-12 text-center"> 
        Features of the Platform 
    </h2> 
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6"> 
        {features.map((feature, idx) => 
           ( <div key={idx} className={`bg-gray-800 text-white rounded-2xl shadow-lg border-t-4 ${feature.borderColor} transition-transform transform hover:scale-[1.03] duration-300`} > 
           <div className="p-6 flex items-start gap-4"> 
            <div className="w-25 h-25 flex-shrink-0 align-center"> 
                <img src={feature.img} alt={feature.title} className="w-full h-full object-contain rounded" /> 
            </div>
            <div> 
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3> 
                <p className="text-gray-300 text-sm">{feature.description}</p> 
            </div>
         </div> 
        </div> ))} 
        </div> 
        
    </section>
  );
};

export default FeaturesSection;
