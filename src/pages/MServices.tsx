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
    <div className="bg-primary-cream">
      {/* Mobile view container with fixed width matching PDF */}
      <div className="mobile-container">
        {/* Navigation */}
        <NavContainer className="px-5 pt-3.5" />
        
        {/* Hero section */}
        <HeroContainer className="mt-[60px]" />
        
        {/* Values section */}
        <ValuesContainer />
        
        {/* Founder section */}
        <FounderContainer />
        
        {/* Contact section */}
        <ContactContainer />
        
        {/* Register section */}
        <RegisterContainer />
        
        {/* Newsletter signup */}
        <NewsContainer />
        
        {/* Footer */}
        <FooterContainer />
      </div>
    </div>
  );
};

export default MHome;