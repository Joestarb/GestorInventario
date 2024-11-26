import React, { useState } from 'react';
import DynamicTable from '../../../components/DynamicTable';
import WhiteCard from '../../../components/WhiteCard';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import Swal from 'sweetalert2';
import { useGetPurchaseOrderQuery, useCreatePurchaseOrderMutation } from '../../../features/order/purchaseOrderSlice';
import { useGetCategoriesPurchaseOrdersQuery } from '../../../features/Categories/PurchaseOrder/getCategoriesPurchaseOrders';
import { useGetDepartmentQuery } from '../../../features/Department/departmentSlice';
import { useGetSuppliersQuery } from '../../../features/suppliers/getSuppliersApi';
import { useGetStateQuery } from '../../../features/State/stateSlice';
import { useGetInventoriesQuery } from '../../../features/inventories/getInventoriesApi';
import { InventoryProduct } from '../../../models/dtos/inventories/inventories';
import { useGetRolesQuery } from '../../../features/roles/rolesApi';
import { useGetMovementsTypeQuery } from '../../../features/movementsType/movementsTypeSlice';
import { useGetCompaniesQuery } from '../../../features/companies/companiesSlice';

const OrdersList: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    const { data: purchaseOrder } = useGetPurchaseOrderQuery();
    const { data: categories } = useGetCategoriesPurchaseOrdersQuery();
    const { data: departments } = useGetDepartmentQuery();
    const { data: suppliers } = useGetSuppliersQuery();
    const { data: states } = useGetStateQuery();
    const { data: inventories } = useGetInventoriesQuery();
    const { data: users } = useGetRolesQuery();
    const { data: movementsType } = useGetMovementsTypeQuery();
    const { data: companies } = useGetCompaniesQuery();
    const [createOrder] = useCreatePurchaseOrderMutation();
    const [selectedProduct, setSelectedProduct] = useState<InventoryProduct | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [newOrder, setNewOrder] = useState({
        name_purchase_order: '',
        id_user_Id: 0,
        id_category_purchase_order_Id: 0,
        id_department_Id: 0,
        id_supplier_Id: 0,
        id_state_Id: 0,
        id_movement_type_Id: 0,
        id_company_Id: 0,
        products: [] as any[],
    });

    const headers = [ 'name_purchase_order', 'name_user', 'name_category_purchase_order', 'name_department', 'name_supplier', 'name_state', 'name_movement_type', 'name_company', 'products' ];

    const orders = purchaseOrder?.map((order: any) => ({
        name_purchase_order: order.name_purchase_order,
        name_user: order.name_user,
        name_category_purchase_order: order.name_category_purchase_order,
        name_department: order.name_department,
        name_supplier: order.name_supplier,
        name_state: order.name_state,
        name_movement_type: order.name_movement_type,
        name_company: order.name_company,
        products: order.products
            .map((product: any) => 
                `Quantity: ${product.quantity}, Product Name: ${product.name_inventory_product}, Unit Price: ₹${product.unit_price}`)
            .join(' / '),
    })) || [];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewOrder(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(`Input changed: ${name} = ${value}`);
    };

    const handleSelectChange = (name: string, value: string | number) => {
        setNewOrder(prevState => ({
            ...prevState,
            [name]: typeof value === 'string' ? value : parseInt(value as string),
        }));
        console.log(`Select changed: ${name} = ${value}`);
    };

    const handleAddProduct = () => {
        if (selectedProduct) {
            const updatedProducts = [...newOrder.products, selectedProduct];
            setNewOrder(prevState => ({
                ...prevState,
                products: updatedProducts
            }));
            setSelectedProduct(null);
        } else {
            Swal.fire('Error', 'Por favor, selecciona un producto.', 'error');
        }
    };

    const handleSave = async () => {
        console.log('New order before validation:', newOrder);
        if (!newOrder.name_purchase_order || !newOrder.id_user_Id || !newOrder.id_category_purchase_order_Id || !newOrder.id_department_Id || !newOrder.id_supplier_Id || !newOrder.id_state_Id || !newOrder.id_movement_type_Id || !newOrder.id_company_Id || !newOrder.products || newOrder.products.length === 0) {
            Swal.fire('Error', 'Por favor, complete todos los campos.', 'error');
            return;
        }

        const invalidProducts = newOrder.products.filter(product => product.quantity <= 0 || !product.id_inventory_product);
        if (invalidProducts.length > 0) {
            Swal.fire('Error', 'Las cantidades de los productos deben ser mayores a 0 y los productos deben ser válidos.', 'error');
            return;
        }

        const requestPayload = {
            name_purchase_order: newOrder.name_purchase_order,
            id_user_Id: newOrder.id_user_Id,
            id_category_purchase_order_Id: newOrder.id_category_purchase_order_Id,
            id_department_Id: newOrder.id_department_Id,
            id_supplier_Id: newOrder.id_supplier_Id,
            id_state_Id: newOrder.id_state_Id,
            id_movement_type_Id: newOrder.id_movement_type_Id,
            id_company_Id: newOrder.id_company_Id,
            products: newOrder.products.map(product => ({
                quantity: product.quantity,
                id_inventory_product_Id: product.id_inventory_product
            }))
        };
        console.log('Request payload:', requestPayload);
        try {
            await createOrder(requestPayload).unwrap();
            Swal.fire('Éxito', 'La orden fue creada exitosamente.', 'success');
            setNewOrder({
                name_purchase_order: '',
                id_user_Id: 0,
                id_category_purchase_order_Id: 0,
                id_department_Id: 0,
                id_supplier_Id: 0,
                id_state_Id: 0,
                id_movement_type_Id: 0,
                id_company_Id: 0,
                products: [] as any[],
            });
            setIsModalOpen(false);
        } catch (error) {
            Swal.fire('Error', 'Hubo un error al crear la orden.', 'error');
        }
    };

    return (
        <>
            <WhiteCard
                title='Orders'
                isDarkMode={isDarkMode}
                children={
                    <>
                        <div className='flex w-full justify-end gap-8'>
                            <Button
                                onClick={() => setIsModalOpen(true)}
                                children={<p>Add Order</p>} 
                            />
                        </div>

                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            title="New Order"
                            onSave={handleSave}
                        >
                            <div>
                                <Input
                                    label="Order Name"
                                    name="name_purchase_order"
                                    value={newOrder.name_purchase_order}
                                    onChange={handleInputChange}
                                />
                                <div className='grid grid-cols-2'>
                                    <Select
                                        label='Users'
                                        name="id_user_Id"
                                        options={users?.map((user: any) => ({ label: user.name_rol, value:user.id_rol })) || []}
                                        value={newOrder.id_user_Id}
                                        onChange={(selectedValue) => handleSelectChange('id_user_Id', selectedValue)} 
                                    />
                                    <Select
                                        label="Category"
                                        name="id_category_purchase_order_Id"
                                        options={categories?.map((category: any) => ({ label: category.name_category_purchase_order, value: category.id_category_purchase_order })) || []}
                                        value={newOrder.id_category_purchase_order_Id}
                                        onChange={value => handleSelectChange('id_category_purchase_order_Id', value)}
                                    />
                                    <Select
                                        label="Department"
                                        name="id_department_Id"
                                        options={departments?.map((department: any) => ({ label: department.name_department, value: department.id_department })) || []}
                                        value={newOrder.id_department_Id}
                                        onChange={value => handleSelectChange('id_department_Id', value)}
                                    />
                                    <Select
                                        label="Supplier"
                                        name="id_supplier_Id"
                                        options={suppliers?.map((supplier: any) => ({ label: supplier.name_supplier, value: supplier.id_supplier })) || []}
                                        value={newOrder.id_supplier_Id}
                                        onChange={value => handleSelectChange('id_supplier_Id', value)}
                                    />
                                    <Select
                                        label="State"
                                        name="id_state_Id"
                                        options={states?.map((state: any) => ({ label: state.name_state, value: state.id_state })) || []}
                                        value={newOrder.id_state_Id}
                                        onChange={value => handleSelectChange('id_state_Id', value)}
                                    />
                                    <Select
                                        label='Movement Type'
                                        name="id_movement_type_Id"
                                        options={movementsType?.map((movementType: any) => ({ label: movementType.name_movement_type, value: movementType.id_movement_type}) || [])}
                                        value={newOrder.id_movement_type_Id}
                                        onChange={value => handleSelectChange('id_movement_type_Id', value)}
                                    />
                                    <Select
                                        label='Company'
                                        name="id_company_Id"
                                        options={companies?.map((company: anny) => ({ label: company.name_company, value: company.id_company}) || [])}
                                        value={newOrder.id_company_Id}
                                        onChange={value => handleSelectChange('id_company_Id', value)}
                                    />
                                </div>
                                <div className='flex'>
                                    <Select
                                        label="Select Product"
                                        value={selectedProduct ? selectedProduct.id_inventory_product.toString() : ''}
                                        options={inventories?.map((inventory: InventoryProduct) => ({
                                            label: `${inventory.name_product} - ₹${inventory.price_product}`,
                                            value: inventory.id_inventory_product.toString(),
                                        })) || []}
                                        onChange={(selectedId: string) => {
                                            const product = inventories?.find((inventory: InventoryProduct) => inventory.id_inventory_product.toString() === selectedId);
                                            setSelectedProduct(product || null);
                                        }}
                                    />
                                    <Button onClick={handleAddProduct} children={<p>Add Product</p>} />
                                </div>
                                <div>
                                    <h4>Selected Products:</h4>
                                    <ul>
                                        {newOrder.products.map((product, index) => (
                                            <li key={index}>
                                                {product.name_product} - ₹{product.price_product}
                                            </li>
                                        ))}
                                    </ul>
                                </div>    
                            </div>
                        </Modal>
                        <div className='overflow-auto'>
                            <DynamicTable data={orders} headers={headers} />
                        </div>
                    </>
                }
            />
        </>
    );
};

export default OrdersList;