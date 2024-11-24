import React from 'react';
import { ModalProps } from '../models/dtos/components/componentsProps';
import useTheme from '../hooks/useTheme';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const { isDarkMode } = useTheme();

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`${isDarkMode ? 'dark-components' : 'bg-white'} rounded-lg shadow-lg max-w-md w-full p-4`}>
        {/* Header del Modal */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="">
            &times;
          </button>
        </div>
        {/* Contenido del Modal */}
        <div className="mt-4">
          {children}
        </div>
        {/* Footer del Modal (Opcional) */}
        <div className="flex justify-center mt-4">
          <button
            onClick={onClose}
            className={`${isDarkMode ? '' : 'text-white'} px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 mr-3`}
          >
            Guardar
          </button>
          <button
            onClick={onClose}
            className={`${isDarkMode ? '' : 'text-white'} px-4 py-2 bg-red-500 rounded hover:bg-red-600`}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
