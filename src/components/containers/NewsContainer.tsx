import React, { useState } from 'react';

export const NewsContainer: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };
  
  return (
    <div className="bg-primary-cream py-medium px-standard">
      {/* Main heading - uppercase, centered, large */}
      <h3 className="text-heading-2 font-gt-america uppercase text-center tracking-tight leading-tight mb-8 font-normal">
      Join our newsletter for updates and early access to event registration.
      </h3>
      
      {/* Italic subheading */}
      <p className="text-center italic text-xl mb-8 font-times">
      Sign up for the newsletter
      </p>
      
      {/* Form with email input and arrow button */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="relative">
        {/* Input with label on the same line */}
        <div className="flex items-center border-b-2 border-black">
        <label 
          className={`uppercase text-lg font-medium mr-4 whitespace-nowrap ${email ? 'hidden' : ''}`} 
          htmlFor="email"
        >
          Email address*
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmail(email || ' ')} // Trigger re-render to hide label
          className="w-full bg-transparent py-2 focus:outline-none text-lg"
          required
        />
        <button 
          type="submit" 
          aria-label="Submit"
          className="flex-shrink-0 ml-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        </div>
      </div>
      </form>
    </div>
  );
};