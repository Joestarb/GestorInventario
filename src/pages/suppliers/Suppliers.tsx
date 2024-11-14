import React from 'react';
import useTheme from '../../hooks/useTheme';
import { IoFilter } from 'react-icons/io5';
import WhiteCard from '../../components/WhiteCard';
import DynamicTable from '../../components/DynamicTable';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Suppliers: React.FC = () => {
  const { isDarkMode } = useTheme();

  const fakeSuppliers = [
    { name: 'Acme Corp', product: 'Industrial Tools', contact: '123-456-7890', email: 'contact@acmecorp.com' },
    { name: 'Tech Solutions', product: 'Software Development', contact: '098-765-4321', email: 'info@techsolutions.com' },
    { name: 'Fresh Produce Ltd.', product: 'Organic Vegetables', contact: '555-666-7777', email: 'sales@freshproduce.com' },
    { name: 'Green Energy Co.', product: 'Solar Panels', contact: '321-654-9870', email: 'support@greenenergy.com' },
    { name: 'AutoParts Inc.', product: 'Car Parts', contact: '444-555-6666', email: 'contact@autoparts.com' },
    { name: 'Elite Gadgets', product: 'Consumer Electronics', contact: '777-888-9999', email: 'sales@elitegadgets.com' },
    { name: 'Creative Designs', product: 'Graphic Design Services', contact: '555-123-4567', email: 'info@creativedesigns.com' }
  ];

  const headers: any = ['Supplier Name', 'Product', 'Contact Number', 'Email', 'Actions'];

  const renderRow = (supplier: any) => (
    <tr className='border-b' key={supplier.name}>
      <td className={`px-6 py-4 font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>{supplier.name}</td>
      <td className={`px-6 py-4 font-medium ${isDarkMode ? 'text-gray-100text-white' : 'text-gray-800'}`}>{supplier.product}</td>
      <td className={`px-6 py-4 font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>{supplier.contact}</td>
      <td className={`px-6 py-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>{supplier.email}</td>
      <td className="px-2 py-2 text-center">
        <div className="flex gap-2 justify-center">
          <Link to={`/suppliers/details/${supplier.name}`}>
            <button
              className={`bg-transparent text-xs border border-gray-200 font-bold uppercase p-2 rounded hover:bg-green-500 hover:text-white transition-colors  ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}
              type="button"
            >
              Details
            </button>
          </Link>
          <button
            className={`bg-transparent text-xs border border-gray-200 font-bold uppercase p-2 rounded hover:bg-blue-500 hover:text-white transition-colors  ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}
            type="button">
            Edit
          </button>
          <button
            className={`bg-transparent text-xs border border-gray-200 font-bold uppercase p-2 rounded hover:bg-red-500 hover:text-white transition-colors ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}
            type="button">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <WhiteCard
      title="Suppliers"
      isDarkMode={isDarkMode}
      headerActions={
        <div className="flex gap-2">
          <Button className="text-xs sm:text-sm">Add Supplier</Button>
          <button className={`flex items-center space-x-2 bg-transparent text-xs sm:text-sm border border-gray-200 font-bold p-2 rounded ${isDarkMode ? 'text-white' : 'text-black'}`} type="button">
            <IoFilter className='mr-1' />
            Filters
          </button>
          <button className={`bg-transparent text-xs sm:text-sm border border-gray-200 font-bold p-2 rounded ${isDarkMode ? 'text-white' : 'text-black'}`} type="button">Download all</button>
        </div>
      }
    >
      <div className="overflow-x-auto">
        <DynamicTable
          data={fakeSuppliers}
          headers={headers}
          renderRow={renderRow}
          className="text-sm border text-left"
        />
      </div>
    </WhiteCard>
  );
};

export default Suppliers;
