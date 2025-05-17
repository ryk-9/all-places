import React from 'react';
import { ValueProps } from '../../types';
import { ValueItem } from '../ui/ValueItem';
import { Line } from '../ui/Line';

export const ValuesContainer: React.FC = () => {
  const values: ValueProps[] = [
    {
      number: "01",
      title: "WE INCENTIVIZE GREAT WORK",
      subtitle: "Not hours.",
      description: "None of our lawyers are compensated based on their billable hours. That means there's no incentive to work inefficiently, unethically, or when our brains are not at their best. It also means we can attract the best Big Law talent because great lawyers hate this model as much as clients do. We plan. We execute. We deliver. On time.",
      image: "/img/value-img-1.png"
    },
    {
      number: "02",
      title: "WE HATE SURPRISES",
      subtitle: "Unless it's cake.",
      description: "We hate surprise bills, surprise terms in agreements that come back to bite you, surprise deadlines, and surprise personnel changes. Most of our clients engage us on a flat fee, retainer, or budgeted hourly basis. We overcommunicate upfront and throughout, freeing up your mental space to focus on building your company. Feel free to exhale.",
      image: "/img/value-img-2.png"
    },
    {
      number: "03",
      title: "WE ARE BUILT TO ADAPT",
      subtitle: "Not to replicate.",
      description: "We have been tech-enabled from day 1. With low overhead, a lean team, and incentivized efficiency, we actually want technology to reduce our work load. That frees us up to contribute where we have the most value and (truly) most fun.",
      image: "/img/value-img-3.png"
    },
    {
      number: "04",
      title: "THIS IS A TEAM SPORT",
      subtitle: "We don't go it alone.",
      description: "Building a company takes a village. We create community to support our clients and our own business. We engage in advocacy at the state and federal level to increase equity in the capital markets. These things truly matter to us. We are all in this life, this world, and this universe together.",
      image: "/img/value-img-4.png"
    }
  ];

  return (
    <div className="values-container px-5 pt-14 pb-10">
      <h2 className="text-heading-1 font-bold mb-6">Our values</h2>
      <Line className="mb-10" />
      <div className="space-y-12">
        {values.map((value, index) => (
          <ValueItem key={index} {...value} />
        ))}
      </div>
    </div>
  );
};