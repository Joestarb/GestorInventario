import React, { useState } from 'react';
import Modal from '../../../components/Modal'; // Importar el modal
import { SuppliersPostAndPut } from '../../../models/dtos/suppliers/Suppliers';
import Button from '../../../components/Button';
const SupplierEditComponent: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<SuppliersPostAndPut>({
    name_supplier: '',
    mail_supplier: '',
    phone_supplier: 0,
    id_category_supplier_Id: 0,
    id_company_Id: 0,
    products: [],
  });

  const handleUpdate = () => {
    // Lógica para enviar la petición de actualización
    console.log('Form data to update:', formData);
    setIsEditing(false);
  };

  return (
    <div>
      {/* Botón para abrir el modal */}
      <Button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
        Edit Supplier
      </Button>

      {/* Modal con el formulario */}
      <Modal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        title="Edit Supplier"
        onSave={handleUpdate}
      >
        {/* Formulario para editar */}
        <div>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name_supplier" className="block font-medium">Name</label>
            <input
              id="name_supplier"
              type="text"
              value={formData.name_supplier}
              onChange={(e) => setFormData({ ...formData, name_supplier: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="mail_supplier" className="block font-medium">Email</label>
            <input
              id="mail_supplier"
              type="email"
              value={formData.mail_supplier}
              onChange={(e) => setFormData({ ...formData, mail_supplier: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Phone Input */}
          <div className="mb-4">
            <label htmlFor="phone_supplier" className="block font-medium">Phone</label>
            <input
              id="phone_supplier"
              type="number"
              value={formData.phone_supplier}
              onChange={(e) => setFormData({ ...formData, phone_supplier: Number(e.target.value) })}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Category Selector */}
          <div className="mb-4">
            <label htmlFor="id_category_supplier_Id" className="block font-medium">Category</label>
            <select
              id="id_category_supplier_Id"
              value={formData.id_category_supplier_Id}
              onChange={(e) => setFormData({ ...formData, id_category_supplier_Id: Number(e.target.value) })}
              className="w-full p-2 border rounded"
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
              className="w-full p-2 border rounded"
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
                <input
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
                  className="p-2 border rounded w-1/2"
                />
                <input
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
                  className="p-2 border rounded w-1/2"
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
              Add Product
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SupplierEditComponent;
