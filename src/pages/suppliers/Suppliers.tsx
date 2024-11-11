import React from 'react';
import useTheme from '../../hooks/useTheme';
import { IoFilter } from "react-icons/io5";
import WhiteCard from '../../components/WhiteCard';

const Suppliers: React.FC = () => {
  const { isDarkMode } = useTheme();

  const fakeSuppliers = [
    { name: 'Acme Corp', product: 'Industrial Tools', contact: '123-456-7890', email: 'contact@acmecorp.com' },
    { name: 'Tech Solutions', product: 'Software Development', contact: '098-765-4321', email: 'info@techsolutions.com' },
    { name: 'Fresh Produce Ltd.', product: 'Organic Vegetables', contact: '555-666-7777', email: 'sales@freshproduce.com' },
  ];

  return (
    <WhiteCard 
      title="Suppliers"
      isDarkMode={isDarkMode} 
      headerActions={
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white  text-xs sm:text-sm font-bold p-2 rounded" type="button">
            Add Supplier
          </button>
          <button
            className={`flex items-center space-x-2 bg-transparent  text-xs sm:text-sm border border-gray-200 font-bold p-2 rounded  ${isDarkMode ? 'text-white' : 'text-black'}`}
            type="button"
          >
            <IoFilter className='mr-1' />
            Filters
          </button>
          <button className={`bg-transparent  text-xs sm:text-sm border border-gray-200 font-bold p-2 rounded  ${isDarkMode ? 'text-white' : 'text-black'}`} type="button">
            Download all
          </button>
        </div>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm border text-gray-500">
          <thead className={`${isDarkMode ? 'bg-gray-600' : 'bg-gray-50'}`}>
            <tr>    
              <th scope="col" className={`px-6 py-4 font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Supplier Name</th>
              <th scope="col" className={`px-6 py-4 font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Product</th>
              <th scope="col" className={`px-6 py-4 font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Contact Number</th>
              <th scope="col" className={`px-6 py-4 font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Email</th>
              <th scope="col" className={`px-6 py-4 font-medium text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Actions</th>
            </tr>
          </thead>
          <tbody className={`divide-y divide-gray-100 border-t border-gray-100 ${isDarkMode ? 'bg-transparent' : 'bg-white'}`}>
            {fakeSuppliers.map((supplier, index) => (
              <tr key={index}>
                <td className="px-6 py-4 font-medium">
                  <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>{supplier.name}</div>
                </td>
                <td className="px-6 py-4 font-medium">
                  <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>{supplier.product}</div>
                </td>
                <td className="px-6 py-4 font-medium">
                  <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>{supplier.contact}</div>
                </td>
                <td className={`px-6 py-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>{supplier.email}</td>
                <td className="px-2 py-2 text-center">
                  <div className="flex gap-2 justify-center">
                    <button className={`bg-transparent active:bg-indigo-600 text-xs border border-gray-200 font-bold uppercase p-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150 ${isDarkMode ? 'text-white' : 'text-black'}`} type="button">Details</button>
                    <button className={`bg-transparent active:bg-indigo-600 text-xs border border-gray-200 font-bold uppercase p-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150 ${isDarkMode ? 'text-white' : 'text-black'}`} type="button">Edit</button>
                    <button className={`bg-transparent active:bg-indigo-600 text-xs border border-gray-200 font-bold uppercase p-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150 ${isDarkMode ? 'text-white' : 'text-black'}`} type="button">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </WhiteCard>
  );
};

export default Suppliers;
