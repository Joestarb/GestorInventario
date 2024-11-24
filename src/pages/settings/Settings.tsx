import React, { useState } from "react";
import WhiteCard from "../../components/WhiteCard";
import useTheme from '../../hooks/useTheme';
import ProfileCard from './settingsComponents/ProfileCard';
import PersonalInfo from './settingsComponents/PersonalInfo';
import CompanyInfo from './settingsComponents/CompanyInfo';
import { MdEdit } from "react-icons/md";

const Settings: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    fullName: 'Josue Antonio Chan Gutierrez',
    email: 'cgjosue17@gmail.com',
    phone: '9984847064',
    role: 'Desarrollador',
    position: 'Ingeniero en Software',
    company: 'Tech Innovators Inc.',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="p-3 mx-auto font-sans">
      <WhiteCard
        title="Información de la cuenta"
        subtitle="Detalles de perfil"
        isDarkMode={isDarkMode}
        headerActions={
          <button
            className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            onClick={() => setIsModalOpen(true)}
          >
            <MdEdit className="mr-1" />
            Editar
          </button>
        }
      >
        <ProfileCard formData={formData} />
        <PersonalInfo
          formData={formData}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleInputChange={handleInputChange}
        />
        <CompanyInfo formData={formData} />
      </WhiteCard>
    </div>
  );
};

export default Settings;
