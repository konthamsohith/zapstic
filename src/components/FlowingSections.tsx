import React from 'react';
import { motion } from 'framer-motion';

const sections = [
  'Data-Driven Decisions',
  'Faster Innovation',
  'Virtual Assistance',
  'Scalable Solutions',
  'Personalized Experiences',
  'Cost Effective',
  'Real-time Insights',
  'Automation',
];

const marqueeVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 18,
        ease: 'linear',
      },
    },
  },
};

export default function FlowingSections() {
  // Duplicate sections for seamless loop
  const displaySections = [...sections, ...sections];
  return (
    <div className="overflow-hidden w-full py-2">
      <motion.div
        className="flex gap-6"
        variants={marqueeVariants}
        animate="animate"
        style={{ minWidth: 'max-content' }}
      >
        {displaySections.map((title, idx) => (
          <div className="relative inline-block" key={idx}>
            {/* White background card as the back layer */}
            <div
              className="absolute inset-0 rounded-full -top-1"
              style={{
                backgroundColor: '#fff',
                boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
                zIndex: 0,
              }}
              aria-hidden="true"
            />
            {/* Main card */}
            <div
              className="relative px-6 py-2 rounded-full shadow text-[#222] font-semibold text-base whitespace-nowrap"
              style={{
                backgroundColor: '#F5F5F5',
                boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
                zIndex: 1,
              }}
            >
              {title}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}