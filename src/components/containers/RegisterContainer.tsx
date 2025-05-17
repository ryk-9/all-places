import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterContainer: React.FC = () => {
  return (
    <div className="bg-[cream] py-16 px-6">
      {/* Top border */}
      <div className="border-t border-gray-300 mb-16"></div>
      
      {/* Main heading */}
      <h2 className="text-4xl font-medium text-center mb-16">
        A better model.<br />Period.
      </h2>
      
      {/* Image grid */}
      <div className="grid grid-cols-3 gap-1 mb-16">
        <img 
          src="../../../public/img/woman-hair.jpg" 
          alt="Woman with hair blowing" 
          className="w-full h-64 object-cover"
        />
        <img 
          src="../../../public/img/vintage-car.png" 
          alt="Vintage car taillight" 
          className="w-full h-64 object-cover"
        />
        <img 
          src="../../../public/img/hands.jpg" 
          alt="Hands with contrasting nail polish" 
          className="w-full h-64 object-cover"
        />
      </div>
      
      {/* Description text */}
      <p className="text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
        All Places represents the next generation of law firms, built on an infrastructure that aligns incentives between our firm and our clients. We provide corporate legal support to established funds and mission-driven companies that are reshaping the world.
      </p>
      
      {/* CTA Link */}
      <div className="flex justify-center">
        <Link 
          to="/register" 
          className="uppercase text-lg font-medium border-b border-gray-400 pb-1 hover:border-black transition-colors"
        >
          REGISTER HERE
        </Link>
      </div>
    </div>
  );
};