import WhiteCard from "../../../components/WhiteCard";
import React from 'react';

const SalesAndTransactions: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
      <WhiteCard
        title="$45,385"
        subtitle="Sales this week"
        isDarkMode={isDarkMode}
        spanCols={2}
        children={
          <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            12.5%
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        }
      />
      <WhiteCard
        title="Latest Transactions"
        subtitle="This is a list of latest transactions"
        isDarkMode={isDarkMode}
        children={
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`${isDarkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                <tr>
                  <th className="p-4 text-left text-xs font-medium uppercase tracking-wider">Transaction</th>
                  <th className="p-4 text-left text-xs font-medium uppercase tracking-wider">Date & Time</th>
                  <th className="p-4 text-xs font-medium uppercase tracking-wider text-center">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 whitespace-nowrap text-sm font-normal">
                    Payment from <span className="font-semibold">Bonnie Green</span>
                  </td>
                  <td className="p-4 whitespace-nowrap text-sm font-normal">Apr 23, 2021</td>
                  <td className="p-4 whitespace-nowrap text-sm font-semibold text-center">$2300</td>
                </tr>
                {/* Agregar más filas de transacciones si es necesario */}
              </tbody>
            </table>
          </div>
        }
      />
    </div>
  );
};

export default SalesAndTransactions;
