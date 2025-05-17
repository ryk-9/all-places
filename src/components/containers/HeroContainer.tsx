import React from 'react';
import { ContainerProps } from '../../types';
import { Line } from '../ui/Line';

export const HeroContainer: React.FC<ContainerProps> = ({ className = '' }) => {
  return (
    <div className={`hero-container ${className}`}>
      <h1 className="text-heading-1 font-bold text-center mb-8">
        A better model. Period.
      </h1>
      
      <div className="hero-img-container grid grid-cols-2 gap-4 mb-8">
        <div className="hero-img-1">
          <img 
            src="../../../public/img/hero-img-1.png" 
            alt="Hero 1" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hero-img-2">
          <img 
            src="../../../public/img/hero-img-2.png" 
            alt="Hero 2" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <p className="text-body text-center mb-8 px-4">
        All Places represents the next generation of law firms, built on an infrastructure that aligns incentives between our firm and our clients. We provide corporate legal support to established funds and mission-driven companies that are reshaping the world.
      </p>
      
      <Line className="w-16 mx-auto" />
    </div>
  );
};