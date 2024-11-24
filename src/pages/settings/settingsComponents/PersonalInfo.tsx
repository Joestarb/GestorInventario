import React from "react";
import Modal from "../../../components/Modal";
import Input from "../../../components/Input";

interface PersonalInfoProps {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    role: string;
    position: string;
    company: string;
  };
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ formData, isModalOpen, setIsModalOpen, handleInputChange }) => {
  const inputFields = [
    { label: 'Nombre Completo', name: 'fullName', value: formData.fullName },
    { label: 'Correo Electrónico', name: 'email', value: formData.email },
    { label: 'Número Telefónico', name: 'phone', value: formData.phone },
    { label: 'Rol', name: 'role', value: formData.role },
    { label: 'Posición', name: 'position', value: formData.position },
    { label: 'Compañía', name: 'company', value: formData.company },
  ];

  return (
    <div className="mb-6 border border-gray-200 p-4 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-medium sm:text-lg font-bold">Información Personal y Empresarial</h2>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Editar Información"
        >
          <div className="space-y-4">
            {inputFields.map((field) => (
              <Input
                key={field.name}
                label={field.label}
                type="text"
                value={field.value}
                placeholder={field.label}
                name={field.name}
                onChange={handleInputChange}
              />
            ))}
          </div>
        </Modal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {inputFields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium">{field.label}</label>
            <p>{field.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
