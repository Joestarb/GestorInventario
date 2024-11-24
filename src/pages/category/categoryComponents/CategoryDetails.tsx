import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import DynamicTable from '../../../components/DynamicTable';
import WhiteCard from '../../../components/WhiteCard';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import useTheme from '../../../hooks/useTheme';
import { useGetCategoriesProductsQuery } from '../../../features/Categories/Product/getCategoriesProducts';
import { useGetCategoriesPurchaseOrdersQuery } from '../../../features/Categories/PurchaseOrder/getCategoriesPurchaseOrders';
import { useGetCategoriesSuppliersQuery } from '../../../features/Categories/Supplier/getCategoriesSuppliers';
import { useDeleteCategoryProductMutation } from '../../../features/Categories/Product/deleteCategoryProduct';
import { useDeleteCategoryPurchaseOrderMutation } from '../../../features/Categories/PurchaseOrder/deleteCategoryPurchaseOrder';
import { useDeleteCategorySupplierMutation } from '../../../features/Categories/Supplier/deleteCategorySupplier';

const CategoryDetail: React.FC<{ isDarkMode: boolean }> = () => {
    const { categoryName } = useParams<{ categoryName: string }>();
    const { isDarkMode } = useTheme();
    const decodedCategoryName = decodeURIComponent(categoryName || '');

    // Hooks de API
    const { data: productsData = [], isLoading: isLoadingProducts, refetch: refetchProducts } = useGetCategoriesProductsQuery();
    const { data: purchaseOrdersData = [], isLoading: isLoadingPurchaseOrders, refetch: refetchPurchaseOrders } = useGetCategoriesPurchaseOrdersQuery();
    const { data: suppliersData = [], isLoading: isLoadingSuppliers, refetch: refetchSuppliers } = useGetCategoriesSuppliersQuery();

    const [deleteCategoryProduct] = useDeleteCategoryProductMutation();
    const [deleteCategoryPurchaseOrder] = useDeleteCategoryPurchaseOrderMutation();
    const [deleteCategorySupplier] = useDeleteCategorySupplierMutation();


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [filterText, setFilterText] = useState(''); // Estado del filtro

    // Selección de datos según la categoría
    let categoryDetails: any[] = [];
    let headers: string[] = [];
    let deleteFunction: any;
    let idField: string = '';
    console.log('purchaseOrdersData:', purchaseOrdersData);

    if (decodedCategoryName === 'Categoría Productos') {
        categoryDetails = productsData;
        headers = ['name_category_product', 'name_company'];
        deleteFunction = deleteCategoryProduct;
        idField = 'id_category_product';
    } else if (decodedCategoryName === 'Categoría Proveedores') {
        categoryDetails = suppliersData;
        headers = ['name_category_supplier', 'name_company'];
        deleteFunction = deleteCategorySupplier;
        idField = 'id_category_supplier';
    } else if (decodedCategoryName === 'Categoria Ordenes') {
        categoryDetails = purchaseOrdersData;
        headers = ['name_category_purchase_order', 'name_company'];
        deleteFunction = deleteCategoryPurchaseOrder;
        idField = 'id_category_purchase_order';
    }

    // Función general para eliminar
    const handleDelete = async (id: number) => {
        const confirm = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará el elemento.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        });

        if (confirm.isConfirmed) {
            try {
                if (decodedCategoryName === 'Categoría Productos') {
                    await deleteCategoryProduct(id).unwrap();
                    Swal.fire('Eliminado', 'El producto ha sido eliminado.', 'success');
                    refetchProducts();
                } else if (decodedCategoryName === 'Categoría Proveedores') {
                    await deleteCategorySupplier(id).unwrap();
                    Swal.fire('Eliminado', 'El proveedor ha sido eliminado.', 'success');
                    refetchSuppliers();
                } else if (decodedCategoryName === 'Categoria Ordenes') {
                    await deleteCategoryPurchaseOrder(id).unwrap();
                    Swal.fire('Eliminado', 'La orden de compra ha sido eliminada.', 'success');
                    refetchPurchaseOrders();
                }
                setIsModalOpen(false);
            } catch (error: any) {
                console.error('Error:', error);
                const errorMessage = error?.message || 'Ocurrió un error inesperado.';
                Swal.fire('Error', `No se pudo eliminar el elemento: ${errorMessage}`, 'error');
            }
        }
    };

    // Filtrar los datos
    const filteredData = categoryDetails.filter((item) =>
        Object.values(item).some((value:any) =>
            value.toString().toLowerCase().includes(filterText.toLowerCase())
        )
    );

    // Renderizado de filas
    const renderRow = (category: any) => (
        <tr className="border-b" key={category[idField]}>
            {headers.map((header) => (
                <td
                    key={header}
                    className={`px-6 py-4 font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}
                >
                    {category[header]}
                </td>
            ))}
            <td className="px-2 py-2 text-center">
                <div className="flex gap-2 justify-start">
                    <button
                        className={`bg-transparent text-xs border border-gray-200 font-bold uppercase p-2 rounded hover:bg-blue-500 hover:text-white transition-colors ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}
                        type="button"
                    >
                        Edit
                    </button>
                    <button
                        className={`bg-transparent text-xs border border-gray-200 font-bold uppercase p-2 rounded hover:bg-red-500 hover:text-white transition-colors ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}
                        type="button"
                        onClick={() => handleDelete(category[idField])}
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );

    return (
        <WhiteCard
            title={decodedCategoryName}
            isDarkMode={isDarkMode}
            children={
                <>
                    <div className="flex w-full justify-end mb-3 gap-4 sm:gap-4 md:gap-6">
                        <Button onClick={() => setIsModalOpen(true)} className="sm:px-3 sm:py-1 sm:text-sm md:px-4 md:py-2 md:text-base">
                            <p>Agregar {decodedCategoryName}</p>
                        </Button>
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="border bg-transparent p-2 rounded focus:outline-none focus:border-blue-400 focus:ring-2 
                  sm:text-sm  md:text-base"
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

                    {/* Modal para crear categorías */}
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title={`Crear ${decodedCategoryName}`}
                    >
                        <div>
                            <label>Nombre de la nueva categoría</label>
                            <input
                                type="text"
                                className="form-input mt-2"
                                value={newCategoryName}
                                onChange={(e) => setNewCategoryName(e.target.value)}
                            />
                        </div>
                    </Modal>
                </>
            }
        />
    );
};

export default CategoryDetail;
