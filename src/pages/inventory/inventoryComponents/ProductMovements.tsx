import React from 'react'
import DynamicTable from '../../../components/DynamicTable';
import { CiShop } from "react-icons/ci";
const ProductMovements: React.FC = () => {
  const categories = [
    { storeName: 'primer moviento', storeInHand: '11/11/2024' },
    { storeName: 'primer moviento', storeInHand: '11/11/2024' },
    { storeName: 'primer moviento', storeInHand: '11/11/2024' },
    { storeName: 'primer moviento', storeInHand: '11/11/2024' },
    { storeName: 'primer moviento', storeInHand: '11/11/2024' },
    { storeName: 'primer moviento', storeInHand: '11/11/2024' },
  ];
  const headers = [...(['storeName', 'storeInHand'] as const)];

  return (
    <div className=' grid max-lg:grid-cols-1 grid-cols-[70%_20%] items-center '>
      <DynamicTable
        data={categories}
        headers={headers}
      />
      <div className='  w-full   max-lg:flex justify-center  pt-3 lg:m-[50%]'>
      <CiShop className=' text-9xl '/>
      </div>
    </div>

  )
}

export default ProductMovements