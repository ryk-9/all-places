import React, { useState } from 'react';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="border-t border-gray-300 px-0">
      <button 
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl uppercase font-medium">{title}</h3>
        <span className="text-2xl">{isExpanded ? "−" : "+"}</span>
      </button>
      
      {isExpanded && (
        <div className="py-4">
          {children}
        </div>
      )}
    </div>
  );
};

export const FounderContainer: React.FC = () => {
  return (
    <div className="founder-container bg-primary-gray-bg">
      {/* Top border */}
      <div className="border-t border-gray-300 mt-6"></div>
      
      {/* Founder name */}
      <h1 className="text-heading-1 font-gt-america py-6">Jessie Gabriel</h1>
      
      {/* Bottom border after name */}
      <div className="border-t border-gray-300"></div>
      
      {/* Founder image */}
      <div className="my-6">
        <img 
          src="../img/founder.png" 
          alt="Jessie Gabriel" 
          className="w-full"
        />
      </div>
      
      {/* Bottom border after image */}
      <div className="border-t border-gray-300"></div>
      
      {/* About section */}
      <CollapsibleSection title="ABOUT">
        <div className="space-y-4">
          <p className="text-sm uppercase font-medium font-gt-america">ALL PLACES FOUNDER</p>
          <p className="text-sm leading-relaxed font-times">
            Jessie Gabriel is the founder of All Places — a champion for women and a prominent voice on the role 
            of capital ownership and control in achieving gender equity. Raised by a single working mother in 
            Southern California, Jessie's success came with a deep appreciation of how gender norms and unequal 
            access to capital contribute to a systemic lack of opportunities for women-identifying entrepreneurs 
            and executives.
          </p>
          <p className="text-sm leading-relaxed font-times">
            Jessie's personal vision and passionate advocacy are fueled by the desire to create true change. 
            All Places is the culmination of her expertise and ethos, a space for women to formulate businesses 
            of all kinds, receive trusted legal and strategic guidance, and ultimately cultivate long-term 
            financial success.
          </p>
        </div>
      </CollapsibleSection>
      
      {/* Experience section */}
      <CollapsibleSection title="EXPERIENCE">
        <div className="space-y-6">
          <div>
            <h4 className="text-sm uppercase font-medium mb-2">EDUCATION</h4>
            <p className="text-sm leading-relaxed font-times">
              Jessie received her B.A. in economics from Dartmouth College and her J.D. cum laude from the 
              University of Michigan Law School, where she was elected to the Order of the Coif, served as 
              Executive Editor of the Michigan Journal of Race and Law, and won the Campbell Moot Court Competition.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm uppercase font-medium mb-2">CAREER</h4>
            <p className="text-sm leading-relaxed font-times">
              She started her career in economics at an economic consulting firm before moving to a major think tank. 
              As a lawyer, Jessie has worked at some of the country's most prestigious firms, including Cravath, 
              Swaine & Moore and BakerHostetler, where she was the youngest woman to lead her own team and launched 
              the firm's Investment Funds practice. Her clients have ranged from a Fortune 10 company to trailblazing 
              pre-seed startups, and have included numerous women-founded private equity, venture capital, and hedge funds.
            </p>
          </div>
        </div>
      </CollapsibleSection>
      
      {/* Bottom border */}
      <div className="border-t border-gray-300 mt-0"></div>
    </div>
  );
};