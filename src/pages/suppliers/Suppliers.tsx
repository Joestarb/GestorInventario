import React, { useEffect, useState } from 'react';
import useTheme from '../../hooks/useTheme';
import { IoFilter } from 'react-icons/io5';
import WhiteCard from '../../components/WhiteCard';
import Button from '../../components/Button';
import { useGetSuppliersQuery } from "../../features/suppliers/getSuppliersApi";
import { useDeleteSupplierMutation } from "../../features/suppliers/deleteSupplierApi";
import { useCreateSupplierMutation } from "../../features/suppliers/createSupplierApi";
import Swal from 'sweetalert2';
import GetSuppliers from './suppliersComponents/GetSuppliers';
import SkeletonLoader from '../../components/SkeletonLoader';
import { SuppliersPostAndPut } from '../../models/dtos/suppliers/Suppliers';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
const Suppliers: React.FC = () => {
    const { isDarkMode } = useTheme();
    const { data: supplierData, isLoading, error } = useGetSuppliersQuery();
    const [suppliers, setSuppliers] = useState(supplierData || null);
    const user = JSON.parse(localStorage.getItem('userToken') || '{}');

    const [deleteSupplier, { isLoading: isDeleting, isSuccess }] = useDeleteSupplierMutation();
    const [createSupplier, { isLoading: isCreating }] = useCreateSupplierMutation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newSupplier, setNewSupplier] = useState<SuppliersPostAndPut>({
        name_supplier: '',
        mail_supplier: '',
        phone_supplier: 0,
        id_category_supplier_Id: 0,
        id_module_Id: 0,
        id_company_Id: 0,
        products: [],
    });

    const inputFields = [
        { type:'text', name: 'name_supplier', label: 'Supplier Name', placeholder: 'Enter supplier name' },
        { type:'email', name: 'mail_supplier', label: 'Email', placeholder: 'Enter email' },
        { type:'number', name: 'phone_supplier', label: 'Phone', placeholder: 'Enter phone number' },
        { type:'text', name: 'id_category_supplier_Id', label: 'Category ID', placeholder: 'Enter category ID' },
        { type:'text', name: 'id_module_Id', label: 'Module ID', placeholder: 'Enter module ID' },
        { type:'text', name: 'id_company_Id', label: 'Company ID', placeholder: 'Enter company ID' },
    ];

    useEffect(() => {
        if (supplierData) {
            setSuppliers(supplierData);
        }
    }, [supplierData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewSupplier((prev) => ({
            ...prev,
            [name]: name.includes('Id') || name === 'phone_supplier' ? Number(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await createSupplier(newSupplier).unwrap();
            setSuppliers((prev) => (prev ? [...prev, result] : [result]));
            Swal.fire({
                icon: 'success',
                title: 'Supplier Created',
                text: 'The supplier has been created successfully.',
                confirmButtonText: 'Accept',
                customClass: {
                    popup: isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800',
                    confirmButton: isDarkMode ? 'bg-blue-500 text-white' : 'bg-blue-700 text-white',
                },
                
            });
            setTimeout(() => {
                window.location.reload();
              }, 1000);
            setNewSupplier({
                name_supplier: '',
                mail_supplier: '',
                phone_supplier: 0,
                id_category_supplier_Id: 0,
                id_module_Id: 0,
                id_company_Id: 0,
                products: [],
            });
            setIsModalOpen(false);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to create the supplier.',
                confirmButtonText: 'Accept',
                customClass: {
                    popup: isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800',
                    confirmButton: isDarkMode ? 'bg-red-500 text-white' : 'bg-red-700 text-white',
                },
                
            });
        }
    };

    const headers = ['Supplier Name', 'Category', 'Contact Number', 'Email', 'Suggested Price', 'Actions'];

    if (isLoading) return <SkeletonLoader />;

    if (error) {
        const errorMessage = 'status' in error ? error.status : 'Unknown error';
        return <p>Error loading suppliers: {errorMessage}</p>;
    }

    return (
        <>
            <WhiteCard
                title="Suppliers"
                isDarkMode={isDarkMode}
                headerActions={
                    user.role != 'User' && (
                        <div className="flex gap-2">
                            <Button
                                className="text-xs sm:text-sm"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Add Supplier
                            </Button>
                        </div>
                    )
                }
            >
                <div className="overflow-x-auto">
                    <GetSuppliers
                        isDarkMode={isDarkMode}
                        isDeleting={isDeleting}
                        handleDelete={(id) => deleteSupplier(id)}
                        suppliers={suppliers}
                        headers={headers}
                    />
                </div>
            </WhiteCard>

            <Modal
                onSave={handleSubmit}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="New Supplier"
            >
                <form onSubmit={handleSubmit}>
                    {inputFields.map((field) => (
                        <Input
                            key={field.name}
                            label={field.label}
                            type="text"
                            value={newSupplier[field.name as keyof SuppliersPostAndPut]?.toString() || ''}
                            placeholder={field.placeholder}
                            name={field.name}
                            onChange={handleChange}
                        />
                    ))}
                </form>
            </Modal>
        </>
    );
};

export default Suppliers;