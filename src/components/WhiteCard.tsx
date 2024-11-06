import React from 'react'
import { WhiteCardProps } from "../models/dtos/components/componentsProps";

const WhiteCard: React.FC<WhiteCardProps> = ({ className,title, subtitle, children, isDarkMode, spanCols = 1 }) => {
    return (
      <div
        className={`${className} shadow rounded-lg p-4 sm:p-6 xl:p-8 ${spanCols > 1 ? `2xl:col-span-${spanCols}` : ''} ${
          isDarkMode ? 'bg-gray-700' : 'bg-white'
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl sm:text-3xl leading-none font-bold">{title}</h3>
            {subtitle && <h4 className="text-base font-normal text-gray-500">{subtitle}</h4>}
          </div>
        </div>
        <div>{children}</div>
      </div>
    );
  };
  
  export default WhiteCard;
