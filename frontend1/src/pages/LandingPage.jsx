import React from 'react';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/FooterComponent';
import FeaturesSection from '../components/Features';
import HowItWorksSection from '../components/HowItWorksSection';
import AddComplaintComponent from '../components/complaint/CreateComp';
import toast from 'react-hot-toast';

const LandingPage = () => {
  return (
    <div className="d-flex flex-col font-sans bg-white text-gray-800">
      <Navbar />

    
        {/* Intro Section */}
        <section
          id="intro"
          className="relative h-[32rem] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/imgs/box.jpg')" }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <div className="relative z-10 text-center px-4">
            <h2 className="text-5xl font-extrabold text-white drop-shadow-lg animate-fade-in-down">
              Welcome to Virtual Complaint Box
            </h2>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto animate-fade-in-up">
              A seamless platform designed for students, faculty, and staff to raise and track complaints.
              Empowering your voice with transparency, security, and efficiency.
            </p>
          </div>
        </section>
        
        <FeaturesSection/>
      
      
        <HowItWorksSection/>
 
        <AddComplaintComponent/>
       <section>
        <FooterComponent/>
       </section>
         
    </div>
  );
};

export default LandingPage;
