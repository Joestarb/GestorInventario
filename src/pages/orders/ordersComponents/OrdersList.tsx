import React, { useState } from 'react'
import DynamicTable from '../../../components/DynamicTable';
import WhiteCard from '../../../components/WhiteCard';
import Button from '../../../components/Button';
import Select from '../../../components/Select';
import Modal from '../../../components/Modal';
import Input from '../../../components/Input';

const OrdersList: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const orders = [
        { product: 'Maggi', ordervalue: '₹4306', quantity: '43 Packets', orderid: '225', expecteddelivery: '2025-12-30', status: 'Delayed',     },
        { product: 'Bru', ordervalue: '₹2557', quantity: '22 Packets', orderid: '10', expecteddelivery: '2025-08-20', status: 'Confirmed',    },
        { product: 'Red Bull', ordervalue: '₹4075', quantity: '36 Packets', orderid: '751', expecteddelivery: '2025-07-10', status: 'Returned',     },
        { product: 'Bourn Vita', ordervalue: '₹5052', quantity: '14 Packets', orderid: '50', expecteddelivery: '2025-06-15',  status: 'Out for delivery',    },
        { product: 'Horlicks', ordervalue: '₹5370', quantity: '5 Packets', orderid: '225', expecteddelivery: '2025-12-30', status: 'Returned',     },
        { product: 'Harpic', ordervalue: '₹6065', quantity: '10 Packets', orderid: '100', expecteddelivery: '2025-08-20', status: 'Out for delivery',    },
        { product: 'Ariel', ordervalue: '₹4078', quantity: '23 Packets', orderid: '75', expecteddelivery: '2025-07-10', status: 'Delayed',     },
        { product: 'Scotch Brite', ordervalue: '₹3559', quantity: '43 Packets', orderid: '5070', expecteddelivery: '2025-06-15',  status: 'Confirmed',    },
        { product: 'Coca cola', ordervalue: '₹2055', quantity: '41 Packets', orderid: '50', expecteddelivery: '2025-06-15',  status: 'Delayed',    }
    ];
    const headers = [...(['product', 'ordervalue', 'quantity', 'orderid', 'expecteddelivery', 'status'] as const)];

    const inputFields = [
        { label: 'Product Name', placeholder: 'enter product name', name: 'productName' },
        { label: 'Product Id', placeholder: 'enter product ID', name: 'productId' },
        { label: 'Category', placeholder: 'select product category', name: 'category' },
        { label: 'Order valiue', placeholder: 'enter order value', name: 'category' },
        { label: 'Quantity', placeholder: 'enter product quantity', name: 'quantity' },
        { label: 'Unit', placeholder: 'enter product unit', name: 'unit' },
        { label: 'Buying price', placeholder: 'enter buying price', name: 'buying' },
        { label: 'Day of delivery', placeholder: 'enter date of delivery', name: 'dayofdelivery' },
    ];

    const options = [
        { value: 'option1', label: 'Opción 1' },
        { value: 'option2', label: 'Opción 2' },
        { value: 'option3', label: 'Opción 3' },
    ];

    return(
        <>
            <WhiteCard
                title='Orders'
                isDarkMode={isDarkMode}
                children={
                    <>
                        <div className=' flex  w-full justify-end gap-8'>
                            <Button
                                onClick={() => setIsModalOpen(true)}
                                children={
                                    <p>Add Order</p>
                                } 
                            />
                            <Select
                                options={options}
                                value={selectedValue}
                                onChange={setSelectedValue}
                                placeholder="Filters"
                            />
                            <Button
                                children={
                                    <p>Order history</p>
                                }
                            />
                        </div>

                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            title="New Order"
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
                        <div className='overflow-auto'>
                            <DynamicTable  data={orders} headers={headers}/>
                        </div>
                    </>
                }
            />
        </>
    )
}

export default OrdersList