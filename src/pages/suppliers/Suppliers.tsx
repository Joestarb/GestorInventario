import React, { useEffect, useState } from 'react';
import useTheme from '../../hooks/useTheme';
import { IoFilter } from 'react-icons/io5';
import WhiteCard from '../../components/WhiteCard';
import Button from '../../components/Button';
import { useGetSuppliersQuery } from "../../features/suppliers/getSuppliersApi.ts";
import { useDeleteSupplierMutation } from "../../features/suppliers/deleteSupplierApi";  // Importa el hook
import Swal from 'sweetalert2';
import GetSuppliers from './suppliersComponents/GetSuppliers.tsx';

const Suppliers: React.FC = () => {
    const { isDarkMode } = useTheme();

    const { data: supplierData, isLoading, error } = useGetSuppliersQuery();
    const [suppliers, setSuppliers] = useState<typeof supplierData | null>(null);

    const [deleteSupplier, { isLoading: isDeleting, isSuccess, }] = useDeleteSupplierMutation();  // Usa el hook

    const [supplierIdToDelete, setSupplierIdToDelete] = useState<number | null>(null); // Estado para el ID del proveedor

    useEffect(() => {
        if (supplierData) {
            setSuppliers(supplierData);
        }
    }, [supplierData]);

    // Actualiza el estado después de una eliminación exitosa
    useEffect(() => {
        if (isSuccess && supplierIdToDelete !== null) {
            setSuppliers((prev) => prev?.filter((supplier) => supplier.id_supplier !== supplierIdToDelete));
            setSupplierIdToDelete(null); // Limpia el ID después de la eliminación
            Swal.fire({
                icon: 'success',
                title: 'Proveedor eliminado',
                text: 'El proveedor se ha eliminado con éxito.',
                confirmButtonText: 'Aceptar',
                customClass: {
                    popup: isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800',  // Cambiar fondo y texto según el modo
                    confirmButton: isDarkMode ? 'bg-blue-500 text-white' : 'bg-blue-700 text-white',
                }
            });
        }
    }, [isSuccess, supplierIdToDelete, isDarkMode]);

    // Renderizar mientras los datos están cargando
    if (isLoading) return <p>Cargando suppliers...</p>;

    // Renderizar en caso de error
    if (error) {
        const errorMessage = 'status' in error ? error.status : 'Error desconocido';
        return <p>Error al cargar los suppliers: {errorMessage}</p>;
    }

    const handleDelete = (id: number) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¡Esta acción no se puede deshacer!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            customClass: {
                popup: isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800',  // Cambiar fondo y texto según el modo
                confirmButton: isDarkMode ? 'bg-red-500 text-white' : 'bg-red-700 text-white',
                cancelButton: isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                setSupplierIdToDelete(id);
                deleteSupplier(id);
            }
        });
    };

    const headers = ['Supplier Name', 'Category', 'Contact Number', 'Email', 'Suggested Price', 'Actions'];



    return (
        <WhiteCard
            title="Suppliers"
            isDarkMode={isDarkMode}
            headerActions={
                <div className="flex gap-2">
                    <Button className="text-xs sm:text-sm">Add Supplier</Button>
                    <button
                        className={`flex items-center space-x-2 bg-transparent text-xs sm:text-sm border border-gray-200 font-bold p-2 rounded ${isDarkMode ? 'text-white' : 'text-black'}`}
                        type="button"
                    >
                        <IoFilter className='mr-1' />
                        Filters
                    </button>
                    <button
                        className={`bg-transparent text-xs sm:text-sm border border-gray-200 font-bold p-2 rounded ${isDarkMode ? 'text-white' : 'text-black'}`}
                        type="button"
                    >
                        Download all
                    </button>
                </div>
            }
        >
            <div className="overflow-x-auto">
                <GetSuppliers
                    isDarkMode={isDarkMode}
                    isDeleting={isDeleting}
                    handleDelete={handleDelete}
                    suppliers={suppliers}
                    headers={headers}
                />
            </div>
        </WhiteCard>
    );
};

export default Suppliers;
