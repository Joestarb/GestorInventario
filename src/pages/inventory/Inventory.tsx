import React from 'react';
import StatCard from '../../components/StatCard';
import useTheme from '../../hooks/useTheme';
import LatestCustomers from '../dashboard/dashboardComponents/LatestConsumers';
import AcquisitionOverviewInventory from './inventoryComponents/AcquisitionOverviewInventory';

const Inventory: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`h-full w-full  relative overflow-y-auto  ${isDarkMode ? 'dark-components' : 'ligth-components'}`}>
      <main>
        <div className="pt-6 px-4">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
          </div>
          <div className=' grid grid-cols-3  gap-4  max-md:grid-cols-2 max-sm:grid-cols-1'>

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

          <div className="grid grid-cols-2 gap-4 p-2  ">
            <AcquisitionOverviewInventory
            isDarkMode={isDarkMode}
            />
            <LatestCustomers
            isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </main>

    </div>
  )
}

export default Inventory