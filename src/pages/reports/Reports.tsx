import React from 'react';
import WhiteCard from '../../components/WhiteCard';
import useTheme from '../../hooks/useTheme';
import LineChart from './reportsComponents/LineChart';
import OverviewSellingCategory from './reportsComponents/OverviewSellingCategory';
import BestSelling from './reportsComponents/BestSelling';
const Reports: React.FC = () => {
  const revenueData = [20000, 40000, 60000, 80000, 50000, 60000, 70000];
  const profitData = [15000, 25000, 45000, 30000, 40000, 35000, 60000];
  const labels = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];

  const { isDarkMode } = useTheme();
  return (
    <div className='py-6 px-4 '>
      <OverviewSellingCategory
        isDarkMode={isDarkMode}
      />
      <br />
      <WhiteCard
        title='Profit  & Revenue'
        isDarkMode={isDarkMode}
        children={
          <LineChart
            revenueData={revenueData}
            profitData={profitData} labels={labels}
            isDarkMode={isDarkMode}
          />
        }
      />
<br />

<BestSelling  />
    </div>
  )
}

export default Reports