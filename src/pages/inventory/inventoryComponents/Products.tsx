import React, { useState } from 'react'
import DynamicTable from '../../../components/DynamicTable';
import WhiteCard from '../../../components/WhiteCard';
import Button from '../../../components/Button';
import Select from '../../../components/Select';
import Modal from '../../../components/Modal';
import Input from '../../../components/Input';
import { Link } from 'react-router-dom';
const Products: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const products = [
        { product: 'Tomato', buyingPrice: '$123', quantity: '12kg', thresholdValue: '225kg', expiryDate: '2025-12-30', availability: '2.3%', status: 'Out of Stock',     },
        { product: 'Potato', buyingPrice: '$50', quantity: '10kg', thresholdValue: '100kg', expiryDate: '2025-08-20', availability: '50%', status: 'In-Stock',    },
        { product: 'Carrot', buyingPrice: '$30', quantity: '5kg', thresholdValue: '75kg', expiryDate: '2025-07-10', availability: '5%', status: 'less than 10',     },
        { product: 'Lettuce', buyingPrice: '$10', quantity: '3kg', thresholdValue: '50kg', expiryDate: '2025-06-15', availability: '80%', status: 'In-Stock',    },
        { product: 'Tomato', buyingPrice: '$123', quantity: '12kg', thresholdValue: '225kg', expiryDate: '2025-12-30', availability: '2.3%', status: 'Out of Stock',     },
        { product: 'Potato', buyingPrice: '$50', quantity: '10kg', thresholdValue: '100kg', expiryDate: '2025-08-20', availability: '50%', status: 'In-Stock',    },
        { product: 'Carrot', buyingPrice: '$30', quantity: '5kg', thresholdValue: '75kg', expiryDate: '2025-07-10', availability: '5%', status: 'less than 10',     },
        { product: 'Lettuce', buyingPrice: '$10', quantity: '3kg', thresholdValue: '50kg', expiryDate: '2025-06-15', availability: '80%', status: 'In-Stock',    },

    ];
    const headers = [...(['product', 'buyingPrice', 'quantity', 'thresholdValue', 'expiryDate', 'availability', 'status'] as const)];

    const renderRowActions = () => (
        <Link to={'/products'}>
        <button
          className="text-blue-500 hover:text-blue-700 font-semibold text-sm"
        >
          Action
        </button>
        </Link>
      );


    const inputFields = [
        { label: 'Product Name', placeholder: 'name', name: 'productName' },
        { label: 'Product Id', placeholder: 'Id', name: 'productId' },
        { label: 'Category', placeholder: 'name', name: 'category' },
        { label: 'Buying', placeholder: 'name', name: 'buying' },
        { label: 'Quantity', placeholder: 'name', name: 'quantity' },
        { label: 'Unit', placeholder: 'name', name: 'unit' },
        { label: 'Expire Date', placeholder: 'name', name: 'expireDate' },
        { label: 'Threshold Value', placeholder: 'name', name: 'thresholdValue' }
    ];

    const options = [
        { value: 'option1', label: 'Opción 1' },
        { value: 'option2', label: 'Opción 2' },
        { value: 'option3', label: 'Opción 3' },
    ];
    const voidFunc = () => {
        return 0
    }
    return (
        <>
            <WhiteCard
                title='Products'
                isDarkMode={isDarkMode}
                children={
                    <>
                        <div className=' flex  w-full justify-end gap-8'>
                            <Button
                                onClick={() => setIsModalOpen(true)}
                                children={
                                    <p>Add Product</p>
                                } />
                            <Select
                                options={options}
                                value={selectedValue}
                                onChange={setSelectedValue}
                                placeholder="Filters"
                            />
                            <Button
                                onClick={voidFunc}
                                children={
                                    <p>Download All</p>
                                }
                            />
                        </div>

                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            title="New Product"
                        >

                            <div className='  '>
                                {inputFields.map(field => (
                                    <Input
                                        key={field.name}
                                        label={field.label}
                                        type='text'
                                        value=''
                                        placeholder={field.placeholder}
                                        name={field.name}
                                        className='grid grid-cols-2 p-2'
                                    />
                                ))}
                        </div>
                        </Modal>
<div className=' overflow-auto'>
<DynamicTable  data={products} headers={headers} renderActions={renderRowActions} />

</div>
                    </>
                }
            />
        </>

    )
}

export default Products