import React from 'react';
import { ContainerProps } from '../../types';
import { Line } from '../ui/Line';

export const NavContainer: React.FC<ContainerProps> = ({ className = '' }) => {
  return (
    <div className={`nav-container w-full px-0 ${className}`}>
      <div className="nav flex items-center justify-between py-4 relative">
        <button className="nav-menu flex flex-col justify-between h-[20px]">
          <span className="line w-[20px] h-[2px] bg-primary-black block"></span>
          <span className="line w-[20px] h-[2px] bg-primary-black block mt-2"></span>
          <span className="line w-[20px] h-[2px] bg-primary-black block mt-2"></span>
        </button>
        <div className="absolute inset-0 flex justify-center items-center">
          <img src="../../img/logo-1.svg" alt="Logo" className="h-6 w-auto" />
        </div>
      </div>
      <Line className="w-full mt-2" />
    </div>
  );
};