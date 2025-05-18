import React from 'react';
import { SocialLinkProps } from '../../types';
import Logo from '../../public/img/logo.svg';

interface SocialLinksCompProps {
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksCompProps> = ({ className = '' }) => {
  const socialLinks: SocialLinkProps[] = [
    { name: 'INSTAGRAM', url: 'https://www.instagram.com/thisisallplaces/?hl=en' },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/company/thisisallplaces/' },
    { name: 'BLUESKY', url: 'http://bsky.app/profile/thisisallplaces.bsky.social?_kx=' },
  ];
  
  const legalLinks: SocialLinkProps[] = [
    { name: 'TERMS & CONDITIONS', url: '/terms' },
    { name: 'PRIVACY POLICY', url: '/privacy' }
  ];

  return (
    <footer className={`bg-[#f5f1eb] py-12 flex flex-col items-center ${className}`}>
      {/* Logo */}
      <div className='w-16 h-16 mb-12'>
        <img src={Logo} alt='All Places' className='w-full h-full' />
      </div>
      
      {/* Social Links */}
      <div className='flex flex-col items-center space-y-6 mb-8'>
        {socialLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.url}
            className='text-black hover:opacity-70 transition-opacity'
          >
            {link.name}
          </a>
        ))}
      </div>
      
      {/* Legal Links */}
      <div className='flex flex-col items-center space-y-6 mb-16'>
        {legalLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.url}
            className='text-black hover:opacity-70 transition-opacity'
          >
            {link.name}
          </a>
        ))}
      </div>
      
      {/* Legal notices */}
      <div className='flex flex-col items-center space-y-2'>
        <p className='text-black uppercase font-times'>ATTORNEY ADVERTISING</p>
        <p className='text-black font-times'>© 2022 ALL PLACES</p>
      </div>
    </footer>
  );
};