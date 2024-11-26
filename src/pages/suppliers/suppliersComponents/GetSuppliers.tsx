import React, { useState } from "react";
import { Link } from "react-router-dom";
import DynamicTable from "../../../components/DynamicTable";
import { GetSuppliersProps, Suppliers, SuppliersPostAndPut } from "../../../models/dtos/suppliers/Suppliers";
import Button from "../../../components/Button";
import Swal from "sweetalert2";
import { useDeleteSupplierMutation } from "../../../features/suppliers/deleteSupplierApi";
import { useUpdateSupplierMutation } from "../../../features/suppliers/updateSupplier";
import Input from "../../../components/Input";

const GetSuppliers: React.FC<GetSuppliersProps> = ({ isDarkMode, suppliers }) => {
    const headers: (keyof Suppliers)[] = [
        "name_supplier",
        "name_category_supplier",
        "phone_supplier",
        "mail_supplier",
    ];
    const user = JSON.parse(localStorage.getItem("userToken") || "{}");

    const [deleteSupplier, { isLoading: isDeleting }] = useDeleteSupplierMutation();
    const [updateSupplier] = useUpdateSupplierMutation();

    const [isEditing, setIsEditing] = useState(false);
    const [selectedSupplier, setSelectedSupplier] = useState<Suppliers | null>(null);
    const [formData, setFormData] = useState<SuppliersPostAndPut | null>(null);

    const handleDelete = (id: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it",
            cancelButtonText: "Cancel",
            customClass: {
                popup: isDarkMode ? "bg-gray-800 text-gray-100" : " text-gray-800",
                confirmButton: isDarkMode ? "bg-red-500 text-white" : "bg-red-700 text-white",
                cancelButton: isDarkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-black",
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteSupplier(id).unwrap();
                    Swal.fire({
                        icon: "success",
                        title: "Supplier Deleted",
                        text: "The supplier was successfully deleted.",
                        confirmButtonText: "Accept",
                        customClass: {
                            popup: isDarkMode ? "bg-gray-800 text-gray-100" : " ",
                            confirmButton: isDarkMode ? "bg-blue-500 text-white" : "bg-blue-700 text-white",
                        },
                    });
                } catch (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Failed to delete the supplier.",
                        confirmButtonText: "Accept",
                        customClass: {
                            popup: isDarkMode ? "bg-gray-800 text-gray-100" : " ",
                            confirmButton: isDarkMode ? "bg-red-500 text-white" : "bg-red-700 text-white",
                        },
                    });
                }
            }
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        });
    };

    const handleEdit = (supplier: Suppliers) => {
        setSelectedSupplier(supplier);
        setFormData({
            name_supplier: supplier.name_supplier,
            mail_supplier: supplier.mail_supplier,
            phone_supplier: supplier.phone_supplier,
            id_category_supplier_Id: 1, // Adjust if necessary
            id_company_Id: 1, // Adjust if necessary
            id_module_Id: 1, // Adjust if necessary
            products: [],
        });
        setIsEditing(true);
    };

    const handleUpdate = async () => {
        if (!selectedSupplier || !formData) return;

        try {
            await updateSupplier({
                id: selectedSupplier.id_supplier,
                data: formData,
            }).unwrap();

            Swal.fire({
                icon: "success",
                title: "Supplier Updated",
                text: "The supplier was successfully updated.",
                confirmButtonText: "Accept",
            });
            setIsEditing(false);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to update the supplier.",
                confirmButtonText: "Accept",
            });
        }
    };

    const renderRow = (supplier: Suppliers) => (
        <tr className="" key={supplier.id_supplier}>
            <td className={`px-6 py-4 font-medium ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>{supplier.name_supplier}</td>
            <td className={`px-6 py-4 font-medium ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>{supplier.name_category_supplier}</td>
            <td className={`px-6 py-4 font-medium ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>{supplier.phone_supplier}</td>
            <td className={`px-6 py-4 ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>{supplier.mail_supplier}</td>
            <td className={`px-6 py-4 ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>{supplier.suggested_price}</td>
            {user.role === "Administrator" && (
                <td className="px-2 py-2 text-center">
                    <div className="flex gap-2 justify-center">
                        <Button
                            className={`  ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}
                            type="button"
                            onClick={() => handleEdit(supplier)}
                        >
                            Edit
                        </Button>
                      
                        <Button
                            className={` bg-red-600 hover:bg-red-500 hover:text-white transition-colors ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}
                            type="button"
                            onClick={() => handleDelete(supplier.id_supplier)}
                            disabled={isDeleting}
                        >
                            {isDeleting ? "Deleting..." : "Delete"}
                        </Button>
                    </div>
                </td>
            )}
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
            {isEditing && formData && (
   <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
   <div className="dark-components p-8 rounded-lg w-full max-w-lg shadow-lg">
       <h2 className="text-lg font-bold mb-4">Edit Supplier</h2>
       
       {/* Name Input */}
       <div className="mb-4">
           <label htmlFor="name_supplier" className="block font-medium">Name</label>
           <Input
               id="name_supplier"
               type="text"
               value={formData.name_supplier}
               onChange={(e) => setFormData({ ...formData, name_supplier: e.target.value })}
               className={
          `w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none 
          focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          `
        }
           />
       </div>
       
       {/* Email Input */}
       <div className="mb-4">
           <label htmlFor="mail_supplier" className="block font-medium">Email</label>
           <Input
               id="mail_supplier"
               type="email"
               value={formData.mail_supplier}
               onChange={(e) => setFormData({ ...formData, mail_supplier: e.target.value })}
               className={
          `w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none 
          focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          `
        }
           />
       </div>
       
       {/* Phone Input */}
       <div className="mb-4">
           <label htmlFor="phone_supplier" className="block font-medium">Phone</label>
           <Input
               id="phone_supplier"
               type="number"
               value={formData.phone_supplier}
               onChange={(e) => setFormData({ ...formData, phone_supplier: Number(e.target.value) })}
               className={
          `w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none 
          focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          `
        }
           />
       </div>
       
       {/* Category Selector */}
       <div className="mb-4">
           <label htmlFor="id_category_supplier_Id" className="block font-medium">Category</label>
           <select
               id="id_category_supplier_Id"
               value={formData.id_category_supplier_Id}
               onChange={(e) => setFormData({ ...formData, id_category_supplier_Id: Number(e.target.value) })}
               className={
          `w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none 
          focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          `
        }
           >
               <option value={0}>Select Category</option>
               <option value={1}>Category 1</option>
               <option value={2}>Category 2</option>
           </select>
       </div>
       
       {/* Company Selector */}
       <div className="mb-4">
           <label htmlFor="id_company_Id" className="block font-medium">Company</label>
           <select
               id="id_company_Id"
               value={formData.id_company_Id}
               onChange={(e) => setFormData({ ...formData, id_company_Id: Number(e.target.value) })}
               className={
          `w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none 
          focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          `
        }
           >
               <option value={0}>Select Company</option>
               <option value={1}>Company 1</option>
               <option value={2}>Company 2</option>
           </select>
       </div>
       
       {/* Products List */}
       <div className="mb-4">
           <h3 className="font-medium mb-2">Products</h3>
           {formData.products.map((product, index) => (
               <div key={index} className="flex gap-4 mb-2">
                   <Input
                       type="number"
                       value={product.id_inventory_product_Id}
                       placeholder="Product ID"
                       onChange={(e) =>
                           setFormData({
                               ...formData,
                               products: formData.products.map((p, i) =>
                                   i === index ? { ...p, id_inventory_product_Id: Number(e.target.value) } : p
                               ),
                           })
                       }
                       className="p-2 border border-gray-300 rounded w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   />
                   <Input
                       type="number"
                       value={product.suggested_price}
                       placeholder="Suggested Price"
                       onChange={(e) =>
                           setFormData({
                               ...formData,
                               products: formData.products.map((p, i) =>
                                   i === index ? { ...p, suggested_price: Number(e.target.value) } : p
                               ),
                           })
                       }
                       className="p-2 border border-gray-300 rounded w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   />
               </div>
           ))}
           <button
               onClick={() =>
                   setFormData({
                       ...formData,
                       products: [...formData.products, { id_inventory_product_Id: 0, suggested_price: 0 }],
                   })
               }
               className="text-blue-500 hover:underline"
           >
               {/* Add Product */}
           </button>
       </div>

       {/* Action Buttons */}
       <div className="flex gap-4 justify-end mt-6">
           <Button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Save Changes</Button>
           <Button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200">Cancel</Button>
       </div>
   </div>
</div>

)}

        </>
    );
};

export default GetSuppliers;
