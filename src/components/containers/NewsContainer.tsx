import React, { useState } from 'react';

export const NewsContainer: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };
  
  return (
    <div className="bg-[#f5f1eb] py-12 px-6">
      {/* Main heading - uppercase, centered, large */}
      <h2 className="text-center text-2xl font-medium uppercase tracking-tight leading-tight mb-8">
        Join our newsletter for updates and early access to event registration. Founders tell us it's worth it.
      </h2>
      
      {/* Italic subheading */}
      <p className="text-center italic text-xl mb-8">
        Sign up for the newsletter
      </p>
      
      {/* Form with email input and arrow button */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="relative">
          {/* Label */}
          <label className="block uppercase text-lg font-medium mb-2" htmlFor="email">
            Email address*
          </label>
          
          {/* Input with arrow button */}
          <div className="flex items-center border-b-2 border-black">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent py-2 focus:outline-none text-lg"
              required
            />
            <button 
              type="submit" 
              aria-label="Submit"
              className="flex-shrink-0"
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