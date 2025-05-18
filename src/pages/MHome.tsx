import React from 'react';
import { NavContainer } from '../components/containers/NavContainer';
import { HeroContainer } from '../components/containers/HeroContainer';
import { ValuesContainer } from '../components/containers/ValuesContainer';
import { FounderContainer } from '../components/containers/FounderContainer';
import { ContactContainer } from '../components/containers/ContactContainer';
import { RegisterContainer } from '../components/containers/RegisterContainer';
import { NewsContainer } from '../components/containers/NewsContainer';
import { FooterContainer } from '../components/containers/FooterContainer';

const MHome: React.FC = () => {
  return (
    <div className="bg-primary-gray-bg">
      {/* Mobile container with width matching the PDF */}
      <div className="mobile-container">
        {/* Navigation */}
        <NavContainer className="pt-3.5" />
        
        {/* Hero section */}
        <HeroContainer className="mt-10" />
        
        {/* Values section */}
        <ValuesContainer />
        
        {/* Register section - moved up to match PDF */}
        <RegisterContainer />

        {/* Founder section */}
        <FounderContainer />
      </div>
      <div>
        {/* Contact section */}
        <ContactContainer />
        
        {/* Newsletter signup */}
        <NewsContainer />
        
        {/* Footer */}
        <FooterContainer />
      </div>
    </div>
  );
};

export default MHome;
