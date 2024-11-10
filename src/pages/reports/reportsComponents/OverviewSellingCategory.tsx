import React from 'react'
import WhiteCard from '../../../components/WhiteCard'
import DynamicTable from '../../../components/DynamicTable';
const OverviewSellingCategory: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {


  const categories = [
    { Category: 'Vegetables', turnOver: 100, increaseBy: 5 },
    { Category: 'Vegetables', turnOver: 200, increaseBy: 10 },
  ];
  const headers = [...(['Category', 'turnOver', 'increaseBy'] as const)];

  const OverviewHeader = [
    { title: 'Total Profit', money: '$145,545', color: '' },
    { title: 'Revenue', money: '$145,545', color: 'text-orange-400' },
    { title: 'Sales', money: '$145,545', color: 'text-purple-500' }
  ]

  const OverviewBottom = [
    { title: 'New Purchase Value', money: '$145,545', },
    { title: 'Net Sales Value', money: '$145,545', },
    { title: 'Mom Profit', money: '$145,545', },
    { title: 'YoY profir', money: '$145,545', }

  ]


  return (

    <div className=' '>
      <div className=' grid gap-4 grid-cols-2 max-lg:grid-cols-1'>
        <WhiteCard
          title='Overview'
          isDarkMode={isDarkMode}
          children={
            <>
              <div className="grid grid-cols-3 gap-4  max-lg:grid-cols-2 ">
                {OverviewHeader.map((item) => (
                  <div key={item.title} className="flex flex-col  justify-evenly items-center">
                    <p className="text-xl font-semibold ">{item.money}</p>
                    <p className={`text-sm ${item.color}`}>{item.title}</p>
                  </div>
                ))}
              </div>
              <div className=' w-full border my-4'></div>

              <div className="grid grid-cols-4 gap-4  max-lg:grid-cols-2 max-md:grid-cols-2">
                {OverviewBottom.map((item) => (
                  <div key={item.title} className="flex flex-col items-center">
                    <p className="text-xl font-semibold ">{item.money}</p>
                    <p className={`text-sm `}>{item.title}</p>
                  </div>
                ))}
              </div>
            </>
          }
        />
        <WhiteCard
          title='Best Selling Category'
          isDarkMode={isDarkMode}
          children={
            <div className=' overflow-auto'>
              <DynamicTable data={categories} headers={headers} />
            </div>
          }
        />
      </div>

    </div>
  )
}

export default OverviewSellingCategory