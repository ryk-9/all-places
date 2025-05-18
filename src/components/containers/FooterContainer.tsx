import React from 'react';
import { SocialLinkProps } from '../../types';

interface FooterContainerProps {
  className?: string;
}

export const FooterContainer: React.FC<FooterContainerProps> = ({ className = '' }) => {
  const socialLinks: SocialLinkProps[] = [
    { name: 'INSTAGRAM', url: 'https://www.instagram.com/thisisallplaces/?hl=en' },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/company/thisisallplaces/' },
    { name: 'BLUESKY', url: 'http://bsky.app/profile/thisisallplaces.bsky.social?_kx=' },
  ];
  
  const legalLinks: SocialLinkProps[] = [
    { name: 'TERMS & CONDITIONS', url: '/terms' },
    { name: 'PRIVACY POLICY', url: '/privacy' }
  ];

  let LogoComponent = null;
  try {
    LogoComponent = '../../img/logo-2.svg';
  } catch (e) {}

  return (
    <footer className={`bg-primary-gray-bg py-medium flex flex-col items-center mb-12 px-0 ${className}`}>
      <div className="mb-8">
        {LogoComponent ? (
          <img src={LogoComponent} alt="All Places" className="w-16 h-16" />
        ) : (
          <div className="text-4xl font-bold">
            A<span className="inline-block w-8 h-0.5 bg-black mx-1 align-middle">—</span>P
          </div>
        )}
      </div>
      
      <div className="flex flex-col items-center space-y-4 mb-8">
        {socialLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.url}
            className="text-md hover:opacity-75 transition-opacity font-gt-america"
          >
            {link.name}
          </a>
        ))}
        {legalLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.url}
            className="text-md hover:opacity-75 transition-opacity font-gt-america"
          >
            {link.name}
          </a>
        ))}
      </div>
      
      <div className="flex flex-col items-center space-y-1">
        <p className="text-md font-gt-america">ATTORNEY ADVERTISING</p>
        <p className="text-md font-gt-america">© 2022 ALL PLACES</p>
      </div>
    </footer>
  );
};
