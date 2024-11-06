import React from 'react';
import { ModalProps } from '../models/dtos/components/componentsProps';
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-4">
        {/* Header del Modal */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        {/* Contenido del Modal */}
        <div className="mt-4">
          {children}
        </div>
        {/* Footer del Modal (Opcional) */}
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
