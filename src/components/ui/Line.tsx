import React from 'react';

interface LineProps {
  className?: string;
}

export const Line: React.FC<LineProps> = ({ className = '' }) => {
  return <div className={`h-[1px] bg-primary-black ${className}`}></div>;
};