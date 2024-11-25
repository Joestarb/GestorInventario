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

    const [isEditing, setIsEditing] = useState(false);

        const voidFucntion = ()=>{
            return 0
        }
   
    
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
                        onClick={() => voidFucntion()}
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
            
        </>
    );
};

export default GetSuppliers;
