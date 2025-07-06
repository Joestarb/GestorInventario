import React, { useState, useEffect } from 'react';
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
import { ProductsProps } from "../../../models/dtos/products/Product.ts";
import { useGetInventoryPDFQuery } from "../../../features/inventories/getInventoryPDFApi.ts";

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
    setEditMode,
}) => {
    const { translate } = useLanguage();
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const user = JSON.parse(localStorage.getItem('userToken') || '{}');

    // Estado para manejar la generación del PDF
    const [triggerDownload, setTriggerDownload] = useState<boolean>(false);

    // Obtén los datos del localStorage
    const userToken = localStorage.getItem('userToken');
    const userData = userToken ? JSON.parse(userToken) : null;

    // Extraer los campos necesarios
    const {
        company = '',
        department = '',
        id_user,
        name_user,
        mail_user,
        role,
        position,
    } = userData || {};

    // Llama al hook para obtener el PDF solo cuando triggerDownload es true
    const { data, isFetching } = useGetInventoryPDFQuery(
        {
            companyName: company || '',
            departmentName: department || '',
        },
        { skip: !triggerDownload } // Evita que se ejecute inmediatamente
    );

    // Efecto para descargar el PDF cuando se obtienen los datos
    useEffect(() => {
        if (data && triggerDownload) {
            console.log("PDF data received:", data); // Muestra los datos que llegan
            const url = window.URL.createObjectURL(data);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Inventory.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTriggerDownload(false); // Resetea el estado
        }
    }, [data, triggerDownload]);

    const handleDownloadPDF = () => {
        if (!company || !department) {
            console.error("Company or department data is missing.");
            return;
        }

        console.log("Triggering PDF download with data:", {
            id_user,
            name_user,
            mail_user,
            role,
            position,
            company,
            department,
        });

        setTriggerDownload(true);
    };

    const renderRowActions = (row: InventoryProduct) => (
        <div className="flex gap-2">
            <Button
                onClick={() => handleEdit(row)}
                className="hover:bg-blue-700 font-semibold text-sm"
            >
                {translate('edit')}
            </Button>
            <Button
                onClick={() => handleDelete(row.id_inventory_product)}
                className="bg-red-500 hover:bg-red-700 font-semibold text-sm"
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
                className=' h-screen'
                children={
                    <>
                        {user.role != 'User' && (
                            <div className="flex w-full justify-end gap-8">
                                <Button onClick={() => {
                                    setEditMode(false);
                                    setIsModalOpen(true);
                                }}>
                                    <p>Add Product</p>
                                </Button>
                                <Button onClick={handleDownloadPDF} className="bg-green-500 hover:bg-green-700">
                                    {isFetching ? 'Generating PDF...' : 'Download Inventory PDF'}
                                </Button>
                            </div>
                        )}

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
                                            {user.role === 'Administrator' && (
                                                <td className="px-4 py-2">
                                                    {renderRowActions(row)}
                                                </td>
                                            )}
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
