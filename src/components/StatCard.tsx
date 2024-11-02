// StatCard.tsx
import React from 'react';
import useTheme from '../hooks/useTheme';
import { StatCardProps } from '../models/dtos/components/componentsProps';

const StatCard: React.FC<StatCardProps> = ({ value, label, percentage, percentageColor, iconDirection }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`shadow-md rounded-lg p-4 sm:p-6 xl:p-8 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <span className={`text-2xl sm:text-3xl leading-none font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{value}</span>
          <h3 className={`text-base font-normal ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>{label}</h3>
        </div>
        <div className={`ml-5 w-0 flex items-center justify-end flex-1 font-extrabold ${percentageColor} text-base`}>
          {percentage}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d={iconDirection === 'up' ? 'M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z' : 'M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z'}
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
