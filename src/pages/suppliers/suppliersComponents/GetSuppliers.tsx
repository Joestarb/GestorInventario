import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import DynamicTable from "../../../components/DynamicTable";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import { useUpdateSupplierMutation } from "../../../features/suppliers/updateSupplier";
import { GetSuppliersProps, Suppliers,  } from "../../../models/dtos/suppliers/Suppliers";

const GetSuppliers: React.FC<GetSuppliersProps> = ({ isDarkMode, isDeleting, handleDelete, suppliers }) => {
    const headers: (keyof Suppliers)[] = [
        "id_supplier",
        "name_supplier",
        "name_category_supplier",
        "phone_supplier",
        "mail_supplier",
        "suggested_price",
    ];

    const [updateSupplier] = useUpdateSupplierMutation();
    const [isEditing, setIsEditing] = useState(false);

     // Mantén el ID del proveedor por separado
     const [selectedSupplierId, setSelectedSupplierId] = useState<number | null>(null);
     const [selectedSupplier, setSelectedSupplier] = useState<EditableSupplier | null>(null);
 
     const handleEditClick = (supplier: Suppliers) => {
         // Extraer y preparar los datos del proveedor para edición
         setSelectedSupplierId(supplier.id_supplier);
         setSelectedSupplier({
             name_supplier: supplier.name_supplier,
             mail_supplier: supplier.mail_supplier,
             phone_supplier: supplier.phone_supplier,
             suggested_price: supplier.suggested_price,
             id_category_supplier_Id: supplier.id_category_supplier_Id,
             id_module_Id: supplier.id_module_Id,
             id_company_Id: supplier.id_company_Id,
         });
         setIsEditing(true);
     };
 
     const handleUpdate = async () => {
         if (selectedSupplier && selectedSupplierId) {
             try {
                 // Realizar la solicitud de actualización con ID en la query string
                 await updateSupplier({
                     query: { id: selectedSupplierId },
                     body: selectedSupplier,
                 }).unwrap();
 
                 Swal.fire({
                     icon: "success",
                     title: "Proveedor actualizado",
                     text: "Los datos del proveedor han sido actualizados correctamente.",
                     confirmButtonText: "Aceptar",
                 });
 
                 setIsEditing(false);
                 setSelectedSupplierId(null);
                 setSelectedSupplier(null);
             } catch (error) {
                 Swal.fire({
                     icon: "error",
                     title: "Error al actualizar",
                     text: "Hubo un error al actualizar el proveedor. Intenta de nuevo.",
                     confirmButtonText: "Aceptar",
                 });
             }
         }
     };
    type EditableSupplier = {
        name_supplier: string;
        mail_supplier: string;
        phone_supplier: number;
        suggested_price: number;
        id_category_supplier_Id: number;
        id_module_Id: number;
        id_company_Id: number;
    };
    
      
   
    
    const renderRow = (supplier: Suppliers) => (
        <tr className="border-b" key={supplier.id_supplier}>
            <td className={`px-6 py-4 font-medium ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>{supplier.name_supplier}</td>
            <td className={`px-6 py-4 font-medium ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>{supplier.name_category_supplier}</td>
            <td className={`px-6 py-4 font-medium ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>{supplier.phone_supplier}</td>
            <td className={`px-6 py-4 ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>{supplier.mail_supplier}</td>
            <td className={`px-6 py-4 ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>{supplier.suggested_price}</td>
            <td className="px-2 py-2 text-center">
                <div className="flex gap-2 justify-center">
                    <Link to={`/suppliers/details/${supplier.id_supplier}`}>
                        <button
                            className={`bg-transparent text-xs border border-gray-200 font-bold uppercase p-2 rounded hover:bg-green-500 hover:text-white transition-colors ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}
                            type="button"
                        >
                            Details
                        </button>
                    </Link>
                    <button
                        className={`bg-transparent text-xs border border-gray-200 font-bold uppercase p-2 rounded hover:bg-blue-500 hover:text-white transition-colors ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}
                        type="button"
                        onClick={() => handleEditClick(supplier)}
                    >
                        Edit
                    </button>
                    <button
                        className={`bg-transparent text-xs border border-gray-200 font-bold uppercase p-2 rounded hover:bg-red-500 hover:text-white transition-colors ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}
                        type="button"
                        onClick={() => handleDelete(supplier.id_supplier)}
                        disabled={isDeleting}
                    >
                        {isDeleting ? "Eliminando..." : "Delete"}
                    </button>
                </div>
            </td>
        </tr>
    );

    return (
        <>
            <DynamicTable<Suppliers>
                data={suppliers || []}
                headers={headers}
                renderRow={renderRow}
                className="text-sm border text-left"
            />
            <Modal
                isOpen={isEditing}
                onClose={() => setIsEditing(false)}
                title="Editar Proveedor"
            >
                {selectedSupplier && (
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Nombre</label>
                            <Input
                                placeholder=""
                                label=""
                                name=""
                                type="text"
                                value={selectedSupplier.name_supplier}
                                onChange={(e) => setSelectedSupplier({ ...selectedSupplier, name_supplier: e.target.value })}
                                className={`border border-gray-300 rounded px-3 py-2 w-full text-black ${isDarkMode? ' text-white': '  text-black' }`}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Correo</label>
                            <Input
                                placeholder=""
                                label=""
                                name=""
                                type="email"
                                value={selectedSupplier.mail_supplier}
                                onChange={(e) => setSelectedSupplier({ ...selectedSupplier, mail_supplier: e.target.value })}
                                className={`border border-gray-300 rounded px-3 py-2 w-full text-black ${isDarkMode? ' text-white': '  text-black' }`}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Teléfono</label>
                            <Input
                                placeholder=""
                                label=""
                                name=""
                                type="text"
                                value={selectedSupplier.phone_supplier}
                                onChange={(e) => setSelectedSupplier({ ...selectedSupplier, phone_supplier: Number(e.target.value) })}
                                className={`border border-gray-300 rounded px-3 py-2 w-full text-black ${isDarkMode? ' text-white': '  text-black' }`}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Precio sugerido</label>
                            <Input
                                placeholder=""
                                label=""
                                name=""
                                type="number"
                                value={selectedSupplier.suggested_price}
                                onChange={(e) => setSelectedSupplier({ ...selectedSupplier, suggested_price: Number(e.target.value) })}
                                className={`border border-gray-300 rounded px-3 py-2 w-full text-black ${isDarkMode? ' text-white': '  text-black' }`}
                            />
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={handleUpdate}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Guardar
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                )}
            </Modal>
        </>
    );
};

export default GetSuppliers;
