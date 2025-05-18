import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterContainer: React.FC = () => {
  return (
    <div className="bg-primary-gray-bg py-medium px-standard">
      {/* Main heading */}
      <h2 className="text-heading-2 font-gt-america uppercase text-center mb-12">
        A better model.<br />Period.
      </h2>
      
      {/* Image grid */}
      <div className="grid grid-cols-3 gap-1 mb-12">
        <img 
          src="../../img/register-img-1.png" 
          alt="Woman with hair blowing" 
          className="w-full h-40 object-cover"
        />
        <img 
          src="../../img/register-img-2.png" 
          alt="Vintage car taillight" 
          className="w-full h-40 object-cover"
        />
        <img 
          src="../../img/register-img-3.png" 
          alt="Hands with contrasting nail polish" 
          className="w-full h-40 object-cover"
        />
      </div>
      
      {/* Description text */}
      <p className="text-center text-sm leading-relaxed mb-8 font-times">
        All Places represents the next generation of law firms, built on an infrastructure that aligns incentives between our firm and our clients. We provide corporate legal support to established funds and mission-driven companies that are reshaping the world.
      </p>
      
      {/* CTA Link */}
      <div className="flex justify-center">
        <Link 
          to="/register" 
          className="uppercase text-sm font-medium border-b border-gray-400 pb-1 hover:border-black transition-colors"
        >
          REGISTER HERE
        </Link>
      </div>
    </div>
  );
};