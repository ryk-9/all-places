import React from 'react';
import { Link } from 'react-router-dom';

export const ContactContainer: React.FC = () => {
  return (
    <div className='relative w-full h-screen'>
      {/* Background image - full screen with overlay */}
      <div className='absolute inset-0 z-0'>
        <img 
          src='../public/img/contact-team.png' 
          alt='Professional team' 
          className='w-full h-full object-cover grayscale'
        />
        {/* Optional light overlay for better text visibility */}
        <div className='absolute inset-0 bg-black opacity-10'></div>
      </div>
      
      {/* Content positioned over image */}
      <div className='relative z-10 flex flex-col justify-center items-center h-full px-6 text-center'>
        {/* Main heading */}
        <h2 className='text-4xl font-bold mb-16 text-black'>
          Grow your business without limits, starting now
        </h2>
        
        {/* CTA Link */}
        <Link 
          to='/contact' 
          className='inline-block relative'
        >
          <span className='text-xl uppercase font-medium tracking-wide text-black'>
            GET IN TOUCH
          </span>
          <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-red-600'></span>
        </Link>
      </div>
    </div>
  );
};