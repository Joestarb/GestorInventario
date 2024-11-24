import React, { useState } from 'react';
import DynamicTable from '../../../components/DynamicTable';
import WhiteCard from '../../../components/WhiteCard';
import Button from '../../../components/Button';
import Select from '../../../components/Select';
import Modal from '../../../components/Modal';
import Input from '../../../components/Input';
import { Link } from 'react-router-dom';
import { useGetInventoriesQuery } from "../../../features/inventories/getInventoriesApi.ts";
import { InventoryProduct } from "../../../models/dtos/inventories/inventories.ts";
import SkeletonLoader from "../../../components/SkeletonLoader.tsx";
import useLanguage from "../../../hooks/useLanguage.ts";
import { useCreateInventoryProductMutation } from "../../../features/inventories/postInventoriesApi.ts";
import { PostProduct } from "../../../models/dtos/inventories/inventories.ts"; // Importar la interfaz adecuada

const Products: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const { translate } = useLanguage();
    const { data: inventories = [], isLoading, error } = useGetInventoriesQuery();
    const headers: { key: keyof InventoryProduct; label: string }[] = [
        { key: 'id_inventory_product', label: 'ID' },
        { key: 'name_product', label: translate('nameProduct') },
        { key: 'stock_product', label: 'Stock' },
        { key: 'price_product', label: translate('price') },
        { key: 'name_category_product', label: translate('category') },
        { key: 'name_movement_type', label: translate('movementType') },
        { key: 'name_supplier', label: translate('supliers') },
        { key: 'name_department', label: translate('department') },
    ];

    const renderRowActions = () => (
        <>
            <Link to={'/products'}>
                <Button className="text-blue-500 hover:text-blue-700 font-semibold text-sm">{translate('viewDetail')}</Button>
            </Link>
            <Button className="text-blue-500 hover:text-blue-700 font-semibold text-sm">{translate('edit')}</Button>
        </>
    );

    const inputFields = [
        { label: 'Product Name', placeholder: 'name', name: 'name_product' },
        { label: 'Stock', placeholder: 'Stock', name: 'stock_product' },
        { label: 'Price', placeholder: 'Price', name: 'price_product' },
        { label: 'Category', placeholder: 'Category ID', name: 'id_category_product_Id' },
        { label: 'Movement Type', placeholder: 'Movement Type ID', name: 'id_movement_type_Id' },
        { label: 'Supplier', placeholder: 'Supplier ID', name: 'id_supplier_Id' },
        { label: 'Department', placeholder: 'Department ID', name: 'id_department_Id' },
        { label: 'Company', placeholder: 'Company ID', name: 'id_company_Id' },
    ];

    const options = [
        { value: 'option1', label: 'Opción 1' },
        { value: 'option2', label: 'Opción 2' },
        { value: 'option3', label: 'Opción 3' },
    ];

    const [formData, setFormData] = useState<PostProduct>({
        name_product: '',
        stock_product: 0,
        price_product: 0,
        id_category_product_Id: 0,
        id_state_Id: 0,
        id_movement_type_Id: 0,
        id_supplier_Id: 0,
        id_department_Id: 0,
        id_module_Id: 1,
        id_company_Id: 1,
    });

    const [createInventoryProduct, { isSuccess, isError, error: mutationError }] = useCreateInventoryProductMutation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createInventoryProduct(formData).unwrap();
        } catch (error) {
            console.error("Error al crear el producto:", error);
        }
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
                            <Button onClick={() => { }}>
                                <p>Download All</p>
                            </Button>
                        </div>

                        {/* Modal para agregar un nuevo producto */}
                        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="New Product">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    {inputFields.map((field) => (
                                        <Input
                                            key={field.name}
                                            label={field.label}
                                            type="text"
                                            value={formData[field.name as keyof PostProduct]}
                                            placeholder={field.placeholder}
                                            name={field.name}
                                            onChange={handleChange}
                                            className="grid grid-cols-2 p-2"
                                        />
                                    ))}
                                </div>
                                <button type="submit" className="btn-submit" disabled={isSuccess || isError}>
                                    {isSuccess ? "Producto Creado" : "Crear Producto"}
                                </button>
                                {isError && <p className="text-red-500">Error: {mutationError.message}</p>}
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
                                    renderRow={(row) =>
                                        <tr key={row.id_inventory_product}>
                                            {headers.map(({ key }) => (
                                                <td key={key} className="px-4 py-2">
                                                    {row[key]}
                                                </td>
                                            ))}
                                            <td>{renderRowActions()}</td>
                                        </tr>
                                    }
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
