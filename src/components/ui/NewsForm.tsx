import React, { useState } from 'react';

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }
    
    try {
      setStatus('loading');
      
      const response = await fetch('http://localhost:8080/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Failed to subscribe');
    }
  };
  
  return (
    <div className="bg-primary-cream py-medium px-standard">
      <h2 className="text-heading-2 font-gt-america uppercase text-center tracking-tight leading-tight mb-8">
        Join our newsletter for updates and early access to event registration. Founders tell us it's worth it.
      </h2>
      
      <p className="text-center italic text-xl mb-8 font-times">
        Sign up for the newsletter
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="relative">
          <label className="block uppercase text-lg font-medium mb-2" htmlFor="email">
            Email address*
          </label>
          
          <div className="flex items-center border-b-2 border-black">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent py-2 focus:outline-none text-lg"
              required
              disabled={status === 'loading'}
            />
            <button 
              type="submit" 
              aria-label="Submit"
              className="flex-shrink-0"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <span className="animate-pulse">...</span>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
          
          {status !== 'idle' && (
            <p className={`mt-2 text-sm font-times ${status === 'error' ? 'text-red-600' : 'text-green-600'}`}>
              {message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};