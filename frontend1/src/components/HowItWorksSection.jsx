import React from 'react';

const steps = [
  {
    title: 'Submit Your Complaint',
    description: 'Fill out the complaint form by choosing a category, describing your issue, and adding any relevant attachments.',
    borderColor: 'border-green-600',
    dotColor: 'bg-pink-500'
  },
  {
    title: 'Complaint Review',
    description: 'Your complaint is reviewed and routed to the appropriate department for investigation.',
    borderColor: 'border-yellow-500',
    dotColor: 'bg-yellow-500'
  },
  {
    title: 'Track Progress',
    description: 'Monitor the status of your complaint in real-time until a resolution is achieved.',
    borderColor: 'border-indigo-500',
    dotColor: 'bg-indigo-500'
  },
  {
    title: 'Feedback & Resolution',
    description: 'Provide feedback on the resolution process to help us improve our service.',
    borderColor: 'border-pink-500',
    dotColor: 'bg-green-600'
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        
        
         <h2 className="text-4xl font-bold text-center text-white mb-16">How It Works</h2>
          <div className="relative max-w-4xl mx-auto px-6 before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-gray-700 before:-translate-x-1/2"> 
              {steps.map((step, index) => 
                  ( <div key={index} className="mb-12 flex flex-col md:flex-row items-center relative z-10"> 
                  {index % 2 === 0 ? ( <> {/* Left content */} 
                     <div className="md:w-1/2 md:pr-10 mb-6 md:mb-0 text-right"> 
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg 
                        border-l-4 border-green-400 text-gray-100 hover:shadow-green-400/20 transition duration-300"> 
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                         <p className="text-sm text-gray-300">{step.description}</p>
                     </div> 
                    </div>
                            {/* Center dot */}
                    <div className="w-8 h-8 rounded-full border-4 border-gray-800 z-10 bg-green-400 flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>

                    {/* Right spacer */}
                    <div className="md:w-1/2 hidden md:block"></div>
                </>
                ) : (
                <>
                    {/* Left spacer */}
                    <div className="md:w-1/2 hidden md:block"></div>

                    {/* Center dot */}
                    <div className="w-8 h-8 rounded-full border-4 border-gray-800 z-10 bg-green-400 flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>

                    {/* Right content */}
                    <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0 text-left">
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-r-4 border-green-400 text-gray-100 hover:shadow-green-400/20 transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-300">{step.description}</p>
                    </div>
                    </div>
                </>
                )}
            </div>
            ))}
     </div>
   </section>
  );
};

export default HowItWorksSection;
