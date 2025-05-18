import React from 'react';
import { Link } from 'react-router-dom';

export const ContactContainer: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image - full screen with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="../../img/contact-img.png" 
          alt="Professional team" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content positioned over image */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Main heading */}
        <h2 className="text-heading-2 font-gt-america uppercase mb-12 text-white text-center">
          Grow your business without limits, starting now
        </h2>
        
        {/* CTA Link */}
        <Link 
          to="/contact" 
          className="inline-block relative"
        >
          <span className="text-lg uppercase font-medium tracking-wide text-white">
            GET IN TOUCH
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
        </Link>
      </div>
    </div>
  );
};