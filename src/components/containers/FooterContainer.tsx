import React from 'react';
import { SocialLinkProps } from '../../types';

interface FooterContainerProps {
  className?: string;
}

export const FooterContainer: React.FC<FooterContainerProps> = ({ className = '' }) => {
  // Define links with actual URLs from the existing implementation
  const socialLinks: SocialLinkProps[] = [
    { name: 'INSTAGRAM', url: 'https://www.instagram.com/thisisallplaces/?hl=en' },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/company/thisisallplaces/' },
    { name: 'BLUESKY', url: 'http://bsky.app/profile/thisisallplaces.bsky.social?_kx=' },
  ];
  
  const legalLinks: SocialLinkProps[] = [
    { name: 'TERMS & CONDITIONS', url: '/terms' },
    { name: 'PRIVACY POLICY', url: '/privacy' }
  ];

  // Try to import logo, fallback to text version if import fails
  let LogoComponent = null;
  try {
    LogoComponent = require('../../public/img/logo.svg').default;
  } catch (e) {
    // SVG import failed - will use text version
  }

  return (
    <footer className={`bg-[#f5f1eb] py-12 flex flex-col items-center ${className} border border-purple-500`}>
      {/* Logo - with fallback */}
      <div className="mb-10">
        {LogoComponent ? (
          <img src={LogoComponent} alt="All Places" className="w-16 h-16" />
        ) : (
          <div className="text-4xl font-bold">
            A<span className="inline-block w-8 h-0.5 bg-black mx-1 align-middle">—</span>P
          </div>
        )}
      </div>
      
      {/* All links in one section with consistent spacing */}
      <div className="flex flex-col items-center space-y-6 mb-12">
        {/* Social links */}
        {socialLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.url}
            className="text-lg hover:opacity-75 transition-opacity"
          >
            {link.name}
          </a>
        ))}
        
        {/* Legal links */}
        {legalLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.url}
            className="text-lg hover:opacity-75 transition-opacity"
          >
            {link.name}
          </a>
        ))}
      </div>
      
      {/* Legal notices */}
      <div className="flex flex-col items-center space-y-2">
        <p className="text-lg">ATTORNEY ADVERTISING</p>
        <p className="text-lg">© 2022 ALL PLACES</p>
      </div>
    </footer>
  );
};