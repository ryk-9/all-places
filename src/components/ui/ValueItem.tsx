import React from 'react';
import { ValueProps } from '../../types';

export const ValueItem: React.FC<ValueProps> = ({
  number, title, subtitle, description, image
}) => {
  return (
    <div className="value-item">
      <div className="flex items-start gap-2 mb-4">
        <span className="text-lg font-medium">{number}</span>
        <div>
          <h3 className="text-lg font-bold uppercase">{title}</h3>
          <p className="text-lg font-medium mt-1">{subtitle}</p>
        </div>
      </div>
      
      <img 
        src={image} 
        alt={title} 
        className="w-full h-auto rounded-lg mb-4" 
      />
      
      <p className="text-body">{description}</p>
    </div>
  );
};