    import React, { useState } from 'react';
    import { useParams } from 'react-router-dom';
    import Swal from 'sweetalert2';
    import DynamicTable from '../../../components/DynamicTable';
    import WhiteCard from '../../../components/WhiteCard';
    import Button from '../../../components/Button';
    import Modal from '../../../components/Modal';
    import useTheme from '../../../hooks/useTheme';
    import useLanguage from "../../../hooks/useLanguage.ts";
    import { useGetCategoriesProductsQuery } from '../../../features/Categories/Product/getCategoriesProducts';
    import { useGetCategoriesPurchaseOrdersQuery } from '../../../features/Categories/PurchaseOrder/getCategoriesPurchaseOrders';
    import { useGetCategoriesSuppliersQuery } from '../../../features/Categories/Supplier/getCategoriesSuppliers';
    import { useDeleteCategoryProductMutation } from '../../../features/Categories/Product/deleteCategoryProduct';
    import { useDeleteCategoryPurchaseOrderMutation } from '../../../features/Categories/PurchaseOrder/deleteCategoryPurchaseOrder';
    import { useDeleteCategorySupplierMutation } from '../../../features/Categories/Supplier/deleteCategorySupplier';
    import { useCreateCategoryProductMutation } from '../../../features/Categories/Product/createCategoryProduct';
    import { useUpdateCategoryProductMutation } from '../../../features/Categories/Product/updateCategoryProduct';

    import { useCreateCategoryPurchaseOrderMutation } from '../../../features/Categories/PurchaseOrder/createCategoryPurchaseOrder';
    import { useUpdateCategoryPurchaseOrderMutation } from '../../../features/Categories/PurchaseOrder/updateCategoryPurchaseOrder';

    import { useCreateSupplierMutation } from '../../../features/Categories/Supplier/createCategorySupplier';
    import { useUpdateCategorySupplierMutation } from '../../../features/Categories/Supplier/updateCategorySupplier';
    import { useGetCompaniesQuery } from '../../../features/companies/companiesSlice';

    const CategoryDetail: React.FC = () => {
        const { categoryName } = useParams<{ categoryName: string }>();
        const { isDarkMode } = useTheme();
        const { translate } = useLanguage();
        const decodedCategoryName = decodeURIComponent(categoryName || '');

        // Hooks de API
        const { data: productsData = [], isLoading: isLoadingProducts, refetch: refetchProducts } = useGetCategoriesProductsQuery();
        const { data: purchaseOrdersData = [], isLoading: isLoadingPurchaseOrders, refetch: refetchPurchaseOrders } = useGetCategoriesPurchaseOrdersQuery();
        const { data: suppliersData = [], isLoading: isLoadingSuppliers, refetch: refetchSuppliers } = useGetCategoriesSuppliersQuery();
        const { data: companies = [] } = useGetCompaniesQuery();

        const [deleteCategoryProduct] = useDeleteCategoryProductMutation();
        const [deleteCategoryPurchaseOrder] = useDeleteCategoryPurchaseOrderMutation();
        const [deleteCategorySupplier] = useDeleteCategorySupplierMutation();
        const [createCategoryProduct] = useCreateCategoryProductMutation();
        const [updateCategoryProduct] = useUpdateCategoryProductMutation();
        const [createCategoryPurchaseOrder] = useCreateCategoryPurchaseOrderMutation();
        const [updateCategoryPurchaseOrder] = useUpdateCategoryPurchaseOrderMutation();
        const [createSupplier] = useCreateSupplierMutation();
        const [updateCategorySupplier] = useUpdateCategorySupplierMutation();

        // Estados locales
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
        const [selectedCategory, setSelectedCategory] = useState<any>(null);
        const [newCategoryName, setNewCategoryName] = useState('');
        const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(null);
        const [filterText, setFilterText] = useState('');

        // Lógica de selección según la categoría
        let categoryDetails: any[] = [];
        let headers: string[] = [];
        let deleteFunction: any;
        let refetchFunction: () => void;
        let createFunction: any;
        let updateFunction: any;
        let idField: string = '';

        if (decodedCategoryName === 'Categoría Productos' || 'Category Products') {
            categoryDetails = productsData;
            headers = ['name_category_product', 'name_company'];
            deleteFunction = deleteCategoryProduct;
            refetchFunction = refetchProducts;
            createFunction = createCategoryProduct;
            updateFunction = updateCategoryProduct;
            idField = 'id_category_product';
        } else if (decodedCategoryName === 'Categoría Proveedores' || 'Category Proveedores ') {
            categoryDetails = suppliersData;
            headers = ['name_category_supplier', 'name_company'];
            deleteFunction = deleteCategorySupplier;
            refetchFunction = refetchSuppliers;
            createFunction = createSupplier;
            updateFunction = updateCategorySupplier;
            idField = 'id_category_supplier';
        } else if (decodedCategoryName === 'Categoria Ordenes' || 'Category Orders') {
            categoryDetails = purchaseOrdersData;
            headers = ['name_category_purchase_order', 'name_company'];
            deleteFunction = deleteCategoryPurchaseOrder;
            refetchFunction = refetchPurchaseOrders;
            createFunction = createCategoryPurchaseOrder;
            updateFunction = updateCategoryPurchaseOrder;
            idField = 'id_category_purchase_order';
        }

        const openModal = (mode: 'add' | 'edit', category?: any) => {
            console.log("Modal abierto en modo:", mode);
            console.log("Categoría seleccionada:", category); 
            setModalMode(mode);
            setSelectedCategory(category || null);
            setNewCategoryName(category?.name_category_product || category?.name_category_supplier || category?.name_category_purchase_order || '');
            setSelectedCompanyId(category?.id_company || null);
            setIsModalOpen(true);
        };  


        const handleSave = async () => {
            console.log("Guardando categoría...");
            console.log("Nuevo nombre de categoría:", newCategoryName);
            console.log("ID de la compañía seleccionada:", selectedCompanyId);
            console.log("Modo del modal:", modalMode);

            if (!newCategoryName.trim() || !selectedCompanyId) {
                Swal.fire('Error', 'Todos los campos son obligatorios. Por favor completa la información.', 'warning');
                return;
            }

            try {
                let payload;

                if (decodedCategoryName === 'Categoría Productos' || 'Category Products') {
                    payload = {
                        name_category_product: newCategoryName,
                        id_company_Id: selectedCompanyId,
                    };
                } else if (decodedCategoryName === 'Categoría Proveedores' || 'Category Proveedores') {
                    payload = {
                        name_category_supplier: newCategoryName,
                        id_company_Id: selectedCompanyId,
                    };
                } else if (decodedCategoryName === 'Categoria Ordenes' || 'Category Orders') {
                    payload = {
                        name_category_purchase_order: newCategoryName,
                        id_company_Id: selectedCompanyId,
                    };
                }

                console.log("Payload que se enviará:", payload);

                if (modalMode === 'add') {
                    await createFunction(payload).unwrap();
                    Swal.fire('Creado', 'La categoría fue creada exitosamente', 'success');
                } else if (modalMode === 'edit' && selectedCategory) {
                    await updateFunction({
                        id: selectedCategory[idField],
                        data: payload,
                    }).unwrap();
                    Swal.fire('Actualizado', 'La categoría fue actualizada exitosamente', 'success');
                }

                refetchFunction();
                setIsModalOpen(false);
            } catch (error) {
                console.error("Error al guardar categoría:", error);
                Swal.fire('Error', 'Ocurrió un error al guardar la categoría', 'error');
            }
        };
        



        const handleDelete = async (id: number) => {
            const confirm = await Swal.fire({
                title: '¿Estás seguro?',
                text: 'Esta acción eliminará el elemento.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar',
                customClass: {
                    popup: isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-800',
                    confirmButton: isDarkMode ? 'bg-red-500 text-white' : 'bg-red-600 text-white',
                    cancelButton: isDarkMode ? 'bg-blue-500 text-white' : 'bg-blue-500 text-white',
                }
            });

            if (confirm.isConfirmed) {
                try {
                    await deleteFunction(id).unwrap();
                    Swal.fire('Eliminado', 'Elemento eliminado correctamente.', 'success');
                    refetchFunction();
                } catch (error: any) {
                    Swal.fire('Error', `No se pudo eliminar el elemento: ${error.message}`, 'error');
                }
            }
        };

        const filteredData = categoryDetails.filter((item) =>
            Object.values(item).some((value: any) =>
                value?.toString().toLowerCase().includes(filterText.toLowerCase())
            )
        );

        const renderRow = (category: any) => (
            <tr className="border-b" key={category[idField]}>
                {headers.map((header) => (
                    <td key={header} className={`px-6 py-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                        {category[header]}
                    </td>
                ))}
                <td className="px-2 py-2 text-center">
                    <div className="flex gap-2">
                        <button
                            className="bg-transparent text-xs border font-bold p-2 rounded hover:bg-blue-500 hover:text-white"
                            onClick={() => openModal('edit', category)}
                        >
                            {translate('edit')}
                        </button>
                        <button
                            className="bg-transparent text-xs border font-bold p-2 rounded hover:bg-red-500 hover:text-white"
                            onClick={() => handleDelete(category[idField])}
                        >
                            {translate('delete')}
                        </button>
                    </div>
                </td>
            </tr>
        );

        return (
            <WhiteCard
                title={decodedCategoryName}
                isDarkMode={isDarkMode}
            >
                <>
                    <div className="flex justify-end mb-3 gap-4">
                        <Button onClick={() => openModal('add')} className="bg-blue-500 text-white">
                            Agregar {decodedCategoryName}
                        </Button>
                        <input
                            type="text"
                            placeholder={translate('search')}
                            className={`border p-2 focus:outline-none focus:to-blue-500 focus:ring-2 rounded  ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`}
                            value={filterText}
                            onChange={(e) => setFilterText(e.target.value)}
                        />
                    </div>
                    <div className="overflow-auto">
                        {isLoadingProducts || isLoadingPurchaseOrders || isLoadingSuppliers ? (
                            <p>Cargando datos...</p>
                        ) : (
                            <DynamicTable data={filteredData} headers={headers} renderRow={renderRow} />
                        )}
                    </div>
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title={`${modalMode === 'add' ? 'Agregar' : 'Editar'} ${decodedCategoryName}`}
                        onSave={handleSave}
                    >
                        <div>
                            <label>Nombre de la {decodedCategoryName}</label>
                            <input
                                type="text"
                                value={newCategoryName}
                                onChange={(e) => setNewCategoryName(e.target.value)}
                                className={`border p-2 rounded w-full ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`}
                            />
                        </div>
                        <div className='mt-2'>
                            <label>Empresa</label>
                            <select
                                value={selectedCompanyId || ''}
                                onChange={(e) => setSelectedCompanyId(Number(e.target.value))}
                                className={`border p-2 rounded w-full ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`}
                            >
                                <option value="">Seleccionar empresa</option>
                                {companies.map((company: any) => (
                                    <option key={company.id_company} value={company.id_company}>
                                        {company.name_company}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </Modal>
                </>
            </WhiteCard>
        );
    };

    export default CategoryDetail;
