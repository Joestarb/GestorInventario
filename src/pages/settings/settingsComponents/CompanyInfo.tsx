import React from "react";

interface CompanyInfoProps {
  formData: {
    role: string;
    position: string;
    company: string;
  };
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ formData }) => {
  return (
    <div className="mb-6 border border-gray-200 p-4 rounded-md">
      <h2 className="text-medium sm:text-lg font-bold mb-4">Datos del Usuario en la Empresa</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Rol</label>
          <p>{formData.role}</p>
        </div>
        <div>
          <label className="block text-sm font-medium">Posición</label>
          <p>{formData.position}</p>
        </div>
        <div>
          <label className="block text-sm font-medium">Compañia</label>
          <p>{formData.company}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
