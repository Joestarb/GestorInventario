import React from 'react';
import DynamicTable from '../../../components/DynamicTable';
import WhiteCard from '../../../components/WhiteCard';
import Button from '../../../components/Button';
import Select from '../../../components/Select';
import Modal from '../../../components/Modal';
import Input from '../../../components/Input';
import { InventoryProduct } from "../../../models/dtos/inventories/inventories.ts";
import SkeletonLoader from "../../../components/SkeletonLoader.tsx";
import useLanguage from "../../../hooks/useLanguage.ts";
import { PostProduct } from "../../../models/dtos/inventories/inventories.ts";
import {ProductsProps} from "../../../models/dtos/products/Product.ts";

const Products: React.FC<ProductsProps> = ({
                                               isDarkMode,
                                               inventories,
                                               isLoading,
                                               error,
                                               handleEdit,
                                               handleDelete,
                                               formData,
                                               headers,
                                               inputFields,
                                               editMode,
                                               setIsModalOpen,
                                               handleSubmit,
                                               handleChange,
                                               isModalOpen,
                                               selectedValue,
                                               setSelectedValue,
                                               setEditMode
                                           }) => {    const { translate } = useLanguage();

    const renderRowActions = (row: InventoryProduct) => (
        <div className="flex gap-2">
            <Button
                onClick={() => handleEdit(row)}
                className="text-blue-500 hover:text-blue-700 font-semibold text-sm"
            >
                {translate('edit')}
            </Button>
            <Button
                onClick={() => handleDelete(row.id_inventory_product)}
                className="text-red-500 hover:text-red-700 font-semibold text-sm"
            >
                {translate('delete')}
            </Button>
        </div>
    );

    return (
        <>
            <WhiteCard
                title="Products"
                isDarkMode={isDarkMode}
                children={
                    <>
                        <div className="flex w-full justify-end gap-8">
                            <Button onClick={() => {
                                setEditMode(false);
                                setIsModalOpen(true);
                            }}>
                                <p>Add Product</p>
                            </Button>
                            <Select
                                options={[{ value: '', label: 'All' }]}
                                value={selectedValue}
                                onChange={setSelectedValue}
                                placeholder="Filters"
                            />
                        </div>

                        <Modal onSave={handleSubmit} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editMode ? "Edit Product" : "New Product"}>
                            <form onSubmit={handleSubmit}>
                                {inputFields.map((field) => (
                                    <Input
                                        key={field.name}
                                        label={field.label}
                                        type="text"
                                        value={formData[field.name as keyof PostProduct] || ''}
                                        placeholder={field.placeholder}
                                        name={field.name}
                                        onChange={handleChange}
                                    />
                                ))}
                            </form>
                        </Modal>

                        <div className="overflow-auto">
                            {isLoading ? (
                                <SkeletonLoader />
                            ) : error ? (
                                <p className="text-red-500">Error fetching inventories</p>
                            ) : (
                                <DynamicTable
                                    data={inventories}
                                    headers={headers.map((header) => header.label)}
                                    renderRow={(row) => (
                                        <tr key={row.id_inventory_product}>
                                            {headers.map(({ key }) => (
                                                <td key={key} className="px-4 py-2">
                                                    {row[key]}
                                                </td>
                                            ))}
                                            <td>{renderRowActions(row)}</td>
                                        </tr>
                                    )}
                                />
                            )}
                        </div>
                    </>
                }
            />
        </>
    );
};

export default Products;
