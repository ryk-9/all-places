import React from 'react';
import { ContainerProps } from '../../types';

export const NavContainer: React.FC<ContainerProps> = ({ className = '' }) => {
  return (
    <div className={`nav-container w-full ${className}`}>
      <div className="nav flex items-center justify-between">
        <img 
          src="/img/logo-1.svg" 
          alt="All Places" 
          className="nav-logo h-[24px]" 
        />
        <button className="nav-menu flex flex-col justify-between h-[14px]">
          <span className="line w-[20px] h-[2px] bg-primary-black block"></span>
          <span className="line w-[20px] h-[2px] bg-primary-black block"></span>
        </button>
      </div>
    </div>
  );
};