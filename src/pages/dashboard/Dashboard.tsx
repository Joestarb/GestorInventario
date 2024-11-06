import React from 'react';
import StatCard from '../../components/StatCard';
import useTheme from '../../hooks/useTheme';
import AcquisitionOverview from './dashboardComponents/AcquisitionOverview';
import LatestCustomers from './dashboardComponents/LatestConsumers';
import SalesAndTransactions from './dashboardComponents/SalesAndTransactions';
const Dashboard: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`h-full w-full relative overflow-y-auto ${isDarkMode ? 'dark-components' : 'ligth-components'}`}>
      <main>
        <div className="pt-6 px-4">
          {/* superior part from component Dashborad show sales and transactions */}
          <SalesAndTransactions isDarkMode={isDarkMode} />

          {/* middle part from Dashboard show stats from webapp */}
          <section >
            <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <StatCard
                value="2,340"
                label="New products this week"
                percentage="14.6%"
                percentageColor="text-green-500"
                iconDirection="up"
              />
              <StatCard
                value="5,355"
                label="Visitors this week"
                percentage="32.9%"
                percentageColor="text-green-500"
                iconDirection="up"
              />
              <StatCard
                value="385"
                label="User signups this week"
                percentage="-2.7%"
                percentageColor="text-red-500"
                iconDirection="down"
              />
            </div>
          </section>


          <div className="grid grid-cols-1  gap-2 2xl:grid-cols-2 xl:gap-4 my-4 mb-5">
            <LatestCustomers isDarkMode={isDarkMode} />
            <AcquisitionOverview isDarkMode={isDarkMode} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard