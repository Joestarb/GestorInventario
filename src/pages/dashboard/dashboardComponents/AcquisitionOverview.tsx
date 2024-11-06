import React from 'react';
import WhiteCard from '../../../components/WhiteCard';

const AcquisitionOverview: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    return (
    <WhiteCard 
    title='Acquisition Overview'
    isDarkMode={isDarkMode}>
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className={`px-4 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap ${isDarkMode ? 'bg-gray-600 ' : 'bg-gray-100'}`}>
                Top Channels
              </th>
              <th className={`px-4 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap ${isDarkMode ? 'bg-gray-600 ' : 'bg-gray-100'}`}>
                Users
              </th>
              <th className={`px-4 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px ${isDarkMode ? 'bg-gray-600 ' : 'bg-gray-100'}`}>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Organic Search</th>
              <td className="border-t-0 px-4 align-middle text-xs font-medium whitespace-nowrap p-4">5,649</td>
              <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                  <span className="mr-2 text-xs font-medium">30%</span>
                  <div className="relative w-full">
                    <div className="w-full bg-gray-200 rounded-sm h-2">
                      <div className="bg-cyan-600 h-2 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            {/* Additional rows as needed */}
          </tbody>
        </table>
      </div>
    </WhiteCard>
  );
};

export default AcquisitionOverview;
