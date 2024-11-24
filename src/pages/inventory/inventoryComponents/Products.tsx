import React, { useState } from 'react';
import DynamicTable from '../../../components/DynamicTable';
import WhiteCard from '../../../components/WhiteCard';
import Button from '../../../components/Button';
import Select from '../../../components/Select';
import Modal from '../../../components/Modal';
import Input from '../../../components/Input';
import { Link } from 'react-router-dom';
import { useGetInventoriesQuery } from "../../../features/inventories/getInventoriesApi.ts";
import {InventoryProduct} from "../../../models/dtos/inventories/inventories.ts";
const Products: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const { data: inventories = [], isLoading, error } = useGetInventoriesQuery();

    const headers: (keyof InventoryProduct)[] = [
        'id_inventory_product',
        'name_product',
        'stock_product',
        'price_product',
        'name_category_product',
        'name_state',
        'name_movement_type',
        'name_supplier',
        'name_department',
        'name_module',
        'name_company',
        'date_insert',
        'date_update',
        'date_delete',
        'date_restore',
    ];

    // Renderizar acciones para cada fila
    const renderRowActions = () => (
        <Link to={'/products'}>
            <button className="text-blue-500 hover:text-blue-700 font-semibold text-sm">Action</button>
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
        { label: 'Threshold Value', placeholder: 'name', name: 'thresholdValue' },
    ];

    const options = [
        { value: 'option1', label: 'Opción 1' },
        { value: 'option2', label: 'Opción 2' },
        { value: 'option3', label: 'Opción 3' },
    ];

    const voidFunc = () => {
        return 0;
    };

    return (
        <>
            <WhiteCard
                title="Products"
                isDarkMode={isDarkMode}
                children={
                    <>
                        <div className="flex w-full justify-end gap-8">
                            <Button onClick={() => setIsModalOpen(true)}>
                                <p>Add Product</p>
                            </Button>
                            <Select
                                options={options}
                                value={selectedValue}
                                onChange={setSelectedValue}
                                placeholder="Filters"
                            />
                            <Button onClick={voidFunc}>
                                <p>Download All</p>
                            </Button>
                        </div>

                        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="New Product">
                            <div>
                                {inputFields.map((field) => (
                                    <Input
                                        key={field.name}
                                        label={field.label}
                                        type="text"
                                        value=""
                                        placeholder={field.placeholder}
                                        name={field.name}
                                        className="grid grid-cols-2 p-2"
                                    />
                                ))}
                            </div>
                        </Modal>

                        <div className="overflow-auto">
                            {isLoading ? (
                                <p>Loading...</p>
                            ) : error ? (
                                <p className="text-red-500">Error fetching inventories</p>
                            ) : (
                                <DynamicTable data={inventories} headers={headers} renderActions={renderRowActions} />
                            )}
                        </div>
                    </>
                }
            />
        </>
    );
};

export default Products;
