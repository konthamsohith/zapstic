import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageUrl, title, description }) => {
  const isVideo = imageUrl.endsWith('.mp4') || imageUrl.endsWith('.mov');

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 w-full h-full flex flex-col items-stretch border border-gray-100 hover:border-primary-200"
      style={{ minHeight: 260 }}
    >
      <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
        {isVideo ? (
          <video
            src={imageUrl}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
            style={{ objectPosition: 'center' }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="px-6 pb-6 flex items-center justify-between w-full">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <div className="ml-4">
          <svg
            className="w-6 h-6 text-primary-500 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;