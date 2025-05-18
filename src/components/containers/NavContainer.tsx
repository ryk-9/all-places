import React from 'react';
import { ContainerProps } from '../../types';
import { Line } from '../ui/Line';
import NavMenu from '../ui/NavMenu';

export const NavContainer: React.FC<ContainerProps> = ({ className = '' }) => {
  return (
    <div className={`nav-container w-full ${className}`}>
      <div className="nav flex items-center justify-between py-4 relative">
        <NavMenu />
        <div className="absolute inset-0 flex justify-center items-center">
          <img src="../../img/logo-1.svg" alt="Logo" className="h-6 w-auto" />
        </div>
      </div>
      <Line className="w-full mt-2" />
    </div>
  );
};