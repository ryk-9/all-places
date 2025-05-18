import React from 'react';
import { ValueProps } from '../../types';
import { Line } from './Line';

export const ValueItem: React.FC<ValueProps> = ({
  number, title, subtitle, description, image
}) => {
  return (
    <div className="value-item mb-8">
      <h2 className="text-heading-3 text-24px font-gt-america font-normal mb-6">
        {number} – {title}
      </h2>
      
      <img 
        src={image} 
        alt={title} 
        className="w-full h-auto mb-6" 
      />
      
      <p className="text-md font-times mb-1">{subtitle}</p>
      
      <p className="text-md font-times leading-relaxed">{description}</p>
      
      <Line className="mt-10" />
    </div>
  );
};