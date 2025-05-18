import React from 'react';
import { ContainerProps } from '../../types';
import { Line } from '../ui/Line';

export const HeroContainer: React.FC<ContainerProps> = ({ className = 'px-0' }) => {
  return (
    <div className={`hero-container bg-primary-gray-bg ${className}`}>
      <div className="mt-20 mb-16">
        <h1 className="text-heading-1 font-gt-america text-center">
          A better model.<br />Period.
        </h1>
      </div>
      
      <div className="hero-img-container grid grid-cols-2 gap-2 mb-12">
        <div className="hero-img-1">
          <img 
            src="../../img/hero-img-1.png" 
            alt="Chair" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hero-img-2">
          <img 
            src="../../img/hero-img-2.png" 
            alt="Red boots" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <p className="text-lg text-center mb-12 font-times leading-relaxed">
        All Places represents the next generation of law firms, built on an infrastructure that aligns incentives between our firm and our clients. We provide corporate legal support to established funds and mission-driven companies that are reshaping the world.
      </p>
      
      <Line className="w-full mt-5 mb-5" />
    </div>
  );
};