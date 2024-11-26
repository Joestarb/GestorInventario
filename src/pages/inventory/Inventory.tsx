import React, { useState } from 'react';
import { PostProduct } from "../../models/dtos/inventories/inventories.ts";
import OverhallInventory from './inventoryComponents/OverhallInventory'
import useTheme from '../../hooks/useTheme'
import Products from './inventoryComponents/Products'
import { useGetInventoriesQuery } from "../../features/inventories/getInventoriesApi.ts";
import useLanguage from "../../hooks/useLanguage.ts";
import { useCreateInventoryProductMutation } from "../../features/inventories/postInventoriesApi.ts";
import { useUpdateInventoryProductMutation } from "../../features/inventories/putInventoriesApi.ts";
import { useDeleteInventoryProductMutation } from "../../features/inventories/deleteInventoriesApi.ts";
import { InventoryProduct } from "../../models/dtos/inventories/inventories.ts";
import Swal from 'sweetalert2';
const Inventory: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<InventoryProduct | null>(null);

    const { translate } = useLanguage();
    const {isDarkMode} = useTheme()
    const { data: inventories = [], isLoading, error } = useGetInventoriesQuery();
    const [createInventoryProduct] = useCreateInventoryProductMutation();
    const [updateInventoryProduct] = useUpdateInventoryProductMutation();
    const [deleteInventoryProduct] = useDeleteInventoryProductMutation(); // Hook de eliminación

    const inputFields = [
        { label: 'Product Name', placeholder: 'name', name: 'name_product' },
        { label: 'Stock', placeholder: 'Stock', name: 'stock_product' },
        { label: 'Price', placeholder: 'Price', name: 'price_product' },
        { label: 'Category', placeholder: 'Category ID', name: 'id_category_product_Id' },
        { label: 'Movement Type', placeholder: 'Movement Type ID', name: 'id_movement_type_Id' },
        { label: 'Supplier', placeholder: 'Supplier ID', name: 'id_supplier_Id' },
        { label: 'Department', placeholder: 'Department ID', name: 'id_department_Id' },
        // { label: 'Company', placeholder: 'Department ID', name: 'id_company_Id' },
        // { label: 'Module', placeholder: 'Department ID', name: 'id_module_Id' },
        // { label: 'state', placeholder: 'Department ID', name: 'id_state_Id' },


    ];
    const headers: { key: keyof InventoryProduct; label: string }[] = [
        { key: 'name_product', label: translate('nameProduct') },
        { key: 'stock_product', label: 'Stock' },
        { key: 'price_product', label: translate('price') },
        { key: 'name_category_product', label: translate('category') },
        { key: 'name_state', label: translate('state') },
        { key: 'name_movement_type', label: translate('movementType') },
        { key: 'name_supplier', label: translate('supliers') },
        { key: 'name_department', label: translate('department') },
    ];

    const [formData, setFormData] = useState<PostProduct>({
        name_product: '',
        stock_product: 0,
        price_product: 0,
        id_category_product_Id: 0,
        id_state_Id: 1,
        id_movement_type_Id: 0,
        id_supplier_Id: 0,
        id_department_Id: 0,
        id_module_Id: 1,
        id_company_Id: 1,
        id_user_Id:1
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: ['id_company_Id', 'id_module_Id', 'id_state_Id', 'id_user_Id'].includes(name)
                ? 1 // Mantén estos campos siempre en 1
                : value,
        }));
    };

    const handleEdit = (product: PostProduct) => {
        setFormData((prevFormData) => ({
            ...prevFormData, // Conservamos los valores predeterminados
            name_product: product.name_product || '',
            stock_product: product.stock_product || 1,
            price_product: product.price_product || 1,
            id_category_product_Id: product.id_category_product_Id || 1, // Mapear con valores por defecto
            id_state_Id: product.id_state_Id || 1,
            id_movement_type_Id: product.id_movement_type_Id || 1,
            id_supplier_Id: product.id_supplier_Id || 1,
            id_department_Id: product.id_department_Id || 1,
            id_module_Id: product.id_module_Id || 1,
            id_company_Id: product.id_company_Id || 1,
        }));
        // @ts-ignore
        setSelectedProduct(product);
        setEditMode(true);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: number) => {
        try {
            // Confirmación con SweetAlert
            const result = await Swal.fire({
                title: '¿Estás seguro?',
                text: "Esta acción no se puede deshacer",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar',
            });
    
            if (result.isConfirmed) {
                await deleteInventoryProduct(id).unwrap(); // Llama al endpoint para eliminar
                console.log(`Producto con ID ${id} eliminado.`);
    
                Swal.fire(
                    '¡Eliminado!',
                    'El producto ha sido eliminado.',
                    'success'
                );
                setTimeout(() => {
                    window.location.reload();
                  }, 1000);
            }
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
    
            Swal.fire(
                'Error',
                'No se pudo eliminar el producto.',
                'error'
            );
        }
        

    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            if (editMode && selectedProduct) {
                await updateInventoryProduct({
                    id: selectedProduct.id_inventory_product,
                    data: formData,
                }).unwrap();
    
                Swal.fire(
                    '¡Actualizado!',
                    'El producto ha sido actualizado correctamente.',
                    'success'
                );
                setTimeout(() => {
                    window.location.reload();
                  }, 1000);
            } else {
                await createInventoryProduct(formData).unwrap();
    
                Swal.fire(
                    '¡Creado!',
                    'El producto ha sido creado exitosamente.',
                    'success'
                );
            }
    
            setIsModalOpen(false);
            resetForm();
        } catch (error) {
            console.error("Error al guardar el producto:", error);
    
            Swal.fire(
                'Error',
                'No se pudo guardar el producto.',
                'error'
            );
        }
    };

    const resetForm = () => {
        setFormData({
            name_product: '',
            stock_product: 0,
            price_product: 0,
            id_category_product_Id: 0,
            id_state_Id: 1,
            id_movement_type_Id: 0,
            id_supplier_Id: 0,
            id_department_Id: 0,
            id_module_Id: 1,
            id_company_Id: 1,
            id_user_Id:1,
        });
    };

    return (
    <div className=' py-6 px-4'>
      <OverhallInventory isDarkMode={isDarkMode} />
      <br />
        <Products
            isDarkMode={isDarkMode}
            inventories={inventories}
            isLoading={isLoading}
            error={error}
            createInventoryProduct={createInventoryProduct}
            updateInventoryProduct={updateInventoryProduct}
            deleteInventoryProduct={deleteInventoryProduct}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            formData={formData}
            setFormData={setFormData}
            headers={headers}
            inputFields={inputFields}
            editMode={editMode}
            selectedProduct={selectedProduct}
            resetForm={resetForm}
            setIsModalOpen={setIsModalOpen}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            isModalOpen={isModalOpen}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            setEditMode={setEditMode}
        />
    </div>
  )
}

export default Inventory